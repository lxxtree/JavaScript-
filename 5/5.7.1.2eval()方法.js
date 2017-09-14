/*
*eval()方法就像是一个完整 的ECMAScript解析器，它只接受一个参数，即要执行的ECMAScript（或JavaScript）字符串
* 当解析器发现代码中调用eval()方法时，它会将传入的参数当作实际的ECMAScript语句来解析，然后把执行结果插入到原位置
* 通过eval()执行的代码被认为是包含该次调用的执行环境的一部分，因此被执行的代码具有与该执行环境相同的作用域链
* 这意味着通过eval()执行的代码可以引用在包含环境中定义的变量
 */
//eg1:
/*变量msg是在eval()调用的环境之外定义的，但其中调用的alert()仍然能够显示"hello world"。
* 这是因为下面的第二行代码最终被替换成了一行真正的代码
 */
var msg = "hello world";
eval("alert(msg)");

//eg2:
/*
* 函数sayHi()是在eval()内部定义的。但由于对eval()的调用最终会被替换成定义函数的实际代码，因此可以在下一行调用sayHi()
 */
eval("function sayHi(){alert('hi');}");
sayHi();

//eg3:
/*
* 在eval()中创建的任何变量或者函数都不会被提升，因为在解析代码的时候，它们被包含在一个字符串中；它们只在eval()执行的时候创建
 */
eval("var msg1 = 'hello mom';");
alert(msg1);
