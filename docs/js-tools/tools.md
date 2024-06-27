---
title: 日常js积累
icon: javascript
category: 前端
tag:
  - node
isOriginal: true
article: true
date: 2024-06-27
---

日常开发学习过程中积累的`javascript`

<!-- more -->

## 工具函数

### 质数

```js
// 返回一个小于 `max` 的质数列表
function getPrimes(max) {
  const isPrime = Array.from({ length: max }, () => true);
  isPrime[0] = isPrime[1] = false;
  isPrime[2] = true;
  for (let i = 2; i * i < max; i++) {
    if (isPrime[i]) {
      for (let j = i ** 2; j < max; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return [...isPrime.entries()]
    .filter(([, isPrime]) => isPrime)
    .map(([number]) => number);
}
```

### 获取`cookie`

```js
// 得到名为 test2 的 cookie
const myCookie = document.cookie.replace(
  /(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/,
  "$1",
);

```

## 常用`api`对比

### `Array`
```js
// Array构造函数无法创建只包含一个数值元素的数组
// Array.of()可以解决如上问题
// Array.from()将可迭代对象或类数组转为数组

// Array.fromAsync()
//  1.依次等待对象中产生的每个值兑现；
//  2.惰性迭代可迭代对象，并且不会获取下一个值，直到当前值被兑现。
// Promise.all()
//  1.并行等待所有值兑现；
//  2.预先获取所有值并等待它们全部兑现。
```

### `===`与`Object.js()`

```js
// Object.is() 和 === 之间的唯一区别在于它们处理带符号的 0 和 NaN 值的时候
NaN === NaN // false
-0 === +0 // true
Object.is(NaN, NaN) // true
Object.is(-0, +0) // false
```