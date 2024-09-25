---
article: false
date: 2024-05-21
---
# 常用命令整理

## 文件相关操作

```bash
pwd # print working directory（打印工作目录）

ls # 当前位置文件和目录 list 的简写

ls -a # 命令的参数-a 是--all 的简写，意思是列出所有文件，包括不加任何参数的ls 能够列出的文件和以. 开头的文件，即隐藏（hidden）文件

cd # change directory 切换目录

ls -l # 参数-l，意思是输出文件的详细内容（long listing format）
ls -l /etc/sudoers # 可查看该文件的所有者

# 文件权限 -rwxr-xr-x(1-3-3-3位)
# 文件类型(1位): 常见的文件类型有 -（代表文件）、d（代表目录）和 l（代表链接）
# 读（read）、写（write）和执行（execute）
# 所有者权限(3位)
# 组用户权限(3位)
# 其他用户权限(3位)

cat /etc/sudoers # 查看文件内容
                 # sudo 免密时间长度由 /etc/sudoers 文件中的 timestamp_timeout 参数确定
less # j键向下 k键向上
head # 打印文本前10行
tail # 打印文本最后10行
wc -l # 统计文本行数
file # 常看文件类型

# 重定向：将命令行的结果输出保存到文件
ls /bin > ~/file_list.txt
# 管道（pipe）：将前面命令的输出变成后面命令的输入
ls /bin | wc -l

mkdir # 创建目录
mkdir -v # 返回执行成功的信息

# vim文本编辑器
# - 标准模式 
# - 插入模式：在标准模式下按 i 进入
# - 命令模式：在标准模式下按 ESC 进入

cp a b # 复制文件
cp -r demo backup # 复制文件夹 -r => recursive 从顶层到下面，递归复制
# mv 命令不会区别对待文件和目录
mv demo/hw.sh backup/
mv demo demo2 # 修改文件夹名称


# 技巧：使用 vi 编辑一个没有权限的文件后如何保存？
# :wq /tmp/a 将文件保存至 tmp 文件夹中，因为任何人都有 tmp 文件夹的权限
# 最后使用 sudo cp 命令复制替换

rm a # 删除文件
rm -r # 删除文件夹 递归删除文件
rm -i # 谨慎删除
rm -ri # -r -i 简写
rm -f # 强制删除

touch a.txt # 创建新文件，也可以用来更新新文件时间戳

# linux 每个命令都会返回一个证书，叫做返回值（exit status），每次执行完一个命令后紧接着运行 echo $? 就可以查看上个命令的返回值
# - 0 表示命令正常结束
# - 否则说明命令执行过程中出现了错误，命令没有正常运行

```
