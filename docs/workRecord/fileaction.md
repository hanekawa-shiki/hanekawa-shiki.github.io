---
article: false
---

# 纯前端下载模版文件

有时我们会遇到偷懒的后端同事，下载简单模板类的需求不愿意写接口，直接甩给前端同事做。对于这种需求也不是很复杂。

```javascript
const getTemplateFile = () => {
  const origin = window.location.origin
  // 假设下载的文件静态路径
  const templateFile = '/template/template.doc'
  const fileUrl = `${origin}${templateFile}`
  const link = document.createElement('a')
  link.style.display = 'none'
  link.setAttribute('href', fileUrl)
  link.download = '下载的文件名' + new Date().getTime()
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
```

# 通过接口下载文件

1.对于`GET`请求的接口，最常用的是`window.open(url)`。

2.但是对于`POST`请求就不能直接使用`window.open(url)`方法了，我们可以利用`Blob`对象下载文件，通常在项目中封装一个下载文件的方法。

```javascript
// blob 接口返回的流
// fileName 文件名
// evt 文件扩展名
const handleBlobData = (blob, fileName, evt = 'pdf') => {
  const a = document.createElement('a')
  document.body.appendChild(a)
  a.style = 'display: none'
  const url = window.URL.createObjectURL(blob)
  a.href = url
  const name = fileName ? `${fileName}.${evt}` : `${dayjs().format('YYYY-MM-DD_HH:mm:ss')}.${evt}`
  a.click()
  a.remove()
  window.URL.revokeObjectURL(url)
}

// 关于文件名,一般在响应头回有返回
const fileNameEncode = res.headers['content-disposition'].split('filename=')[1]
const fileName = decodeURIComponent(fileNameEncode)

```


