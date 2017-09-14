function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    alert(this.name);
};
/*
* 由于在原型中查找值的过程是一次搜索，因此我们队原型对象所做的任何修改都能够立即从实例上反映出来—即使是先创建了实例后
* 修改原型也照样如此，如下面的例子：
 */
var friend = new Person();
Person.prototype.sayHi = function(){
    alert("Hi");
};
friend.sayHi();   //"Hi"
/*
* 以上代码先创建了Person的一个实例，并将其保存在friend中。然后，下一条语句在Person.prototype中添加一个方法sayHi()。
* 即使friend实例是在添加新方法之前创建的，但它仍然可以访问这个新方法。其原因可以归结为实例与原型之间的松散连接关系
* 当我们调用friend.sayHi()时，首先会在实例中搜索名为sayHi的属性，在没找到的情况下，会继续搜索原型。
* 因为实例与原型之间的连接只不过是一个指针，而非一个副本，因此就可以在原型中找到新的sayHi属性并返回保存在那里的函数
 */
/*
* 尽管可以随时为原型添加属性和方法，并且修改能够立即在所有对象实例中反映出来，但如果是重写整个原型对象，那么情况就不一样了
* 我们知道，调用构造函数时会为实例添加一个指向最初原型的[[Prototype]]指针，而把原型修改为另外一个对象就等于切断了构造函数
* 与最初原型之间的联系。
* 请记住：实例中的指针仅指向原型，而不指向构造函数。看下面的例子：
 */
function Person1(){
}
var friend1 = new Person1();
//先调用构造函数然后在把原型修改为另外一个对象时，会为实例添加一个指向最初原型的[[Prototype]]指针
Person1.prototype = {
    constructor : Person1,
    name : "Bob",
    age : 30,
    job : "Doctor",
    sayName : function(){
        alert(this.name);
    }
};

friend1.sayName();   //error

/*
* 在这个例子中，我们先创建了Person1的一个实例，然后又重写了其原型对象。
* 先调用构造函数，然后再把原型修改为另外一个对象时，会为实例添加一个指向最初原型的[[Prototype]]指针
* 这样调用friend.sayName()时发生了错误，因为friend指向的最初原型中不包含以该名字命名的属性，不包含sayName()方法、name、age、job等，这些都在新原型对象中
* 重写原型对象切断了现有原型与任何之前已经存在的对象实例之间的联系；之前已存在的对象实例引用的仍然是最初的原型。
 */
//若改为如下就可以正常调用sayName（）方法了
function Person1(){
}

Person1.prototype = {
    constructor : Person1,
    name : "Bob",
    age : 30,
    job : "Doctor",
    sayName : function(){
        alert(this.name);
    }
};

var friend1 = new Person1();
friend1.sayName();   //Bob
