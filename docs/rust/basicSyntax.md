---
article: false
---

# 基本语法
`Rust`是**静态类型**（`statically typed`）语言。

`Rust`的缩进风格使用**4个空格**

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

在函数签名中，必须声明每个参数的类型。`Rust`要求在函数定义中提供类型注解，意味着编译器再也不需要你在代码的其他地方注明类型来指出你的意图。而且，在知道函数需要什么类型后，编译器就能够给出更有用的错误消息。

```rust
fn main() {
    print_labeled_measurement(5, 'h');
}

fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {value}{unit_label}");
}
```

#### 语句与表达式

`Rust`是一门基于表达式（expression-based）的语言。

- 语句（Statements）是执行一些操作但不返回值的指令。
- 表达式（Expressions）计算并产生一个值。

#### 函数返回值

函数可以向调用它的代码返回值。我们并不对返回值命名，但要在箭头（->）后声明它的类型。在`Rust`中，函数的返回值等同于函数体最后一个表达式的值。使用`return`关键字和指定值，可从函数中提前返回；但大部分函数隐式的返回最后的表达式。

```rust
fn five() -> i32 {
    5
}

fn main() {
    let x = five();

    println!("The value of x is: {x}");
}
```

### 控制流

#### `if`

```rust
fn main() {
    let number = 3;
    // 代码中的条件必须是bool值。如果条件不是bool值，我们将得到一个错误。
    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }
}
```

#### `else if`

```rust
fn main() {
    let number = 6;

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
```

#### 在`let`语句中使用`if`

**代码块的值是其最后一个表达式的值**

```rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {number}");
}
```

### 循环

`Rust`有三种循环：`loop`、`while`和`for`。


#### `loop`

`loop`的一个用例是重试可能会失败的操作

```rust
fn main() {
    loop {
        println!("again!");
    }
}
```

跳出循环

- 在控制台使用`ctrl+c`
- 使用`break`关键字
- 使用`continue`关键字跳过当前循环并转到下一个循环。


```rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            // 将返回值加入来停止循环的break表达式，它会被停止的循环返回。
            break counter * 2;
        }
    };

    println!("The result is {result}");
}
```

##### 循环标签（消除多个循环之间的歧义）

如果存在嵌套循环，`break`和`continue`应用于此时最内层的循环。你可以选择在一个循环上指定一个**循环标签**（loop label），然后将标签与`break`或`continue`一起使用，使这些关键字应用于已标记的循环而不是最内层的循环。

```rust
fn main() {
    let mut count = 0;
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {count}");
}
```

#### `while`

当条件为`true`，执行循环。当条件不再为`true`，调用`break`停止循环。

```rust
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{number}!");

        number -= 1;
    }

    println!("LIFTOFF!!!");
}
```

### `for`

```rust
fn main() {
    for number in (1..4).rev() {
        println!("{number}!");
    }
    println!("LIFTOFF!!!");
}
```

