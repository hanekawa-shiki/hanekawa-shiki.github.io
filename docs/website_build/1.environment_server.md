---
article: false
---
# 环境服务配置

一台安装有`node`和`nginx`的`linux`服务器,这里用的`linux`发行版是`ubuntu`

## `git`

可以通过`git version`命令查看版本号,如果没有则没有安装

### 安装

```bash
sudo apt update
sudo apt install git
```

### 配置

```bash
git config --global user.name "用户名"
git config --global user.email "邮箱地址"
```

### 生成ssh密钥

```bash
ssh-keygen -C 'you email address@gmail.com' -t rsa
# 会在用户目录~/.ssh/下建立相应的密钥文件。
```

进入`~/.ssh`文件夹，输入
```bash
# 打开id_rsa.pub文件，复制其中所有内容。
cat id_rsa.pub
```

复制公钥并在github中配置SSH公钥

### 测试连接
```bash
ssh -T git@github.com
```

## 安装`Node.js`

~~推荐使[nvm](https://github.com/nvm-sh/nvm)版本管理工具管理`node`版本~~  

~~安装`nvm`~~  
~~curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash~~  
~~或者~~  
~~wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash~~  

推荐使用[pnpm](https://pnpm.io/)安装和管理`Node.js`

可以参考之前的[教程](/dev-tools/mirror_source.html#pnpm)


## `Nginx`

### 安装

安装
```bash
sudo apt update
sudo apt install nginx
```

常用命令

```bash
# 启动服务
nginx

# 查看版本
nginx -v

# 关闭服务
nginx -s stop
# 或者
nginx -s quit

# 更新nginx配置后,测试配置
nginx -t

# 更新配置后重新载入
nginx -s reload
```

### 添加虚拟机配置

切到`nginx`配置目录

```bash
cd /etc/nginx/conf.d
```

新建虚拟机配置文件,推荐使用网站域名作为文件名新建文件.
::: tip
例如该配置是为域名为`fuckqq.com`服务的,那么文件名为`fuckqq.com.conf`,如果有多个域名配置这么命名方便以后维护
:::

配置参考,根据自身实际情况修改

```tex
server {
    listen       80;
    # 域名，多个以空格分开
    server_name  fuckqq.com blog.fuckqq.com www.fuckqq.com;

    # Gzip Compression
    gzip on;  #是否开启gzip模块 on表示开启 off表示关闭
    gzip_comp_level 6;  #压缩级别1-9，数字越大压缩的越好，也越占用CPU时间
    gzip_min_length 10k;  #设置允许压缩的最小字节
    gzip_types text/plain text/css application/json application/javascript text/javascript;  #设置压缩的文件类型
    gzip_vary on;  #加上http头信息Vary: Accept-Encoding给后端代理服务器识别是否启用 gzip 压缩

    location / {
        root   /home/dist; #静态网站根目录
        index  index.html;
        gzip_static on;
    }
}
```

保存配置后,执行检查配置命令

```bash
sudo nginx -t
```

如果提起错误信息,请善用搜索引擎解决

最后重启`nginx`服务

```bash
sudo nginx -s reload
```

### `nginx`反向代理配置

原理:

首先当端口是80的时候， 域名访问的时候 是可以省略端口的，直接域名访问，`nginx`会监听80端口，同时根据不同的域名，把流量分配给`Node`相应的端口服务。

补充知识点：[正向代理反向代理的区别](https://www.cnblogs.com/taostaryu/p/10547132.html)

配置:

在`/etc/nginx/conf.d`文件夹下面新增一个配置文件：

```bash
sudo vi /etc/nginx/conf.d/fuckqq-5000.conf
```

文件命名可以用上面的命名方式，看一下配置文件，便知道是哪个域名对应到哪个端口。

因为将来可能会有多个项目对应服务器后端的多个服务，所以要考虑这种负载均衡的这种场景。这时候通过以下配置来实现：

```tex
# 通过 upstream 我们可以设定一个简单的负载均衡策略，以应对将来可能的升级
# 首先定义一个 server 集群 gougou，里面可以加多个 server，每个 server 对应的值可以用域名，也可以直接用 IP，# 但我们通常不会用 IP 来访问，而是通过域名:
upstream nodeStatic {
    server 127.0.0.1:5000;
}
server {
    listen 80;
    server_name xxx.com; // xxx.com 是你的域名
    # Gzip Compression
    gzip on;
    gzip_comp_level 6;
    gzip_vary on;
    gzip_min_length  1000;
    gzip_proxied any;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_buffers 16 8k;
    
    location / {
        # remote_addr 代表客户端的 IP
        proxy_set_header X-Real-IP $remote_addr;
        # proxy_add_x_forwarded_for 获取真实的 IP
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        # http_host 表示请求的 host 头
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
      
        # proxy_pass 指令实现代理。把域名代理到集群名上面
        proxy_pass http://nodeStatic;
        proxy_redirect off;
    }
}
```

### 关闭`nginx`版本号露出

安装完毕后，检查下`Nginx`的版本：`nginx -v` 

这个版本号通常可以在 Web 端的 header 里看到。安全起见，可以通过配置隐藏掉，如下打开`nginx.conf`文件：

```bash
sudo vi /etc/nginx/nginx.conf
```

把`nginx.conf`文件中的`server_tokens on`改成`server_tokens off`就可以了

有的配置里没有`server_tokens on`的 直接添加`server_tokens off`即可


## 免费`SSL`证书启用

<Badge text="tip" type="tip" />如有需求泛域名证书申请安装及配置的可以参考这篇[教程](./domainNameSSL.md)

这里使用`Certbot`获取证书,以下操作适用于`ubuntu + nginx`,其他环境可以参考[Certbot官网](https://certbot.eff.org/)

1.安装`snapd`,通过`snapd`安装`certbot`
```bash
# 安装snapd
sudo apt update
sudo apt install snapd

# 安装certbot
# 在安装 Certbot 之前，最好先移除历史快照。
sudo apt remove certbot
# 安装
sudo snap install --classic certbot
```

2.生成证书
```bash
# 自动配置
sudo certbot --nginx
```

:::tip
安装完成`cerbot`后,执行`apt update`可能会遇到以下问题:

`E: The repository 'http://ppa.launchpad.net/certbot/certbot/ubuntu focal Release' does not have a Release file`

执行以下命令
```bash
sudo apt-add-repository -r ppa:certbot/certbot
```

然后再更新
```bash
sudo apt update
sudo apt update
```
:::


### 安装

```bash
sudo certbot --nginx
```

执行上面的命令后会提示你输入你的邮箱，会检测到你nginx配置的域名，选择你要生成证书的域名序号即可；还会提示你是否在用户使用http访问的时候自动跳转到https访问，序号1是不跳转，序号2是自动跳转，建议选2

其他操作根据提示进行.

每次生成的证书有效期是90天，到期后需要重新申请，如果你想在证书到期前自动续订可以执行

```bash
sudo certbot renew --dry-run
```

这样certbot会在证书到期时自动帮你续订证书，这就相当于你有了永久的免费SSL证书了

## `UFW`防火墙

`Ubuntu`随附了一个称为`UFW`的防火墙配置工具。 

防火墙是用于监控和过滤传入和传出网络流量的工具。 它通过定义一组确定是允许还是阻止特定流量的安全规则来工作

常用操作
```bash
# 安装
sudo apt update
sudo apt install ufw

# 检查 UFW 状态
sudo ufw status verbose
# 您可以通过键入以下命令列出服务器上所有可用的应用程序配置文件
sudo ufw app list
# 要查找指定配置文件包含的防火墙规则详细信息，请使用以下命令：
sudo ufw app info 'Nginx Full'

# 启用UFW
# 如果要从远程位置连接到Ubuntu，在启用UFW防火墙之前，必须明确允许SSH的连接。 否则，您将无法连接到计算机。要将您的UFW防火墙配置为允许SSH的连接，请键入以下命令：
sudo ufw allow ssh

# 禁用
sudo ufw disable
# 启用
sudo ufw enable
```


## 参考

- [1] [10分钟搭建ubuntu+nodejs+pm2自动部署+nginx+永久免费SSL证书+mongodb自动部署环境](https://segmentfault.com/a/1190000016555800)
- [2] [如何自动申请免费的SSL 证书](https://segmentfault.com/a/1190000024552266)
- [3] [Let’s Encrypt免费SSL证书获取以及自动续签](http://blog.cngal.org/index.php?controller=post&action=view&id_post=10)
- [4] [如何在Ubuntu 20.04上使用UFW配置防火墙](https://www.myfreax.com/how-to-setup-a-firewall-with-ufw-on-ubuntu-20-04/)
