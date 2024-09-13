---
icon: css
category: tips
tag:
  - css
isOriginal: false
timeline: true
date: 2024-09-13
article: true
---

<!-- more -->

# `DOM`移除动画

## 效果

点击色块删除`DOM`查看效果

<style>
  div[style^=view-transition-name] {
    width: 200px;
    height: 200px;
    display: inline-block;
    background-color: rgb(127, 255, 212);
    margin: 10px;
  }
</style>

<div @click="handleClick">
  <div style="view-transition-name: div1"></div>
  <div style="view-transition-name: div2"></div>
  <div style="view-transition-name: div3"></div>
  <div style="view-transition-name: div4"></div>
  <div style="view-transition-name: div5"></div>
</div>

<script setup>
  const  handleClick = e =>{
    const target = e.target
    document.startViewTransition(() => {
      target.hasAttribute('style') && target.remove()
    })
  }
</script>

## 源码

```html
<!-- 关键点 view-transition-name 值不能重复 -->
<div @click="handleClick">
  <div style="view-transition-name: div1"></div>
  <div style="view-transition-name: div2"></div>
  <div style="view-transition-name: div3"></div>
  <div style="view-transition-name: div4"></div>
  <div style="view-transition-name: div5"></div>
</div>
```

```js
const  handleClick = e =>{
  const target = e.target
  document.startViewTransition && document.startViewTransition(() => {
    target.hasAttribute('style') && target.remove()
  })
}
```

![查看兼容性](https://caniuse.com/?search=view-transition-name)