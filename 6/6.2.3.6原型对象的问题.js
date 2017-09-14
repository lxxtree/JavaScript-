/*
* 原型模式也不是没有缺点。首先，它省略了为构造函数传递初始化参数这一环节，结果所有实例在默认情况下都将取得相同的属性值
* 虽然这会在某种程度上带来一些不方便，但还不是原型的最大问题。原型模式的最大问题是由其共享的本性所导致的。
 */
/*
* 原型中所有属性时被很多实例共享的，这种共享对于函数非常合适。对于那些包含基本值的属性倒也说得过去，毕竟（如前面的例子所示），
* 通过在实例上添加一个同名属性，可以隐藏原型中的对应属性。
* 然而，对于包含引用类型值的属性来说，问题就比较突出了。看下面的例子。
 */
function Person(){
}
Person.prototype = {
    constructor : Person,
    name : "Bob",
    age : 29,
    job :"SoftWare Engineer",
    friends :["Shelly","Court"],
    sayName : function(){
        alert(this.name);
    }
};

var person1 = new Person();
var person2 = new Person();

person1.friends.push("Van");

alert(person1.friends);    //"Shelly,Court,Van"
alert(person2.friends);   //"Shelly,Court,Van"
alert(person1.friends === person2.friends);

/*
* 在此，Person.prototype对象有一个名为friends的属性，该属性包含一个字符串数组。
* 然后，创建了Person的两个实例。接着，修改了person1.friends引用的数组，向数组中添加了一个字符串。
* 由于friends数组存在于Person.prototype而非person1中，所以刚刚提到的修改也会通过person2.friends（与person1.friends指向同一数组）反应出来。
* 实例一般都是要有属于自己的全部属性的，而这个问题正是我们很少看到有人单独使用原型模式的原因所在。
 */
