---
title: 使用All-in-One部署Nextcloud服务
icon: link
category: service
tag:
  - Docker
  - NextCloud
isOriginal: true
timeline: true
date: 2024-07-04
article: true
---

记录下部署方法

<!-- more -->

[官方文档](https://github.com/nextcloud/all-in-one)

[官方反向代理设置文档](https://github.com/nextcloud/all-in-one/blob/main/reverse-proxy.md)

```bash
docker run \
--init \
--sig-proxy=false \
--name nextcloud-aio-mastercontainer \
--restart always \
--publish 50020:8080 \
--net=nextcloud-aio \
--volume nextcloud_aio_mastercontainer:/mnt/docker-aio-config \
--volume /var/run/docker.sock:/var/run/docker.sock:ro \
--env NEXTCLOUD_DATADIR=/my-nextcloud \
--env APACHE_PORT=50021 \
--env APACHE_IP_BINDING=0.0.0.0 \
--env NEXTCLOUD_UPLOAD_LIMIT=5G \
--env NEXTCLOUD_MAX_TIME=7200 \
--env NEXTCLOUD_MEMORY_LIMIT=1024M \
nextcloud/all-in-one:latest

# 说明
# --publish 50020:8080 # all-in-one 后台管理服务端口
# --net=nextcloud-aio # nextcloud单独使用的桥接网络，推荐单独建一个，不要跟其它服务混用
# --env NEXTCLOUD_DATADIR=/my-nextcloud # nexloud本地映射地址，推荐设置
# --env APACHE_PORT=50021 # nextcloud服务访问端口，即服务部署完后访问的服务地址端口
# --env APACHE_IP_BINDING=0.0.0.0 # nextcloud方向代理时推荐设置
# --env NEXTCLOUD_UPLOAD_LIMIT=5G # 服务单文件上传大小限制
# --env NEXTCLOUD_MAX_TIME=7200 # 服务超时时间设置
# --env NEXTCLOUD_MEMORY_LIMIT=1024M # 每个php进程内存大小限制,默认512M
```