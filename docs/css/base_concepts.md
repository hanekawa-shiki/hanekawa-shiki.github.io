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

## 尺寸

### `stretch`、`available`和`fill-available`

让元素的尺寸自动填满可用空间。

- `stretch`：弹性拉伸，是最新的规范中定义的关键字，替换之前的`fill-available`和`available`。
- `available`：可用空间。
- `fill-available`：填充可用空间。


### `width:fit-content`

`fit-content`关键字优点：
- 1.不会破坏元素的原始`diaplay`计算值
- **2.元素尺寸有了确定的值**
  - 比如`margin:auto`实现居中效果需要设置具体的`width`和`height`值。


### `width:min-content`

“首选最小宽度”或者“最小内容宽度”

元素由`content-box`、`padding-box`、`border-box`和`margin-box`组成，元素最终占据的尺寸由这4个盒子占据的尺寸决定。其中`padding-box`、`border-box`和`margin-box`的尺寸表现规则不会因为元素的不同而有所不同，但是`content-box`不一样，它随着内容的不同，首选最小宽度也会不同。


### `width:max-content`

`max-content`关键字表示最大内容宽度，`max-content`关键字的作用是让元素尽可能大，保证图文内容在一行显示，哪怕最终的宽度溢出外部容器元素。


## 逻辑属性

配合`writing-mode`属性、`direction`属性或者`text-orientation`使用。

`margin-line-end`：内联元素文档流结束的方向。


### `inline/block`与`start/end`

所有`CSS`逻辑属性都是围绕`inline/block`与`start/end`展开的。

`inline/block`表示方向，`start/end`表示起止方位。 `inline`元素（文字、图片、按钮等）默认是从左往右水平排列的；`block`元素（如<div>、<p>元素等）默认是从上往下垂直排列的。”




