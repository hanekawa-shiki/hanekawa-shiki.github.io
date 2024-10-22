---
article: false
---

# `rust`安装

1.官网安装

```bash
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

2.国内镜像安装

```bash
# 导出安装脚本
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs > rust.sh

# 1 修改脚本
# If RUSTUP_UPDATE_ROOT is unset or empty, default it.
# RUSTUP_UPDATE_ROOT="${RUSTUP_UPDATE_ROOT:-https://static.rust-lang.org/rustup}"
# 修改为
RUSTUP_UPDATE_ROOT="http://mirrors.ustc.edu.cn/rust-static/rustup"

# 2 修改环境变量
export RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup

# 3 执行脚本
bash rust.sh
```

`rust`安装后，会在`home`目录创建`.cargo/env`，为了以后都从国内镜像源下载包，可以将上面的环境变量加入到`env`文件

```bash
echo "RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup"  >> env  
```

3.配置`cargo`环境变量

在`$HOME/.cargo/config.toml`(没有改文件手动添加)中添加如下内容：

```bash
[source.crates-io]
replace-with = 'ustc'

[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"
```

## 常用命令

```bash
# 更新
rustup update

# 卸载
rustup self uninstall

# 创建项目
cargo new name
cargo new name --vcs none # 不创建 .git 目录

# 构建项目
cargo build

# 一步构建并运行项目
cargo run

# 在不生成二进制文件的情况下构建项目来检查错误
cargo check

# 发布（release）构建
cargo build --release
```