---
title: CSS个人学习整理
icon: css
category: css
tag:
  - css
isOriginal: true
timeline: true
date: 2024-08-07
article: true
---

<!-- more -->

## `css`数据类型

参考[CSS值类型文档大全](https://www.zhangxinxu.com/wordpress/2019/11/css-value-type/)


## `css`单位

参考[CSS/CSS3长度、时间、频率、角度单位大全](https://www.zhangxinxu.com/wordpress/2011/03/css-css3-unit-units/)


## `css`全局关键字属性

- inherit 继承
- initial 初始值
- unset 不固定值
- revert 恢复值

## `@supports`规则

语法

```css
@supports <supports-condition> 
```

```css
<supports-condition> = ( <var> ) | not ( <var> ) | ( <var> ) [ and (<var>) ]+ | ( <var> ) [ or (<var>) ]+
```

## 外在尺寸

### `stretch`、`available`和`fill-available`

让元素的尺寸自动填满可用空间。

- `stretch`：弹性拉伸，是最新的规范中定义的关键字，替换之前的`fill-available`和`available`。
- `available`：可用空间。
- `fill-available`：填充可用空间。

```css
/* 最佳实践 */
.element {
  width: -webkit-fill-available;
  width: -moz-available;
  width: stretch;
}
```

## 内在尺寸

### `width:fit-content`

`fit-content`关键字优点：
- 1.不会破坏元素的原始`diaplay`计算值
- **2.元素尺寸有了确定的值**
  - 比如`margin:auto`实现居中效果需要设置具体的`width`和`height`值。
  - 兼容性没那么好，建议带上浏览器私有前缀


### `width:min-content`

“首选最小宽度”或者“最小内容宽度”

元素由`content-box`、`padding-box`、`border-box`和`margin-box`组成，元素最终占据的尺寸由这4个盒子占据的尺寸决定。其中`padding-box`、`border-box`和`margin-box`的尺寸表现规则不会因为元素的不同而有所不同，但是`content-box`不一样，它随着内容的不同，首选最小宽度也会不同。
- 替换元素的首选最小宽度是当前元素内容自身的宽度。
- CJK文字的最小宽度为单个文字，如果含有避头标点或者避尾那最小宽度包含标点符号。中文破折号例外，被认为是一个中文单元
- 非CJK文字最小宽度以字符单元宽度决定，所有连续的英文字母、数字和标点都被认为是一个字符单元，直到遇到中断字符。
- 最终首选最小宽度：一个元素最终的首选最小宽度是所有内部子元素中最大的那个首选最小宽度值。


### `width:max-content`

`max-content`关键字表示最大内容宽度，`max-content`关键字的作用是让元素尽可能大，保证图文内容在一行显示，哪怕最终的宽度溢出外部容器元素。

使用价值：
- 1.各项宽度不确定，整体宽度自适应。
- 2.当前项的内容较少。 
- 3.当前项的宽度需要尽可能的小。

所有需要使用`max-content`关键字的场景，都能使用`white-space:nowrap`声明实现一模一样的效果，并且`white-space:nowrap`的兼容性更好。


## 逻辑属性

方向与流：`margin-right`是基于反向的`CSS`属性，`margin-line-end`是基于流的`CSS`属性。

`margin-line-end`：内联元素文档流结束的方向。

`CSS`逻辑属性需要配合`writing-mode`属性、`direction`属性或者`text-orientation`使用。

适合使用`CSS`逻辑属性的场景：**对称布局**。


### `inline/block`与`start/end`

所有`CSS`逻辑属性都是围绕`inline/block`与`start/end`展开的。

```css
/* 默认情况下margin方位属性和margin逻辑属性相互的映射关系 */
margin-left    ↔  margin-inline-start
margin-top     ↔  margin-block-start
margin-right   ↔  margin-inline-end
margin-bottom  ↔  margin-block-end
```

`inline/block`表示方向（水平/垂直），`start/end`表示起止方位。 `inline`元素（文字、图片、按钮等）默认是从左往右水平排列的；`block`元素（如`<div>`、`<p>`元素等）默认是从上往下垂直排列的。


### `width/height`属性与`inline-size/block-size`逻辑属性

默认情况下，`width`属性对应的`CSS`逻辑属性是`inline-size`，`height`属性对应的`CSS`逻辑属性是`block-size`。

```css
/*浏览器支持 */
inline-size: fit-content;
inline-size: min-content;
inline-size: max-content;
```

```css
/* 对应逻辑属性关系 */
width        ↔   inline-size
height       ↔   block-size
min-width    ↔   min-inline-size
max-width    ↔   max-inline-size
min-height   ↔   min-block-size
max-height   ↔   max-block-size
```

### `margin/padding/border`演变而来的逻辑属性

- margin-inline-start、margin-inline-end、margin-block-start、margin- block-end； 
- padding-inline-start、padding-inline-end、padding-block-start、padding-block-end； 
- border-inline-start、border-inline-end、border-block-start、border- block-end； 
- border-inline-start-color、border-inline-end-color、border-block- start-color、border-block-end-color； 
- border-inline-start-style、border-inline-end-style、border-block- start-style、border-block-end-style； 
- border-inline-start-width、border-inline-end-width、border-block- start-width、border-block-end-width。

缩写：
- margin-inline、margin-block； 
- padding-inline、padding-block； 
- border-inline、border-block； 
- border-inline-color、border-block-color； 
- border-inline-style、border-block-style； 
- border-inline-width、border-block-width。 
  

### `text-align`属性支持的逻辑属性值

对`text-align`属性而言，演变的不是属性而是属性值。 
  
- text-align: start
- text-align: end

### `inset`

使用绝对定位的时候经常会用到`left`、`top`、`right`、`bottom`等属性。与之相对应的`CSS`逻辑属性，全部都是以`inset`开头： 
- inset-inline-start
- inset-inline-end
- inset-block-start
- inset-block-end










