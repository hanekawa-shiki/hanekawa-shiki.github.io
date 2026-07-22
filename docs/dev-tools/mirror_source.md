---
title: 镜像源收集
icon: link
category: 镜像源
isOriginal: true
timeline: true
date: 2021-07-28
---

开发过程中常用的镜像资源收集记录

<!-- more -->

本人常用的镜像站点:  
- [中科大镜像源](https://mirrors.ustc.edu.cn/)  
- [阿里巴巴开源镜像站](https://developer.aliyun.com/mirror/)  
- [华为开源镜像站](https://mirrors.huaweicloud.com/)  


## `pnpm`

官网:[中文](https://pnpm.io/zh)|[英文](https://pnpm.io/)

`pnpm`不仅能作为`JavaScript`的包管理工具,而且可以作为`nodejs`的版本管理工具


在 POSIX 类系统上，即使尚未安装 Node.js，也可以使用以下脚本安装 pnpm：

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

如果没有安装 curl，可以使用 wget：

```bash
wget -qO- https://get.pnpm.io/install.sh | sh -
```

在 Windows 系统上（PowerShell）：

```bash
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

`pnpm`更新，或者更新至指定版本

```bash
pnpm self-update [10.34.4]
```

::: warning
如果是在配置了 packageManager 的项目内执行，它只会更新项目配置，不会更新全局。
:::

设置`npm`包镜像地址：
```bash
pnpm config set registry https://registry.npmmirror.com/
```

设置`Node.js`镜像地址：
```bash
pnpm config set node-mirror https://npmmirror.com/mirrors/node/
```

或者可以在当前用户目录下手动创建`.npmrc`文件,然后添加: 

```bash
registry=https://registry.npmmirror.com/
node-mirror=https://npmmirror.com/mirrors/node/
save-exact=true
```

`.npmrc`文件所在位置如下,根据具体情况在所在位置创建:
- 全局配置文件：`/etc/npmrc`
- 用户配置文件：`~/.npmrc`
- 项目配置文件：`$项目根目录/.npmrc`


使用`pnpm env`命令来管理`Node.js`版本。

::: warning
`pnpm env` 已弃用。 请改用 `pnpm runtime`。[详情](https://pnpm.io/cli/env)
:::

```bash
# 安装
# 安装 LTS 版本的 Node.js
pnpm env use --global lts
pnpm env use --global argon
# 安装 v16 的Node.js
pnpm env use --global 16
# 安装 Node.js 的预发行版本
pnpm env use --global nightly
pnpm env use --global rc
pnpm env use --global 16.0.0-rc.0
pnpm env use --global rc/14
# 安装最新版本的 Node.js
pnpm env use --global latest
# 安装指定版本的 Node.js 而不激活为当前版本
pnpm env add --global lts 18 20.0.1

# 查看
# 查看本地Node.js列表
pnpm env list
# 查看远程可用Node.js列表
pnpm env list --remote
# 查看远程可用指定Node.js版本
pnpm env list --remote 16

# 移除
# 移除指定版本的 Node.js
pnpm env remove --global 14.0.0 16.2.3
```

 `pnpm runtime`命令来管理`js`运行时版本

```bash
pnpm runtime set <name> <version> [-g]

# 全局安装/切换到指定的 Node.js 版本：
pnpm runtime set node 22.12.0 -g

# 全局安装/切换到最新的长期支持版 (LTS)：
pnpm runtime set node lts -g

# 安装带有代号的版本：
pnpm runtime set node argon -g

# 管理其他运行时
pnpm runtime set deno 2 -g
```

## 发布`npm`包流程

```bash
# 切回官方源
npm config set registry https://registry.npmjs.org/
# 确认已切回
npm config get registry # https://registry.npmjs.org/
# 登陆npm
npm login
# 上传包
npm publish
# 完成后可以通过查看包版本确定是否完成上传
npm view packageName versions
```

## `nvm`(不推荐)

nodejs版本管理工具

> for windows: [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
> for mac/linux: [nvm-sh/nvm](https://github.com/nvm-sh/nvm)

设置镜像

```bash
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror  https://npmmirror.com/mirrors/npm/
```

## `npm`(不推荐)

`node`包管理工具

1.查看当前源地址

```bash
npm config get registry
```

2.设置淘宝镜像【不建议，影响其他指令】

```bash
npm config set registry https://registry.npmmirror.com/
```

3.NPM镜像的管理工具
安装：
```bash
npm install -g nrm
# 或者
pnpm add -g nrm
```

```bash
# 查看所有镜像
nrm ls

  npm ---------- https://registry.npmjs.org/
* yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.nlark.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

# 使用淘宝镜像
nrm use taobao
```

4.中国`NPM`镜像

[国内NPM镜像](https://www.npmmirror.com/)

## `yarn`(不推荐)

`node`包管理工具

1.查看当前源地址

```bash
yarn config get registry
```

2.设置淘宝镜像【不建议，影响其他指令】

```bash
yarn config set registry https://registry.npmmirror.com/
```

3.YARN镜像的管理工具
安装：`yarn global add yrm`

```bash
# 查看所有镜像
yrm ls

  npm ---------- https://registry.npmjs.org/
* yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.nlark.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

# 使用淘宝镜像
yrm use taobao

```

## `electron`镜像设置

```bash
pnpm config set electron_mirror https://npmmirror.com/mirrors/electron/
```

## `Ubuntu`镜像

手动更改  
用你熟悉的编辑器打开：`/etc/apt/sources.list`,替换默认的连接

本人一般使用中科大源,这是一个中科大源镜像生成工具[https://mirrors.ustc.edu.cn/repogen/](https://mirrors.ustc.edu.cn/repogen/),包括`Archlinux`、`Debian`、`Ubuntu`

其他`Ubuntu`国内镜像源请在头部连接中查找

## `Rustup`镜像

将下面的环境变量配置到您的`Shell`文件中后，并重启终端

```bash
export RUSTUP_UPDATE_ROOT=https://mirrors.tuna.tsinghua.edu.cn/rustup/rustup
export RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup
```

重启终端后，执行`Rust`安装命令

```bash
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

配置`crates.io`镜像，修改配置`~/.cargo/config`

```bash
[source.crates-io]
replace-with = 'tuna'

[source.tuna]
registry = "sparse+https://mirrors.tuna.tsinghua.edu.cn/crates.io-index/"

[registries.tuna]
index = "sparse+https://mirrors.tuna.tsinghua.edu.cn/crates.io-index/"

[net]
git-fetch-with-cli = true
```