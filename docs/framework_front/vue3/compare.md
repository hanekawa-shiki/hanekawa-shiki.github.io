---
article: false
---
# 四、Composition API 的优势

## 1.Options API 存在的问题

使用传统OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 。

![before](./img/1.gif)
![before edit](./img/2.gif)

## 2.Composition API 的优势

我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。

![after](./img/3.gif)
![after edit](./img/4.gif)

<style lang="css" scoped>
  img[src$='#vueLeft'] {
    width: 50%;
  }
  img[src$='#vueRight'] {
    width: 50%;
  }
</style>
