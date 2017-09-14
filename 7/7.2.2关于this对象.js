/*
* 在闭包中使用this对象也可能会导致一些问题。我们知道，this对象是在运行时基于函数的执行环境绑定的：
* 在全局函数中，this等于window，而当函数被作为某个对象的方法调用时，this等于那个对象。
* 不过，匿名函数的执行环境具有全局性，因此其this对象通常指向window。
* 但有时候由于编写闭包的方式不同，这一点可能不会那么明显。
 */
var name = "The Window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        return function(){
            return this.name;
        };
    }
};

alert(object.getNameFunc()());      //"The Window"（在非严格模式下）

/*
* 以上代码先创建了一个全局变量name，又创建了一个包含name属性的对象。这个对象还包含一个方法——getNameFunc()，
* 它返回了一个匿名函数，而匿名函数又返回this.name。
* 由于getNameFunc()返回一个函数，因此调用object.getNameFunc()()就会立即调用它返回的函数，结果就是返回一个字符串。
* 然而，这个例子返回的字符串是“The Window”，即全局name变量的值。
* 为什么匿名函数没有取得其包含作用域（或外部作用域）的this对象呢？
* 前面曾提到过，每个函数在被调用时都会自动获取两个特殊变量：this和arguments。
* 内部函数在搜索这两个变量时，只会搜索到其活动对象为止，因此永远不可能直接访问外部函数中的这两个变量。
* 不过，把外部变量作用域中的this对象保存在一个闭包能够访问到的变量里，就可以让闭包访问该对象了，如下所示
 */

var name1 = "The Window";

var object1 = {
    name1 : "My Object",

    getNameFunc1 : function(){
        var that = this;
        return function(){
            return that.name1;
        };
    }
};

alert(object1.getNameFunc1()());       //"My Object"

/*
* this和arguments也存在同样的问题。如果想问作用域中的arguments对象，必须将对该对象的引用保存到另一个闭包能够访问的变量中
 */

/*
* 几种特殊情况下，this的值可能会意外地改变。比如，下面的代码是修改前面例子的结果。
 */
var name2 = "The Window";

var object = {
    name : "My Object",

    getName : function(){
        return this.name;
    }
};
/*
* 这里的getName（）方法只简单地返回this.name的值。以下是几种调用object.getName()的方式以及各自的结果
 */
alert(object.getName());       //"My Object"
alert((object.getName)());     //"My Object"
alert((object.getName = object.getName)());        //"The Window"，在非严格模式下
/*
* 第一行代码跟平常一样调用了object.getName（），返回的是“My Object”，因为this.name就是object.name。
* 第二行代码在调用这个方法前先给它加上了括号。
* 虽然加上括号之后，就好像在引用一个函数，但是this的值得到了维持，因为object.getName和（object.getName）的定义是相同的。
* 第三行代码先执行了一条赋值语句，然后再调用赋值后的结果。
* 因为这个赋值表达式的值是函数本身，所以this的值不能得到维持，结果就返回了“The Window”。
 */
