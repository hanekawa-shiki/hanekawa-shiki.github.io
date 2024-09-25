---
article: true
date: 2024-09-25
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
