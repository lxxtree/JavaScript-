/*
* 借用构造函数（constructor stealing）的技术的基本思想是在子类型构造函数的内部调用超类型构造函数。
* 别忘了，函数只不过是在特定环境中执行代码的对象，因此通过使用apply()和call()方法也可以在（将来）新创建的对象上执行构造函数
* 如下例子
 */
function SuperType(){
    this.colors = ["red","blue","green"];
}

function SubType(){
 //继承了SuperType
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);       //"red,blue,green,black"

var instance2 = new SubType();
alert(instance2.colors);       // //"red,blue,green"
/*
* 以上代码中，“SuperType.call(this);”这一行“借调”了超类型的构造函数。通过使用call（）方法或者（apply（）方法也可以），
* 我们实际上是在（未来将要）新创建的SuperType实例环境下调用了SuperType构造函数。
* 这样一来，就会在新SubType对象上执行SuperType（）函数中定义的所有对象初始化代码。
* 结果，SubType的每个实例就都会具有自己的colors属性的副本了。
 */
