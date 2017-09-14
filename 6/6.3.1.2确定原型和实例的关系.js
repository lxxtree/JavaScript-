function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};

function SubType(){
    this.subproperty = false;
}

SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function(){
    return this.subproperty;
};

var instance = new SubType();
alert(instance.getSuperValue());       //true

/*
* 可以通过两种方式来确定原型和实例之间的关系。
* 第一种方式是使用instanceof操作符，只要用这个操作符来测试实例与原型链中出现过的构造函数，结果就会返回true
* 如下代码可以说明这一点
 */
alert(instance instanceof Object);          //true
alert(instance instanceof SuperType);      //true
alert(instance instanceof SubType);       //true
/*
* 由于原型链的关系，我们可以说instance是Object、SuperType、SubType中任何一个类型的实例。
* 因此，测试这三个构造函数的结果都返回了true
 */

/*
* 第二种方式是使用isPrototypeOf()方法。同样，只要是原型链中出现过的原型，都可以说是该原型链所派生的实例的原型，
* 因此isPrototypeOf()方法也会返回true，如下所示
 */
alert(Object.prototype.isPrototypeOf(SuperType));         //true
alert(Object.prototype.isPrototypeOf(SubType));             //true
alert(Object.prototype.isPrototypeOf(instance));          //true
alert(SuperType.prototype.isPrototypeOf(instance));      //true
alert(SubType.prototype.isPrototypeOf(instance));      //true
