---
article: false
---
# `windows`启动`ssh-agent`

`Windows10`自带了一个非常方便的`ssh-agent`服务，我们只需要在`Windows`的服务列表里面启用该服务就能在`CMD`或`PowerShell`里直接使用`ssh-add`添加密钥，实现`ssh`免密登录。

以**管理员**打开`PowerShell`，通过`Set-Service -StartupType Automatic ssh-agent`将`ssh-agent`服务的启动类型设为自启，随后键入`Start-Service ssh-agent`启动当前会话下的`ssh-agent`服务。

```dos
PS C:\windows\system32> Set-Service -StartupType Automatic ssh-agent
PS C:\windows\system32> Start-Service ssh-agent
PS C:\windows\system32> Get-Service ssh-agent

Status   Name               DisplayName
------   ----               -----------
Running  ssh-agent          OpenSSH Authentication Agent


PS C:\windows\system32> (Get-Service ssh-agent).startType
Automatic
```

## 将私钥添加到`ssh-agent`

`ssh-agent`是`OpenSSH`身份认证代理，存储用于公钥身份验证的私钥。每当从客户端进行身份验证需要使用私钥时，`ssh-agent`都会自动检索代理存储的本地私钥，并将其传递到你的 `SSH`客户端。

`ssh-add`将私钥加载进`ssh-agent`。

**使用管理员身份打开终端**

注意区分不同的`SSH`，不同`SSH`的`ssh-agent`是相互独立的，这意味着如果你在`Windows SSH`的`ssh-agent`中添加了你登录`GitHub`的私钥，在`Git Bash`中登录`GitHub`时仍然可能无法免密登录.

但不同`SSH`共用客户端配置文件:
- `Windows`上是 `~/.ssh/config`
- `Linux`上是 `/etc/ssh/ssh_config`

```bash
# 查看 ssh-agent 服务状态，这里输出：Stopped
Get-Service ssh-agent
# 查看 ssh-agent 服务的启动类型，这里输出：Disabled
Get-Service ssh-agent | Select StartType
# 将 ssh-agent 服务的启动类型修改为Automatic（自动启动）。
Get-Service -Name ssh-agent | Set-Service -StartupType Automatic
# 将私钥加载进 ssh-agent
ssh-add C:\Users\xxx\.ssh\your_rsa
# 显示 ssh-agent 中的公钥，验证私钥是否添加成功
ssh-add -L
# 服务重启后，添加的密钥仍在 agent 中
```

## `ssh`代理设置

切换到`ssh`目录:`~/.ssh/config`,存在`config`文件的直接编辑,不存在的新建

复制以下内容到`config`文件,修改对应配置

```bash
Host github.com
  User git
  Port 22
  Hostname github.com
  # 注意修改路径为你的路径
  IdentityFile "C:\Users\xxx\.ssh\id_rsa"
  TCPKeepAlive yes
  # host:port修改为你的代理地址
  ProxyCommand connect -S host:port -a none %h %p

Host ssh.github.com
  User git
  Port 443
  Hostname ssh.github.com
  # 注意修改路径为你的路径
  IdentityFile "C:\Users\xxx\.ssh\id_rsa"
  TCPKeepAlive yes
  # host:port修改为你的代理地址
  ProxyCommand connect -S host:port -a none %h %p
```


## 参考

- [1] [Windows SSH 免密登录详解](https://segmentfault.com/a/1190000023054090)
- [2] [Windows 10 启动 ssh-agent](https://developer.aliyun.com/article/784983)