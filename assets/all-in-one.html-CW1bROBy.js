import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as n,o as e}from"./app-D6e8Dxqj.js";const l={};function t(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<p>记录下部署方法</p><p><a href="https://github.com/nextcloud/all-in-one" target="_blank" rel="noopener noreferrer">官方文档</a></p><p><a href="https://github.com/nextcloud/all-in-one/blob/main/reverse-proxy.md" target="_blank" rel="noopener noreferrer">官方反向代理设置文档</a></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--init </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--sig-proxy=false </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--name </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nextcloud-aio-mastercontainer</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--restart </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">always</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--publish </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">50020:8080</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--net=nextcloud-aio </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--volume </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nextcloud_aio_mastercontainer:/mnt/docker-aio-config</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--volume </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/var/run/docker.sock:/var/run/docker.sock:ro</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--env </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">NEXTCLOUD_DATADIR=/my-nextcloud</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--env </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">APACHE_PORT=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50021</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--env </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">APACHE_IP_BINDING=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.0.0.0</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--env </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">NEXTCLOUD_UPLOAD_LIMIT=5G</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--env </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">NEXTCLOUD_MAX_TIME=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">7200</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--env </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">NEXTCLOUD_MEMORY_LIMIT=1024M</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">nextcloud/all-in-one:latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 说明</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># --publish 50020:8080 # all-in-one 后台管理服务端口</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># --net=nextcloud-aio # nextcloud单独使用的桥接网络，推荐单独建一个，不要跟其它服务混用</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># --env NEXTCLOUD_DATADIR=/my-nextcloud # nexloud本地映射地址，推荐设置</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># --env APACHE_PORT=50021 # nextcloud服务访问端口，即服务部署完后访问的服务地址端口</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># --env APACHE_IP_BINDING=0.0.0.0 # nextcloud方向代理时推荐设置</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># --env NEXTCLOUD_UPLOAD_LIMIT=5G # 服务单文件上传大小限制</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># --env NEXTCLOUD_MAX_TIME=7200 # 服务超时时间设置</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># --env NEXTCLOUD_MEMORY_LIMIT=1024M # 每个php进程内存大小限制,默认512M</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const r=s(l,[["render",t]]),d=JSON.parse('{"path":"/service/all-in-one.html","title":"使用All-in-One部署Nextcloud服务","lang":"zh-CN","frontmatter":{"title":"使用All-in-One部署Nextcloud服务","icon":"link","category":"service","tag":["Docker","NextCloud"],"isOriginal":true,"timeline":true,"date":"2024-07-04T00:00:00.000Z","article":true,"description":"记录下部署方法","head":[["meta",{"property":"og:url","content":"https://hanekawa.top/service/all-in-one.html"}],["meta",{"property":"og:site_name","content":"hanekawa-shiki"}],["meta",{"property":"og:title","content":"使用All-in-One部署Nextcloud服务"}],["meta",{"property":"og:description","content":"记录下部署方法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-04T03:00:58.000Z"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:tag","content":"NextCloud"}],["meta",{"property":"article:published_time","content":"2024-07-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-04T03:00:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用All-in-One部署Nextcloud服务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-04T03:00:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"hanekawa-shiki\\",\\"url\\":\\"https://hanekawa.top\\"}]}"]]},"git":{"createdTime":1720062058000,"updatedTime":1720062058000,"contributors":[{"name":"kamishima-kaede","username":"kamishima-kaede","email":"kamiacgxu@gmail.com","commits":1,"url":"https://github.com/kamishima-kaede"}]},"readingTime":{"minutes":0.84,"words":251},"filePathRelative":"service/all-in-one.md","localizedDate":"2024年7月4日","excerpt":"<p>记录下部署方法</p>\\n","autoDesc":true}');export{r as comp,d as data};
