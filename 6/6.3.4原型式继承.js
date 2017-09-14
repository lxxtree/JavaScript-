/*\
* 道格拉斯·克罗克福德在2006年写了一篇文章，题为Prototypal Inheritance in JavaScript（JsvaScript中的原型式继承）。
* 在这篇文章中，他介绍了一种实现继承的方法，这种方法并没有使用严格意义上的构造函数。
* 他的想法是借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。
* 为了达到这个目的，他给出了如下函数。
 */
function object(o){
    function F(){}
        F.prototype = o;
        return new F();
}

/*
* 在object()函数内部，先创建了一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回了这个临时类型的一个新实例。
* 从本质上讲，object()对传入其中的对象执行了一次浅复制。来看下面的例子。
 */
var person = {
    name : "Nicholas",
    friends : ["Shelly","Court","Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.name  = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends);       //"Shelly,Court,Van,Rob,Barbie"

/*
* 克罗克福德主张的这种原型式继承，要求你必须有一个对象可以作为另一个对象的基础。
* 如果你有这么一个对象的话，可以把它传给object()函数，然后再根据具体需求对得到的对象加以修改即可。
* 在这个例子汇总，可以作为另一个对象基础的是person（）对象，于是，我们把它传入到object（）函数中，然后该函数就会返回一个新对象。
* 这个新对象将person作为原型，所以它的原型中就包含一个基本类型值属性和一个引用类型值属性
* 这意味着person.friends不仅属于person所有，而且也会被anotherPerson以及yetAnotherPerson共享。
* 实际上，这就相当于又创建了person对象的两个副本。
 */

/*
* ECMAScript 5通过新增Object.create()方法规范了原型式继承。
* 这个方法接收两个参数：一个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象。
* 在传入一个参数的情况下，Object.create()与object（）方法的行为相同。
 */
var person1 = {
    name : "Bob",
    friends : ["John","Sally","Katty"]
};

var anotherPerson1 = Object.create(person1);
anotherPerson1.name = "Rose";
anotherPerson1.friends.push("Van");

var yetAnotherPerson1 = Object.create(person1);
yetAnotherPerson1.name = "Rich";
yetAnotherPerson1.friends.push("Barbie");

alert(person1.friends);

/*
* Object.create()方法的第二个参数与Object.defineProperties()方法的第二个参数格式相同：
* 每个属性都是通过自己的描述符定义的。
* 以这种方式指定的任何属性都会覆盖原型对象上的同名属性。例如：
 */
var person2 = {
    name :"Nicholas",
    friends : ["Shelly","Court","Van"]
};

var anotherPerson2 = Object.create(person2,{
    name : {
        value : "Greg"
    }
});

alert(anotherPerson2.name);     //"Greg"

/*
* 在没有必要兴师动众地创建构造函数，而只想让一个对象与另一个对象保持类似的情况下，原型式继承是完全可以胜任的
* 不过，别忘了，包含引用类型值的属性始终都会共享相应的值，就想使用原型模式一样。
 */
