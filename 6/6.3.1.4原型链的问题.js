/*
* 原型链虽然很强大，可以用它来实现继承，但它也存在一些问题。
* 其中，最主要的问题来自包含引用类型的原型。包含引用类型值的原型属性会被所有实例共享。
* 这也是为什么要在构造函数中，而不是原型对象中定义属性的原因。
* 在通过原型来实现继承时，原型实际上会变成另一个类型的实例。
* 于是，原先的实例属性也就顺理成章地变成了现在的原型属性了。下列代码可以用来说明这个问题
 */
function SuperType(){
    this.colors = ["red","blue","purple"];
}

function SubType(){
}

//继承了SuperType
SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);         //"red,blue,purple,black"

var instance2 = new SubType();
alert(instance2.colors);         //"red,blue,purple,black"
/*
* 这个例子中的SuperType构造函数定义了一个colors属性，该属性包含一个数组（引用类型值）。
* SuperType的每个实例都会有各自包含自己数组的colors属性。
* 当SubType通过原型链继承了SuperType之后，SubType.prototype就变成了SuperType的一个实例，因此它也拥有了一个它自己的colors属性
* 就跟专门创建了一个SubType.prototype.colors属性一样。
* 但结果是什么呢？结果是SubType的所有实例都会共享这一个colors属性。
 */
/*
* 原型链的第二个问题是：在创建子类型的实例时，不能向超类型的构造函数中传递参数。
* 实际上，应该说是没有办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数。
* 有鉴于此，再加上前面刚刚讨论的由于原型中包含引用类型值所带来的问题，实践中很少会单独使用原型链。
 */
