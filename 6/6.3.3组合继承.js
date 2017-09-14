/*
* 组合继承（combination inheritance），有时候也叫伪经典继承，指的是将原型链和借用构造函数技术组合到一块，从而发挥二者之长的一种继承模式。
* 其背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。
* 这样，既通过在原型上定义方法实现了函数复用，又能保证每个实例都有它自己的属性。
 */
function SuperType(name){
    this.name = name;
    this.colors = ["red","blue","green"];
}

SuperType.prototype.sayName = function(){
    alert(this.name);
};

function SubType(name,age){

    //继承属性
    SuperType.call(this,name);
    this.age = age;
}

//继承方法
SubType.prototype = new SuperType();
SubType.constructor = SubType;
SubType.prototype.sayAge = function(){
    alert(this.age);
};

var instance1 = new SubType("Nicholas",29);
instance1.colors.push("black");
alert(instance1.colors);     //"red,blue,green"
instance1.sayName();           //"Nicholas"
instance1.sayAge();            //29

var instance2 = new SubType("Greg",27);
alert(instance2.colors);       //"red,blue,green"
instance2.sayName();            //"Greg"
instance2.sayAge();             //27

/*
* 在这个例子中，SuperType构造函数定义了两个属性：name和colors。
* uperType的原型定义了一个方法sayName()。
* SubType构造函数在调用SuperType构造函数时传入了name参数，紧接着又定义了它自己的属性age。
* 然后，将SuperType的实例赋值给SubType的原型，然后又在该新原型上定义了方法sayAge()
* 这样一来，就可以让两个不同的SubType实例既分别拥有自己属性——包括colors属性，又可以使用相同的方法了。
 */
