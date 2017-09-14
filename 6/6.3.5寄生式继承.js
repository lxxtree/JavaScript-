//原型式继承
function object(o){
    function F(){}
    F.prototype  = o;
    return new F();
}
/*
* 寄生式（parasitic）继承是与原型式继承紧密相关的一种思路，并且同样也是由克罗克福德推广之的。
* 寄生式继承的思路与寄生构造函数和工厂模式类似，即创建一个仅用于封装继承过程的函数，
* 该函数在内部以某种方式增强对象，最后再像真地是它做了所有工作一样返回对象。以下代码示范了寄生式继承模式
 */
function createAnother(original){

    //通过调用函数创建一个新对象
    var clone = object(original);

    //以某种方式来增强这个对象
    clone.sayHi = function(){
        alert("hi");
    };
    return clone;

}
/*
* 在这个例子中，createAnother()函数接收了一个参数，也就是将要作为新对象基础的对象。
* 然后把这个对象（original）传递给object()函数，将返回的结果赋值给clone。
* 再为clone对象添加一个新方法sayHi()，最后返回给clone对象。
* 可以像下面这样使用createAnother()函数：
 */
var person = {
    name : "Nicholas",
    friends : ["Shelyy","Court","Van"]
};

var anotherPerson = createAnother(person);
anotherPerson.sayHi();               //"hi"
/*
* 这个例子中的代码基于person返回一个新对象——anotherPerson。新对象不仅具有person的所有属性和方法，还有自己的sayHi()方法。
 */
/*
* 在主要考虑对象而不是自定义类型和构造函数的情况下，寄生式继承也是一种有用的模式。
* 前面示范继承模式时使用的object（）函数不是必需的；任何能够返回新对象的函数都适用于此模式。
 */
/*
* 使用寄生式继承来为对象添加函数，会由于不能做到函数复用而降低效率；这一点与构造函数模式类似。
 */
