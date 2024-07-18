---
article: false
---

# 基本语法注意点
`Rust`是**静态类型**（`statically typed`）语言。

隐藏与将变量标记为`mut`的区别：

- 隐藏必须使用`let`重新声明，直接赋值会报错，`mut`不会报错；
- 再次使用`let`时，实际上创建了一个新变量，我们可以改变值的类型;`mut`不能改变变量类型；

## 数据类型

### 标量类型

标量类型代表一个单独的值。

- 整型
- 浮点型
- 布尔类型
- 字符类型

1.整型

没有小数部分的数字

|长度	|有符号	|无符号|
|-----|--------|----|
|8-bit	|i8	|u8|
|16-bit|	i16	|u16|
|32-bit|	i32	|u32|
|64-bit|	i64	|u64|
|128-bit|	i128	|u128|
|arch	|isize	|usize|

`isize`和`usize`类型依赖运行程序的计算机架构：64位架构上它们是64位的，32位架构上它们是32位的。

2.浮点型

- f32
- f64

3.布尔型

bool

- true
- false

4.字符类型

使用**单引号**声明字符类型，使用**双引号**声明字符串字面量

- char

`char`类型的大小为四个字节(four bytes)，并代表了一个`Unicode`标量值（Unicode Scalar Value）

### 复合类型

复合类型可以将多个值组合成一个类型。

- 元祖(`tuple`)
- 数组(`array`)

1.元祖

元组长度固定：一旦声明，其长度不会增大或缩小。

不带任何值的元组有个特殊的名称，叫做**单元（unit）**元组。

```rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
}
// 结构元祖值
fn main() {
    let tup = (500, 6.4, 1);

    let (x, y, z) = tup;

    println!("The value of y is: {y}");
}
// 点(.)访问
fn main() {
    let x: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = x.0;

    let six_point_four = x.1;

    let one = x.2;
}
```

2.数组

`Rust`中的数组长度是固定的。数组中的每个元素的类型必须相同。

在栈（stack）上为数据分配空间时使用数组。

但是数组并不如`vector`类型灵活。`vector`类型是标准库提供的一个**允许**增长和缩小长度的类似数组的集合类型。

```rust
let a = [1, 2, 3, 4, 5];
// 在方括号中包含每个元素的类型，后跟分号，再后跟数组元素的数量。
let a: [i32; 5] = [1, 2, 3, 4, 5];
// 通过在方括号中指定初始值加分号再加元素个数的方式来创建一个每个元素都为相同值的数组：
let a = [3; 5]; // 等同于 let a = [3, 3, 3, 3, 3];

// 数组访问
fn main() {
    let a = [1, 2, 3, 4, 5];

    let first = a[0];
    let second = a[1];
}
```

程序在索引操作中使用一个无效的值时导致**运行时**错误。

### 函数

`Rust`代码中的函数和变量名使用`snake case`规范风格。所有字母都是小写并使用下划线分隔单词。

```rust
fn main() {
    println!("Hello, world!");

    another_function();
}

fn another_function() {
    println!("Another function.");
}
```

