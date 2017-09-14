function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    alert(this.name);
};
var person1 = new Person();
person1.sayName();   //"Nicholas"

var person2 = new Person();
person2.sayName(); //"Nicholas"

alert(person1.sayName == person2.sayName); //true
/*
* 无论什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个prototype属性，这个属性指向函数的原型对象
* 在默认情况下，所有原型对象都会自动获得一个constructor（构造函数）属性，这个属性是一个指向prototype属性所在函数的指针
* 例如Person.prototype.constructor指向Person
* 创建了自定义的构造函数后，其原型对象默认只会取得constructor属性；至于其他方法，则都是从Object继承而来的。
* 当调用构造函数创建一个新实例后，该实例的内部将包含一个指针（内部属性），指向构造函数的原型对象。
* ECMA-262第5版中管这个指针交[[Prototype]]
* 不过，要明确的真正重要一点就是，这个连接存在于实例和构造哈数的原型对象之间，而不是存在于实例和构造函数之间
* 即Person.prototype属性指向Person的原型对象，Person.prototype.constructor又指回了Person，原型对象中除了constructor属性
* 外，还包括后来添加的name、age、job等其他属性
* Person的每个实例person1和person2都包含一个内部属性[[prototype]]，该属性仅仅指向原型对象Person.prototype
* 即它们与构造函数没有直接的联系
 */
/*
* 虽然在所有实现中都无法访问到[[Prototype]]，但可以通过isPrototypeOf()方法来确定对象之间是否存在这种关系
* 可以通过下面的例子验证[[Prototype]]是否指向原型对象（Person.prototype）
* 若[[Prototype]]指向调用isPrototypeOf()方法的对象（Person.prototype）,那么这个方法就返回true
 */
alert(Person.prototype.isPrototypeOf(person1));  //true
alert(Person.prototype.isPrototypeOf(person2));   //true
//上面用原型对象的isPrototypeOf()方法测试了person1和person2。因为它们内部都有一个指向Person.prototype的指针，因此都返回了true

/*
* ECMAScript 5增加了一个新方法，叫Object.getPrototypeOf()，在所有支持的实现中，这个方法返回[[Prototype]]的值
 */
alert(Object.getPrototypeOf(person1) == Person.prototype);   //true
alert(Object.getPrototypeOf(person1).name);
/*
* 上面两行代码，第一行只是确定Object.getPrototypeOf()返回的对象实际就是这个对象的原型。
* 第二行代码取得了原型对象中name属性的值，也就是"Nicholas"。使用Object.getPrototypeOf()可以方便地取得一个对象的原型。
 */
/*
* 每当代码读取某个对象的某个属性时，都会执行一次搜索，目标是具有给定名字的属性。搜索首先从对象实例本身开始。
* 如果在实例中找到了具有给定名字的属性，则返回该属性的值；
* 如果没有找到，则继续搜索指针指向的原型对象，在原型对象中查找具有给定名字的属性。
* 如果在原型对象中找到了这个属性，则返回该属性的值。
* 也就是说，我们调用person1.sayName()的时候，会先后执行两次搜索。
* 首先，解析器会问：“实例person1有sayName属性吗”答：“没有”
* 然后，它继续搜索，再问：“person1的原型有sayName属性吗？”答：“有。”
* 于是，它就读取那个保存在原型对象中的函数。
* 当我们调用person2.sayName()时，将会重现相同的搜索过程，得到相同的结果。
* 而这正是多个对象实例共享原型所保存的属性和方法的基本原理
 */
/*
* 注：前面提到过，原型最初只包含constructor属性，而该属性也是共享的，因此可以通过对象实例访问
 */
/*
* 虽然可以通过对象实例访问保存在原型中的值，但却不能通过对象实例重写原型中的值
* 如果我们在实例中添加了一个属性，而该属性与实例原型中的一个属性同名，那我们就在实例中创建该属性，
* 该属性将会屏蔽原型中的那个属性。
 */
function Person1(){
}
Person1.prototype.name = "Rose";
Person1.prototype.age = 26;
Person1.prototype.job = "Doctor";
Person1.prototype.sayName = function(){
    alert(this.name);
};
var person3 = new Person1();
var person4 = new Person1();

person3.name = "July";
alert(person3.name);   //July—来自实例
alert(person4.name);   //Rose—来自原型
/*
* 当为对象实例添加一个属性时，这个属性就会屏蔽原型对象中保存的同名属性；
* 换句话说，添加这个属性只会阻止我们访问原型中的那个属性，但不会修改那个属性
* 即使这个属性设置为null，也只会在实例中设置这个属性，而不会恢复其指向原型的连接。
* 不过，使用delete操作符则可以完全删除实例属性，从而让我们能够重新访问原型中的属性，如下面对例子
 */
function Person2(){
}
Person2.prototype.name = "Phebee";
Person2.prototype.age = 24;
Person2.prototype.job = "Massager";
Person2.prototype.sayName = function(){
    alert(this.name);
};

var person5 = new Person2();
var person6 = new Person2();

person5.name = "Rich";
alert(person5.name);   //"Rich"
alert(person6.name);     //"Phebee"

delete person5.name;
alert(person5.name);     //"Phebee"

/*
* 使用hasOwnProperty()方法可以检测一个属性是存在于实例中，还是存在于原型中。这个方法（不要忘了它是从Object继承来的）只
* 在给定属性存在于对象实例中时，才会返回true。
 */
function Person3(){
}
Person3.prototype.name = "Chanller";
Person3.prototype.age = 29;
Person3.prototype.job = "Clerk;" ;
Person3.prototype.sayName = function(){
    alert(this.name);
};

var person7 = new Person3();
var person8 = new Person3();

alert(person7.hasOwnProperty("name"));   //false

person7.name = "Joy";
alert(person7.name);  //Joy—来自实例
alert(person7.hasOwnProperty("name"));  //true

alert(person8.name);   //Chanller—来自原型
alert(person8.hasOwnProperty("name"));    //false

delete person7.name;
alert(person7.name);   //Chanller—来自原型
alert(person7.hasOwnProperty(name));    //false

