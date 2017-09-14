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
* 所有引用类型默认都继承了Object，而这个继承也是通过原型链实现的。
* 大家记住，所有函数的默认原型都是Object的实例，因此默认原型都会包含一个内部指针，指向Object.prototype。
* 这也正是所有自定义类型都会继承toString（）、valueOf（）等默认方法的根本原因。
 */
/*
* 如上面的例子中，SubType继承了SuperType，而SuperType继承了Object。
* 当调用instance.toString()时，实际上调用的是保存在Object.prototype中的那个方法。
 */
