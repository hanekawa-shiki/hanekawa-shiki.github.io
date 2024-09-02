---
article: false
---

# 常用命令

![docker常用命令](./img/001.png)

## 帮助启动类命令

```bash
# 启动docker： 
systemctl start docker

# 停止docker： 
systemctl stop docker

# 重启docker： 
systemctl restart docker

# 查看docker状态： 
systemctl status docker

# 开机启动： 
systemctl enable docker

# 查看docker概要信息： 
docker info

# 查看docker总体帮助文档： 
docker --help

# 查看docker命令帮助文档： 
docker 具体命令 --help
```

## 镜像命令

```bash
# 列出本地主机上的镜像
docker images
# 各个列表项说明: 
# REPOSITORY：表示镜像的仓库源
# TAG：镜像的标签版本号 
# IMAGE ID：镜像ID 
# CREATED：镜像创建时间 
# SIZE：镜像大小 
#  同一仓库源可以有多个 TAG版本，代表这个仓库源的不同个版本，我们使用 REPOSITORY:TAG 来定义不同的镜像。 
# 如果你不指定一个镜像的版本标签，例如你只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像 
  
# OPTIONS说明：
# -a :列出本地所有的镜像（含历史映像层）
# -q :只显示镜像ID。


# 搜索镜像
docker search 某个XXX镜像名字

docker search [OPTIONS] 镜像名字

# OPTIONS说明：
# --limit : 只列出N个镜像，默认25个

docker search --limit 5 redis


# 下载镜像
docker pull 某个XXX镜像名字
docker pull 镜像名字[:TAG]

# 没有TAG就是最新版，等价于
docker pull 镜像名字:latest

# 查看镜像/容器/数据卷所占的空间
docker system df


# 删除镜像
docker rmi 某个XXX镜像名字ID

# 删除单个
docker rmi  -f 镜像ID

# 删除多个
docker rmi -f 镜像名1:TAG 镜像名2:TAG 

# 删除全部(谨慎使用！)
docker rmi -f $(docker images -qa)

# docker虚悬镜像？
# 仓库名、标签都是<none>的镜像，俗称虚悬镜像dangling image

```


## 容器命令

```bash
# 有镜像才能创建容器，这是根本前提(下载一个ubuntu镜像演示)
docker pull ubuntu

# 新建+启动容器
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

# OPTIONS说明（常用）：有些是一个减号，有些是两个减号 
# --name="容器新名字"       为容器指定一个名称； 
# -d: 后台运行容器并返回容器ID，也即启动守护式容器(后台运行)； 
# -i：以交互模式运行容器，通常与 -t 同时使用； 
# -t：为容器重新分配一个伪输入终端，通常与 -i 同时使用； 
# 也即 启动交互式容器(前台有伪终端，等待交互) ； 
# -P:  随机 端口映射，大写P 
# -p:  指定 端口映射，小写p 


# 启动交互式容器(前台命令行)

# 使用镜像ubuntu:latest以交互模式启动一个容器,在容器内执行/bin/bash命令。 
docker run -it ubuntu /bin/bash  
 
# 参数说明：
# -i: 交互式操作。 
# -t: 终端。 
# ubuntu : ubuntu 镜像。 
# /bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。 
# 要退出终端，直接输入 exit: 
 


# 列出当前所有正在运行的容器
docker ps [OPTIONS]

# OPTIONS说明（常用）： 
# -a: 列出当前所有 正在运行 的容器 + 历史上运行过 的 
# -l: 显示最近创建的容器。 
# -n：显示最近n个创建的容器。 
# -q: 静默模式，只显示容器编号。 


# 退出容器

# 两种退出方式
# 1.exit run进去容器，exit退出，容器停止
# 2.ctrl+p+q run进去容器，ctrl+p+q退出，容器不停止

# 启动已停止运行的容器
docker start 容器ID或者容器名

# 重启容器
docker restart 容器ID或者容器名

# 停止容器
docker stop 容器ID或者容器名

# 强制停止容器
docker kill 容器ID或容器名

# 删除已停止的容器
docker rm 容器ID

# 一次性删除多个容器实例
docker rm -f $(docker ps -a -q)
docker ps -a -q | xargs docker rm


# 重要!!有镜像才能创建容器，这是根本前提(下载一个Redis6.0.8镜像演示)

# 启动守护式容器(后台服务器)
# 在大部分的场景下，我们希望 docker 的服务是在后台运行的，
# 我们可以过 -d 指定容器的后台运行模式。

docker run -d 容器名

# 使用镜像ubuntu:latest以后台模式启动一个容器 
docker run -d ubuntu 
  
# 问题：然后docker ps -a 进行查看,  会发现容器已经退出
# 很重要的要说明的一点:  Docker容器后台运行,就必须有一个前台进程.
# 容器运行的命令如果不是那些 一直挂起的命令 （比如运行top，tail），就是会自动退出的。

# 这个是docker的机制问题,比如你的web容器,我们以nginx为例，正常情况下,
# 我们配置启动服务只需要启动响应的service即可。例如service nginx start
# 但是,这样做,nginx为后台进程模式运行,就导致docker前台没有运行的应用,
# 这样的容器后台启动后,会立即自杀因为他觉得他没事可做了.
# 所以，最佳的解决方案是, 将你要运行的程序以前台进程的形式运行，
# 常见就是命令行模式，表示我还有交互操作，别中断，O(∩_∩)O哈哈~


# redis 前后台启动演示case

# 前台交互式启动
 docker run -it redis:6.0.8

# 后台守护式启动
docker run -d redis:6.0.8

# 查看容器日志
docker logs 容器ID

# 查看容器内运行的进程
docker top 容器ID

# 查看容器内部细节
docker inspect 容器ID

# 重新进入正在运行的容器
docker exec -it 容器ID bashShell
docker attach 容器ID
# 上述两个区别
# 1.attach 直接进入容器启动命令的终端，不会启动新的进程。用exit退出，会导致容器的停止。
# 2.exec 是在容器中打开新的终端，并且可以启动新的进程。用exit退出，不会导致容器的停止。


# 推荐使用 docker exec 命令，因为退出容器终端，不会导致容器的停止。
# 一般用-d后台启动的程序，再用exec进入对应容器实例


# 从容器内拷贝文件到主机上  容器→主机
docker cp  容器ID:容器内路径 目的主机路径


# 导入和导出容器
# export 导出容器的内容留作为一个tar归档文件[对应import命令]
# import 从tar包中的内容创建一个新的文件系统再导入为镜像[对应export]

docker export 容器ID > 文件名.tar
cat 文件名.tar | docker import - 镜像用户/镜像名:镜像版本号

```
