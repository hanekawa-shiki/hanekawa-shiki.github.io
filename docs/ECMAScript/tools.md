---
article: false
---

# 工具函数整理

## 判断是否是严格模式

```js
const strict = (function () { return !this }())
```

## 获取对象类型

```js
function classof(o) {
  return Object.prototype.toString.call(o).slice(8, -1)
}
```

## 质数

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

## 获取`cookie`

```js
// 得到名为 test2 的 cookie
const myCookie = document.cookie.replace(
  /(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/,
  "$1",
);

```

## 基于`promise`的“递归”

```js
function promiseSequere(inputs, promiseMaker) {
  inputs = [...inputs];
  function handleNextInput(outputs) {
    if (inputs.length === 0) {
      return outputs;
    } else {
      const nextInput = inputs.shift();
      return promiseMaker(nextInput).then(output => {
        return outputs.concat(output);
      }).then(handleNextInput)
    }
  }
  return Promise.resolve([]).then(handleNextInput)
}

function fetchUrl(url) {
  return fetch(url).then(res => res.text());
}

const urls = [];

promiseSequere(urls, fetchUrl).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
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