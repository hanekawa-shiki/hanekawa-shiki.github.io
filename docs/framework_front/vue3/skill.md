---
article: false
---
# 七. `Vue` 积累---修饰符

本文转载自[Vue中文社区](https://mp.weixin.qq.com/s/pGMAwT_QaKY0t3iLvDar1A)

## 1. 事件修饰符

### 1.1 `.stop`

::: info

阻止事件冒泡 同 `event.stopPropagation`。

:::

```vue
<template>
  <div class="parent" @click="onClickParent">
    我是爸爸
    <div class="child" @click.stop="onClickChild">
      我是儿子
    </div>
  </div> 
</template>
```

### 1.2 `.prevent`

::: info

阻止默认事件 同 `event.preventDefault`

:::

```vue
<template>
  <div class="prevent">
    <a href="https://www.baidu.com/" @click="onNoPrevent">点击跳转</a>
    <br />
    <br />
    <a href="https://www.baidu.com/" @click.prevent="onPrevent">阻止默认事件，无法跳转</a>
  </div>
</template>
<script>
  export default {
    name: 'prevent',
    methods: {
      onNoPrevent () {
        console.log('未阻止默认事件')
      },
      onPrevent () {
        console.log('阻止默认事件')
      }
    }
  }
</script>
```

### 1.3 `.capture`

::: info

正常情况下，事件流是以冒泡(由里向外)的形式传递的， `.capture` 则反过来捕获（由外向里）

:::

```vue
<template>
  <div class="capture parent" @click.capture="onClickParent">
    父节点
    <div class="child" @click.capture="onClickChild">自节点</div>
  </div>
</template>

<script>
  export default {
    name: 'capture',
    methods: {
      onClickParent () {
        console.log('我是父节点')
      },
      onClickChild () {
        console.log('我是子节点')
      }
    }
  }
</script>
```

### 1.4 `.self`

::: info

只有当 `event.target` 是当前元素自身时才会触发事件回调函数

:::

### 1.5 `.once`

> 事件只会触发一次

### 1.6 `.native`

> 在自定义组件上，只能监听自定义事件，一些原生事件（比如 `click` ）是没有办法直接触发的，但是使用 `.native` 修饰符可以帮我们办到这点

### 1.7 `.passive`

> `vue` 对应 `addEventListener` 中的 `passive` 选项提供了 `.passive` 修饰符

## 2. `v-bind` 修饰符

### 2.1 `.sync`

> 当我们想要在父组件和子组件之间对某个属性值进行双向绑定时, 有什么便捷的方式？是的只要 `.sync` 修饰符即可办到

```vue
<template>
  <div class="sync-parent">
    我是父组件: {{ text }}
    <Child :text.sync="text" />
  </div>
</template>

<script>
import Child from './child.vue'

export default {
  name: 'SyncParent',
  data () {
    return {
      text: 'parent'
    }
  },
  components: {
    Child,
  }
}
</script>
```

```vue
<template>
    <div class="child">
    我是子组件: 
    <input type="text" v-model="value" @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'child',
  props: {
    text: {
      type: String
    }
  },
  data () {
    return {
      value: this.text
    }
  },
  methods: {
    onInput () {
      // 注意这里，必须是update:xxx的形式xxx即属性prop
      this.$emit('update:text', this.value)
    }
  }
}
</script>
```

2 `.camel`

> `.camel` 修饰符允许在使用 DOM 模板时将 v-bind property 名称驼峰化，例如 SVG 的 viewBox property：

```vue
<template>
  <svg :view-box.camel="viewBox"></svg>
</template>
```

3 `.prop`

> 关于 `.prop` 修饰符官网只有这句话 .prop  作为一个 DOM property 绑定而不是作为 attribute 绑定。

```vue
<template>
  <svg :view-box.camel="viewBox"></svg>
</template>
```

有啥作用？

* 通过自定义属性存储变量，避免暴露数据
* 防止污染 HTML 结构

比如有以下代码

```vue
<template>
  <div class="prop">
    <div class="prop-item" :my-name="prop"></div>
    // 最终变成了 <div my-name="hello prop" class="prop-item"></div>
    <div class="prop-item" :my-name.prop="prop2"></div>
    // 最终变成了<div class="prop-item"></div>
    <button @click="onGetResult">获取结果</button>
  </div>
</template>

<script>
export default {
  name: 'prop',
  data () {
    return {
      prop: 'hello prop',
      prop2: 'hello prop2'
    }
  },
  methods: {
    onGetResult () {
      const $refProp = this.$refs.prop
      const $refProp2 = this.$refs.prop2

      console.log($refProp.getAttribute('my-name')) // hello prop
      console.log($refProp2.getAttribute('my-name')) // null
    }
  }
}
</script>
```

从示例上可以看出未使用.prop修饰符的my-name属性会绑定到dom节点的attribute，从而出现暴露的情况。

## 3. 鼠标修饰符

当咱们想监听用户点击了左键、右键或者中键时也有修饰符可以快捷使用，分别是.left、.right、middle，来看个例子试试

[MDN关于鼠标按键的解释](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/button)

```vue

<template>
  <div class="mouse" @mousedown="onMousedown">
    <button @click.left="onClickBtn('left')">left</button>
    <button @click.middle="onClickBtn('middle')">middle</button>
    <button @click.right="onClickBtn('right')">right</button>
  </div>
</template>
<script>
export default {
  name: 'mouse',
  mounted () {

  },
  methods: {
    onClickBtn (msg) {
      console.log(msg)
    },
    onMousedown (event) {
      const mosueMsgMap = {
        0: '鼠标左键',
        1: '鼠标中键',
        2: '鼠标右键'
      }
      console.log('点击了', mosueMsgMap[event.button])
    }
  }
}
</script>
```

## 4.表单相关修饰符

### 4.1 `.trim`

> 过滤输入的首尾空格

### 4.2 `.lazy`

> 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步。你可以添加 lazy 修饰符，从而转为在 change 事件之后进行同步：

### 4.3 `.number`

> 如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符
> 当输入类型为 text 时这通常很有用。如果输入类型是 number，Vue 能够自动将原始字符串转换为数字，无需为 v-model 添加 .number 修饰符。如果这个值无法被 parseFloat() 解析，则返回原始的值。

## 5.系统修饰符

### 5.1 `.ctrl`、`.alt`、`.shift`、`.meta`

> 当点击事件或者键盘事件需要系统键同时按下才触发时 .ctrl、.alt、.shift、.meta 可以帮大忙噢！

```vue
<template>
  <div class="system">
    <p>{{ msg }}</p>
    <div class="buttons">
      <button @click.ctrl="onClickButon('ctrl')">ctrl</button>
      <button @click.alt="onClickButon('alt')">alt</button>
      <button @click.shift="onClickButon('shift')">shift</button>
      <button @click.meta="onClickButon('meta')">meta</button>
    </div>
  </div>
</template>
```

### 5.2 `.exact`

> 严格来说这 .exact 不属于系统修饰符，只是上面例子的写法有一个现象，同时按下几个系统修饰键（例如alt和shift）既可以触发.alt也可以触发.shift。

```vue
<template>
  <div class="extra">
    <p>{{ msg }}</p>
    <div class="buttons">
      <button @click.ctrl.exact="onClickButon('ctrl')">ctrl</button>
      <button @click.alt.exact="onClickButon('alt')">alt</button>
      <button @click.shift.exact="onClickButon('shift')">shift</button>
      <button @click.meta.exact="onClickButon('meta')">meta</button>
      <button @click.exact="onClickButon('非系统键')">非系统键</button>
    </div>
  </div>  
</template>
```

## 6.按键修饰符

> 在监听键盘事件时，我们经常需要检查详细的按键再执行对应的逻辑，vue也为我们内置了至少11+的按键修饰符。
> 如下代码，我们分别给enter、tab、delete等按键指定了keydown事件，当在指定的输入框中按下指定的键盘，会打印出enter、tab、delete等，其他按键在输入框中无法触发该console

```vue
<template>
  <div class="key-modifiers">
    <div class="key-modifiers-item">
      enter:
      <input type="text" @keydown.enter="onKeydown('enter')">
    </div>
    <div class="key-modifiers-item">
      tab:
      <input type="text" @keydown.tab="onKeydown('tab')">
    </div>  
    <div class="key-modifiers-item">
      delete:
      <input type="text" @keydown.delete="onKeydown('delete')">
    </div>  
    <div class="key-modifiers-item">
      esc:
      <input type="text" @keydown.esc="onKeydown('esc')">
    </div>  
    <div class="key-modifiers-item">
      space:
      <input type="text" @keydown.space="onKeydown('space')">
    </div> 
    <div class="key-modifiers-item">
      up:
      <input type="text" @keydown.up="onKeydown('up')">
    </div>  
    <div class="key-modifiers-item">
      down:
      <input type="text" @keydown.down="onKeydown('down')">
    </div> 
    <div class="key-modifiers-item">
      left:
      <input type="text" @keydown.left="onKeydown('left')">
    </div>  
    <div class="key-modifiers-item">
      right:
      <input type="text" @keydown.right="onKeydown('right')">
    </div>  
    
    <div class="key-modifiers-item">
      page-down:
      <input type="text" @keydown.page-down="onKeydown('page-down')">
    </div>  
    <div class="key-modifiers-item">
      page-up:
      <input type="text" @keydown.page-up="onKeydown('page-up')">
    </div>  
  </div>
</template>
```

## 7.自定义按键修饰符

```js
Vue.config.keyCodes = {
  q: 81
}
```

```vue
<template>
  <div class="custom">
    <input type="text" @keydown.q="f1Keydown">
  </div>
</template>

<script>
  export default {
    name: 'custom',
    methods: {
      f1Keydown () {
        console.log('按下了q')
      }
    }
  }
</script>
```
