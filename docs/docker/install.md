---
article: false
---

# 安装

`Docker`安装方式可以参照[官方文档](https://docs.docker.com/engine/install/)

本人是在`Ubuntu 20.04`中安装使用`Docker`，使用的是中科大`Docker CE`源，`Docker Hub`镜像加速器配置的是阿里云镜像。

## 安装`Docker CE`

[官网Ubuntu安装Docker步骤](https://docs.docker.com/engine/install/ubuntu/)  
[Docker CE源](https://mirrors.ustc.edu.cn/help/docker-ce.html)

你可以参考以上文档自己安装，也可以直接复制下面我整理好的命令安装。

1.卸载旧版`Docker`

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```

2.使用`apt`软件库进行安装

```bash
sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

添加`Docker`的官方`GPG`密钥。

```bash
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

设置版本库。

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

安装`Docker`

```bash
sudo apt-get update
```

安装最新版本

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

测试验证`Docker`是否安装成功

```bash
sudo docker run hello-world
```

## 设置镜像加速

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://<your_code>.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

你也可以设置多个镜像地址，一下是常用`Docker Hub`镜像加速器列表

镜像加速器 | 镜像加速器地址 | 专属加速器[？](# "需登录后获取平台分配的专属加速器") | 其它加速[？](# "支持哪些镜像来源的镜像加速")
--- | --- | --- | ---
[DaoCloud 镜像站](https://github.com/DaoCloud/public-image-mirror) | `https://docker.m.daocloud.io` | |  Docker Hub、GCR、K8S、GHCR、Quay、NVCR 等
[阿里云](https://cr.console.aliyun.com) | `https://<your_code>.mirror.aliyuncs.com` | 需登录，系统分配 | Docker Hub
[网易云](https://c.163yun.com/hub) | `https://hub-mirror.c.163.com` | | Docker Hub
[Docker 镜像代理](https://dockerproxy.com) | `https://dockerproxy.com` | | Docker Hub、GCR、K8S、GHCR
[百度云](https://cloud.baidu.com/doc/CCE/s/Yjxppt74z#%E4%BD%BF%E7%94%A8dockerhub%E5%8A%A0%E9%80%9F%E5%99%A8) | `https://mirror.baidubce.com` | | Docker Hub
[南京大学镜像站](https://doc.nju.edu.cn/books/35f4a) | `https://docker.nju.edu.cn` | | Docker Hub、GCR、GHCR、Quay、NVCR 等