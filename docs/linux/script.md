---
article: true
date: 2025-06-16
category: linux
tag:
  - openmediavault
---

<!-- more -->

# 常用脚本整理

## `openmediavault`硬盘休眠状态查询

```bash
#!/bin/bash

path="/home/diskCheck"  # crontab 需用绝对路径

echo $path

if [ ! -d "$path/Disks" ]; then
  mkdir $path/Disks
fi

dsk=$(ls /dev/ | grep 'sd[a-z]$')

echo $(date +%c)

for i in $dsk; do
  echo -n "/dev/$i : "
  s=$(smartctl -i -n standby /dev/$i | grep "mode" | awk '{print $4}')

  if [ -f "$path/Disks/$i.status" ]; then
    st=$(cat $path/Disks/$i.status)
  else
    st=''
    touch $path/Disks/$i.status
  fi

  echo $s >$path/Disks/$i.status

  if [[ $s != $st ]]; then
    echo $(date +%c) >>$path/chkdisk.log
    echo -n "/dev/$i : " >>$path/chkdisk.log
    echo $s >>$path/chkdisk.log
  fi

  echo $s
done

exit
```

## `linux`批量删除`macOS`生成的缓存文件

```bash
find /path/to/directory -name '._*' -exec rm -f {} \;
```

## `openwrt`自动更新ipv6-PD

新建文件`/etc/hotplug.d/iface/99-wan6-refresh`，内容如下：

```bash
#!/bin/sh

LOGTAG="wan6-refresh"
logger -t $LOGTAG "热插拔脚本触发：操作=$ACTION 接口=$INTERFACE"

if [ "$INTERFACE" = "wan6" ] && [ "$ACTION" = "ifup" -o "$ACTION" = "ifupdate" ]; then
    logger -t $LOGTAG "检测 IPv6 地址前缀是否发生变化"

    # 取第一个 IPv6 地址
    IPV6_ADDR=$(ifstatus wan6 | jsonfilter -e '@["ipv6-address"][0].address')
    [ -z "$IPV6_ADDR" ] && {
        logger -t $LOGTAG "未获取到 IPv6 地址，退出"
        exit 0
    }

    # 提取 /64 前缀（前面4段地址），例如 2409:8a1e:988e:edc0
    CURRENT_PREFIX=$(echo "$IPV6_ADDR" | cut -d ':' -f1-4)

    PREFIX_FILE="/tmp/wan6-last-prefix"

    if [ ! -f "$PREFIX_FILE" ]; then
        echo "$CURRENT_PREFIX" > "$PREFIX_FILE"
        logger -t $LOGTAG "首次记录前缀，触发 odhcp6c 刷新"
        killall -HUP odhcp6c
        exit 0
    fi

    LAST_PREFIX=$(cat "$PREFIX_FILE")

    if [ "$CURRENT_PREFIX" != "$LAST_PREFIX" ]; then
        logger -t $LOGTAG "检测到 IPv6 前缀变化：$LAST_PREFIX → $CURRENT_PREFIX"
        echo "$CURRENT_PREFIX" > "$PREFIX_FILE"
        killall -HUP odhcp6c
    else
        logger -t $LOGTAG "IPv6 前缀未变化，无需操作"
    fi
fi

```

重启光猫后，通过查看日志查看是否生效：

```bash
logread -f | grep wan6-refresh
```