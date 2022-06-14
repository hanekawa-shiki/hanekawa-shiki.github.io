# `3D`变换`transform`

## 1.`perspective`景深

表示视距,越小越明显,越大越接近2d效果,给需要做变换的元素的父容器添加

```css
perspective: 600px;
perspective-origin:
```

## 2.`transform-style`开启3d空间

只能给需要变换的父容器添加

```css
transform-style:flat;/*默认值 2d空间*/
transform-style:preserve-3d;/*开启3D空间*/
```

`backface-visibility: hidden;`背面可见性

## 3.属性值

`translate3d(x,y,z)`或`translateZ()`等
`rotste3d(x,y,z,deg)`
`scale3d(sx,sy,sz)`

案例:💗型

案例:模拟时钟

案例:扇形导航

案例;太阳系

案例:字本颜色渐变(一个方向到另一个方向)

案例:动态表情包

案例:轮播图

案例:可口可乐旋转

案例:立方体

案例:翻转扑克牌

案例:旋转相册
