---
article: true
date: 2025-04-05
---

<!-- more -->

# `openmediavault`提示`GPG`公钥错误解决思路

问题现象：执行`apt update`时报以下错误

```bash
W: GPG error: https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/debian bookworm InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 7EA0A9C3F273FCD8
E: The repository 'https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/debian bookworm InRelease' is not signed.
N: Updating from such a repository can't be done securely, and is therefore disabled by default.
N: See apt-secure(8) manpage for repository creation and user configuration details.
```

## 1.检查仓库配置

确认Docker的APT源文件（通常位于`/etc/apt/sources.list.d/docker.list`）是否正确引用了密钥。例如：

```bash
deb [signed-by=/usr/share/keyrings/docker.gpg arch=amd64] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/debian bookworm stable
```

## 2.根据`signed-by`路径查看`GPG`公钥

```bash
cd /usr/share/keyrings/
```

`ll`命令查看对应`gpg`文件信息，我这边是对应公钥文件大小为0，所以需要删除重新下载公钥。

## 3.重新下载或者替换公钥

我这边是重新下载`Docker`官方`GPG`密钥，主要保存的文件名称需要跟`signed-by`路径对应上

```bash
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker.gpg
```

## 4.验证

```bash
sudo apt update
```
