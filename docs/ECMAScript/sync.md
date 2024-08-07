---
article: false
---

# 异步编程

## 回调函数

1.定时器

```js
setTimeout(callback, time)
let intervalId = setInterval(callback, time)
clearInterval(intervalId)
```

2.事件

键盘按键、鼠标移动、鼠标点击、触摸屏幕动作时，浏览器会生成事件。需要处理特定事件时，可以通过`addEventListener`注册事件处理。

3.网络事件

网络请求:使用`XMLHttpRequest`类及回调函数来发送`HTTP`请求并异步处理服务器返回的响应。

4.`Node`中的回调和事件

`fs.readFile()`

## `Promise`

基于回调的异步编程问题：

- 回调多层嵌套的情形，造成代码缩进过多以致难以阅读。
- 难以处理错误。

`Promise`状态：待定（`pending`）,兑现（`fulfill`）,拒绝（`reject`）。`Promise`一旦兑现或被拒绝，我们说它已经**落定**(`settle`)，永远不会再从兑现变成拒绝，反之亦然。`Promise`还表示该异步代码的结果：

- 异步代码正常结束，结果为代码的返回值
- 异步代码未正常结束，结果就是一个`Error`对象或者某个其他值


对于回调的异步编程，`Promise`的解决方案：

- `Promise`链，以线性`then()`方法调用链的形式表达一连串异步操作，每个`then()`方法返回一个新的`promise`实例对象
- `.catch()`方法，处理错误，在`Promise`链的任何地方都可以使用。在非末尾使用一般是用来恢复`Promise`链，继续执行后续代码。



> [!tip]
> 如何理解一个`promise`与另一个`promise`发生了关联(或“锁定”了另一个期约)？
> 当`promise`以一个`promise`值解决时，就称之为一个`promise`与另一个`promise`发生了关联。

```js {11-15}
const c1 = response => {
  const p4 = response.json()
  return p4
}
const c2 = res => {
  // ...
}
const p1 = fetch('/api') // 任务1
const p2 = p1.then(c1) // 任务2
const p3 = p2.then(c2) // 任务3
// c1被调用时任务2开始，因为任务2是异步的，任务2在c1回调返回时不会结束。
// c1有三种方式可以终止：
// 第一，它可以正常返回由.json()调用返回的期约。这会导致p2被解决，但该promise是兑现还是被拒绝则取决于新返回的promise。
// 第二，c1可以正常返回null值，这会导致p2立即兑现。
// 最后，c1可以抛出一个错误，这会 致p2被拒绝。
```

## 并行`promise`

|静态方法       |参数         |返回值        |
| ----------- | ----------- | ----------- |
|Promise.all()|  Promise[]  | 如果输入`promise`中的任意一个拒绝，返回的期约也将拒绝，并带有第一个被拒绝的原因。否则，返回的期约会以每个输入期约兑现值的数组兑现 |
|Promise.allSettled()|Promise[] |等所有输入`promise`全部落定后兑现。返回一个对象数组，每个对象都有一个status属性，值为`fulfilled`或`rejected`；`fulfilled` => `value`; `rejected` => `reason`|
|Promise.race()| Promise[]  | 返回第一个**落定**的`promise`，状态根据返回的`promise`状态而定，即不关系最终是否成功失败|
|Promise.any() | Promise[]  | 返回第一个兑现的`promise`，参数是`[]`或者`promise`都失败时会抛`AggregateError`错误|


```js
// 并行抓取demo，promise长链
function fetchSequentially(urls) {
  const bodies = []
  function fetchOne(url) {
    return fetch(url)
      .then(response => response.text())
      .then(body => bodies.push(body))
  }

  let p = Promise.resolve(undefined)
  for (const url of urls) {
    p = p.then(() => fetchOne(url))
  }
  return p.then(() => bodies)
}

// 使用
fetchSequentially(url)
  .then(res => {
    // ...
  })
  .catch(err => {
    // ...
  })
```

```js
// 通过then递归调用
function promiseSequence(inputs, promiseMaker) {
  inputs = [...inputs];

  function handleNextInput(outputs) {
    if (inputs.length === 0) {
      return outputs
    } else {
      let nextInput = inputs.shift()
      return promiseMaker(nextInput)
        .then(output => outputs.concat(output))
        .then(handleNextInput)
    }
  }
  return Promise.resolve([]).then(handleNextInput)
}

// 使用
function fetchBody(url) {
  return fetch(url).then(r => r.text())
}
promiseSequence(urls, fetchBody)
  .then(bodies => {
    // 
  })
  .catch(err => {
    // 
  })
```