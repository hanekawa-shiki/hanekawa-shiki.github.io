---
article: false
---

# 移动端适配

## 相关名词说明

物理像素：显示器的最小物理显示单元->分辨率。

设备独立像素`dip`：即`CSS`像素，浏览器中的1像素的最小当单位

设备像素比`dpr` = 物理像素 / 设备独立像素 （某一方向上）；可以通过`window.devicePiexlRatio`获取到当前设备像素比。

视口：

- 布局视口：css布局的视口；
- 视觉视口：用户能看到什么的范围；
- 理想视口：设备上浏览器的布局视口的一个理想尺寸；

可视视口的宽度就是屏幕的宽度。如果让视口宽度和屏幕宽度保持一致，才是合适的视口，也叫理想视口。

​移动端设计基础：开发中将布局视口的尺寸设置成理想视口。

```html
<!--仅对移动端有效  通用设置-->
<meta name = "viewport" content="width=device-width" initial-scale=1.0 maximum-scale=1.0 user-scalable=no>
```

## `rem`适配

相对根标签`font-size`大小。

```javascript
//行内样式
(function (designWidth){
  const size = (window.innerWidth || document.documentElement.clientWidth) / designWidth * 100;  //注意使用rem的时候记得除100
  document.documentElement.style.fontSize = `${size}px`;
  document.body.style.fontSize = "14px";
})(750)
/*
**
body单独设置字体大小作用：
1.基础字体大小:确保在整个文档中，默认的字体大小为14px。这可以作为其他元素的基准字体大小。
2.兼容性:某些情况下，浏览器可能会应用默认的字体大小，这样设置可以确保一致性。
3.独立于rem单位:这样设置后，即使html元素的font-size根据视口宽度变化，body元素的字体大小也不会受到影响，保持固定大小。
**
*/
```

## 一像素问题

移动端，在高分辨率设备上，由于设备像素比（`DPR, Device Pixel Ratio`）的原因，1个`CSS`像素可能会显示为多个物理像素，从而导致边框、线条等元素看起来比预期要粗。为了实现真正的一像素效果，通常会采用一些技巧和方法。

解决方案：关键在于正确处理设备像素比（DPR）带来的影响：

1.`CSS`媒体查询

```css
/* 针对 DPR 为 2 的设备 */
@media only screen and (-webkit-min-device-pixel-ratio: 2), 
       only screen and (min--moz-device-pixel-ratio: 2), 
       only screen and (-o-min-device-pixel-ratio: 2/1), 
       only screen and (min-device-pixel-ratio: 2), 
       only screen and (min-resolution: 192dpi), 
       only screen and (min-resolution: 2dppx) {
    .border-1px {
        border-width: 0.5px;
    }
}

/* 针对 DPR 为 3 的设备 */
@media only screen and (-webkit-min-device-pixel-ratio: 3), 
       only screen and (min--moz-device-pixel-ratio: 3), 
       only screen and (-o-min-device-pixel-ratio: 3/1), 
       only screen and (min-device-pixel-ratio: 3), 
       only screen and (min-resolution: 288dpi), 
       only screen and (min-resolution: 3dppx) {
    .border-1px {
        border-width: 0.333333px;
    }
}
```

2.`js`查询配合`transform`

```js
window.onload = function () {
	// div.style.transform = "scaleY(" + 1/window.devicePixelRatio  + ")";
	const ratio = window.devicePixelRatio;
	const style = document.createElement("style");
	style.innerHTML = "#div::after{" +
                "content:'';" +
                "position:absolute;" +
                "left:0;" +
                "top:0;" +
                "border:1px solid black ;" +
                "transform:scale(" + 1 / ratio + ") ;" +
                "width:" + ratio * 100 + "%;" +
                "height:" + ratio * 100 + "%;" +
                "transform-origin:0 0" +
                "}";
	document.head.appendChild(style);
}
```