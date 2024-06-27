---
title: 高级JavaScript特性
icon: javascript
category: 前端
tag:
  - javascript
isOriginal: true
article: true
date: 2024-06-27
---

一些一般用不到的高级`javascript`知识

<!-- more -->

# 高级`JavaScript`特性

## `Symbol`(符号)

### `Symbol.iterator`&`Symbol.asyncIterator`

只要实现`Symbol.iterator`或`Symbol.asyncIterator`符号的方法，这个类或者对象就是可迭代的。


### `Symbol.hasInstance`

在ES6中，如果`instanceof`的右侧是一个有[Symbol.hasInstance]方法的对象，那么就会以左侧的值作为参数来调用这个方法并返回这个方法的值，返回值会被转换为布尔值，变成`intanceof`操作符的值。如果右侧的值没有[Symbol.hasInstance]方法且是一个函数，则`instanceof`操作符仍然照常行事。

```js
const uint8 = {
  [Symbol.hasInstance](x) {
    return Number.isInteger(x) && x >= 0 && x <= 255
  }
}
128 instanceof uint8 // true
256 instanceof uint8 // false
Math.PI instanceof uint8 // true
```

### `Symbol.toStringTag`

```js
class Range {
  get [Symbal.toStringTag]() {
    return 'Range'
  }
}
Object.prototype.toString.call(Range) // "[Object Range]"
```

### `Symbol.species`