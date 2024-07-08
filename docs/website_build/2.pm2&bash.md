---
article: false
---
# 自动化更新部署

这里要解决2个问题:
- 1.[自动更新代码](#自动更新代码)
- 2.[打包部署](#打包部署)

## 自动更新代码

这里通过使用`github`的`webhook`.

得知远程`git`仓库代码更新后,拉取更新服务器上`git`仓库

::: tip
`Git Hook`(钩子)是`Git`在代码提交、推送、合并等工作流程中引入的事件触发器，其中最常用的场景是代码检查，持续集成，自动部署等。

`github`上关于`webook`操作的[详细文档](https://docs.github.com/cn/developers/webhooks-and-events/webhooks/about-webhooks)
:::

这里要解决以下问题
- 服务器接收`webhook`请求后再拉取`github`仓库代码
  
解决方案:使用`nodejs`的`http`模块,写一个专门处理`webhook`请求的服务,该服务接收到`webhook`请求后,执行对应更新代码的`shell`脚本

github的webhook配置示意图:
<img :src="$withBase('/imgs/webhook.png')">


核心代码如下
```js
const http = require('http');
const spawn = require('child_process').spawn;
// 这里使用了npm包github-webhook-handler,用来解析webhook请求
const createHandler = require('github-webhook-handler');
// 如图GitHub webhook中配置的Secret,如上图
const secret = 'Gae3$de&1*Cub*IAmlr1ZB6L!ko9BAV#';
// 日志配置
const { error, info } = require('./log.js');

// path是webhook访问的路径,如上图
const handler = createHandler({ path: '/mywebhook', secret: secret });

http
  .createServer(function (req, res) {
    handler(req, res, function (err) {
      res.statusCode = 404;
      res.end('no such location');
    });
  })
  .listen(8080);// 这边的端口监听的本地服务器端口,通过nginx做的方向代理

handler.on('error', function (err) {
  error.error(err);
});

// 监听到push事件的时候执行我们的自动化脚本
handler.on('push', function (event) {
  info.info('Received a push event for %s to %s', event.payload.repository.name, event.payload.ref);
  // bash脚本代码如下
  runCommand('sh', ['./build.sh'], function (txt) {
    info.info(txt);
  });
});

function runCommand(cmd, args, callback) {
  const child = spawn(cmd, args);
  let resp = '';
  child.stdout.on('data', function (buffer) {
    resp += buffer.toString();
  });
  child.stdout.on('end', function () {
    callback(resp);
  });
}
```

## 打包部署

打包部署就是通过`bash`脚本实现,没什么好说的,直接上脚本

自动化脚本如下
```bash
#! /bin/bash

# 任意命令出错时终止运行
set -e

# 代码仓库目录
GITURL="aaaa" # 仓库代码路径
GITDIR="/xxx/xxxx/" # glone仓库路径
BLOG="/xxx/xxxx/abc/" # 本地代码路径
LOG="/xxx/xxxx/bashLog" # 执行脚本日志路径
# Nginx 中配置的网站的 HTML 根目录
OUTPUT="/xxx/xxxx/www/" # 打包后部署的路径
LogNameDATE=`date '+%Y%m%d'` # 时间戳

echo "BACKUP DATE:" $(date +"%Y-%m-%d %H:%M:%S")

echo "TIME" $(date +"%Y-%m-%d %H:%M:%S") >> $LOG/$LogNameDATE.log
if [ ! -d $BLOG ]; then
  echo "==========git仓库不存在,拉取仓库==========" >> $LOG/$LogNameDATE.log
  cd $GITDIR
  git clone $GITURL
  cd $BLOG
  else
  echo "==========git仓库已存在==========" >> $LOG/$LogNameDATE.log
  cd $GITDIR
  rm -rf "./abc"
  git clone $GITURL
  cd $BLOG
fi

echo "==========拉取代码==========" >> $LOG/$LogNameDATE.log
git checkout master
echo "==========删除缓存==========" >> $LOG/$LogNameDATE.log
rm -rf "./node_modules"
yarn cache clean
echo "==========下载依赖==========" >> $LOG/$LogNameDATE.log
yarn install
echo "==========开始打包==========" >> $LOG/$LogNameDATE.log
yarn run build
echo "==========删除生产目录==========" >> $LOG/$LogNameDATE.log
rm -rf $OUTPUT/*
echo "==========拷贝生产包==========" >> $LOG/$LogNameDATE.log
cp -r "./dist" $OUTPUT/
echo "==========部署成功==========" >> $LOG/$LogNameDATE.log
```

如果服务器资源比较紧张,也可以通过`github actions`自动化打包,并自动化部署,[参考步骤](./giuhub_actions.html)

## 持久化服务

这里我们引入`npm`包:`pm2`,做持久化服务.

为什么需要`pm2`?
- 由于`node`是单进程应用,如果直接通过`node app`来启动一旦代码执行报错没做相应处理会造成整个应用崩溃,这里就需要`pm2`做进程管理了
- 除此之外`pm2`包括守护进程、监控、日志的一整套完整的功能

这里我们全局安装`pm2`

```bash
npm i -g pm2@latest
```

`cd`到`node`服务的目录后,执行启动目录

```bash
pm2 start ./webhook.js
```

`pm2`常用操作
```bash
# 启动命令
pm2 start app.js # 启动nodeJs应用，进程的默认名称为文件名app
pm2 start app.js --name mynode # 启动node，并指定进程名称为mynode
pm2 start app.js -i max # 根据有效CPU数目启动最大进程数目
pm2 start app.js -i 3 # 启动3个进程
pm2 start app.js --watch # 实时监控的方式启动，app.js文件有变动时，pm2会自动reload
pm2 start app.js -x # 用fork模式启动 app.js 而不是使用 cluster
pm2 start app.js -x – -a 23 # 用fork模式启动 app.js 并且传递参数（-a 23）
pm2 start app.json # 启动进程, 在 app.json里设置选项
pm2 start app.js -i max – -a 23 # 在 – 之后给 app.js 传递参数
pm2 start app.js -i max -e err.log -o out.log # 启动并生成一个配置文件

# 查看与监视进程
pm2 list #显示所有进程；
pm2 show 0，pm2 info 0 # 查看进程id为 0 的详细信息；
pm2 monit # 进入监视页面，监视每个node进程的CPU和内存的使用情况。

# 停止、删除进程
pm2 stop/delete 0 # 停止/删除id为 0 的进程；
pm2 stop/delete all # 停止/删除所有进程。

# 重启、重载
pm2 restart 0 # 重启id为 0 的进程；
pm2 restart all # 重启所有进程；
pm2 reload 0 # 0秒停机重载id为 0 进程（用于 NETWORKED 进程）；
pm2 reload all # 重载所有进程。

# 日志操作
pm2 logs # 显示所有进程的日志；
pm2 logs 0 # 显示进程id为 0 的日志；
pm2 flush # 清空所有日志文件；
pm2 reloadLogs # 重载所有日志。
pm2 startup # 产生 init 脚本，保持进程活着。

# 杀死PM2进程
pm2 kill
```
