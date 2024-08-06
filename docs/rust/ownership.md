---
article: false
---

# 所有权

所有权系统是`Rust`用于管理内存的一组规则，它让`Rust`无需垃圾回收（garbage collector）即可保障内存安全。

::: info 栈（Stack）与堆（Heap）
栈和堆都是代码在运行时可供使用的内存，但是它们的结构不同。
- 栈 值顺序先进后出，增加数据叫做**进栈**（pushing onto the stack），而移出数据叫做**出栈**（popping off the stack）。栈中的所有数据都必须占用已知且固定的大小。
- 堆 存储大小未知或大小可能变化的数据。当向堆放入数据时，请求一定大小的空间。内存分配器（memory allocator）在堆的某处找到一块足够大的空位，把它标记为已使用，并返回一个表示该位置地址的**指针**（pointer）。这个过程称作**在堆上分配内存**（allocating on the heap），有时简称为 “分配”（allocating）。

入栈比在堆上分配内存要快，因为（入栈时）分配器无需为存储新数据去搜索内存空间；其位置总是在栈顶。

访问堆上的数据比访问栈上的数据慢，因为必须通过指针来访问。现代处理器在内存中跳转越少就越快（缓存）。

跟踪哪部分代码正在使用堆上的哪些数据，最大限度的减少堆上的重复数据的数量，以及清理堆上不再使用的数据确保不会耗尽空间，这些问题正是所有权系统要处理的。
:::

所有权规则：
- 1.`Rust`中的每一个值都有一个**所有者**（owner）。
- 2.值在任一时刻有且只有一个所有者。
- 3.当所有者（变量）离开作用域，这个值将被丢弃。

`Rust`垃圾回收策略：内存在拥有它的变量离开作用域后就被自动释放。

## 变量作用域

```rust
fn main(){
    let s = String::from("hello"); // 从此处起，s 是有效的

    // 使用 s
}// 此作用域已结束，
 // s 不再有效
```

当变量离开作用域，`Rust`为我们调用一个特殊的函数。这个函数叫做`drop`，在这里`String`的作者可以放置释放内存的代码。`Rust`在结尾的`}`处自动调用`drop`。


## 所有权与函数

```rust
fn main() {
    let s = String::from("hello"); // s 进入作用域

    takes_ownership(s); // s 的值移动到函数里 ...
                        // ... 所以到这里不再有效

    let x = 5; // x 进入作用域

    makes_copy(x); // x 应该移动函数里，
                   // 但 i32 是 Copy 的，
                   // 所以在后面可继续使用 x
} // 这里，x 先移出了作用域，然后是 s。但因为 s 的值已被移走，
  // 没有特殊之处

fn takes_ownership(some_string: String) {
    // some_string 进入作用域
    println!("{}", some_string);
} // 这里，some_string 移出作用域并调用 `drop` 方法。
  // 占用的内存被释放

fn makes_copy(some_integer: i32) {
    // some_integer 进入作用域
    println!("{}", some_integer);
} // 这里，some_integer 移出作用域。没有特殊之处
```

## 返回值与作用域

```rust
fn main() {
    let s1 = gives_ownership(); // gives_ownership 将返回值
                                // 转移给 s1

    let s2 = String::from("hello"); // s2 进入作用域

    let s3 = takes_and_gives_back(s2); // s2 被移动到
                                       // takes_and_gives_back 中，
                                       // 它也将返回值移给 s3
} // 这里，s3 移出作用域并被丢弃。s2 也移出作用域，但已被移走，
  // 所以什么也不会发生。s1 离开作用域并被丢弃

fn gives_ownership() -> String {
    // gives_ownership 会将
    // 返回值移动给
    // 调用它的函数

    let some_string = String::from("yours"); // some_string 进入作用域。

    some_string // 返回 some_string
                // 并移出给调用的函数
                //
}

// takes_and_gives_back 将传入字符串并返回该值
fn takes_and_gives_back(a_string: String) -> String {
    // a_string 进入作用域
    //

    a_string // 返回 a_string 并移出给调用的函数
}
```

变量的所有权总是遵循相同的模式：将值赋给另一个变量时移动它。当持有堆中数据值的变量离开作用域时，其值将通过`drop`被清理掉，除非数据被移动为另一个变量所有。


## 引用与借用

**引用**（reference）像一个指针，因为它是一个地址，我们可以由此访问储存于该地址的属于其他变量的数据。与指针不同，引用确保指向某个特定类型的有效值。

```rust
fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1);

    println!("The length of '{s1}' is {len}.");
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

**&**符号就是**引用**，它们允许你使用值但不获取其所有权。

