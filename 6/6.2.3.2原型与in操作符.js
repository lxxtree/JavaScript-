/*
* 有两种方式使用in操作符：单独使用和在for-in循环中使用。
* 在单独使用时，in操作符会在通过对象能够访问给定属性时返回true，无论该属性存在于实例中还是原型中。
* 如下面的例子
 */
function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    alert(this.name);
};

var person1 = new Person();
var person2 = new Person();

alert(person1.hasOwnProperty(name));   //false
alert("name" in person1);   //true

person1.name = "Greg";
alert(person1.name);   //"Greg"——来自实例
alert(person1.hasOwnProperty("name"));   //true
alert("name" in person1);  //true

alert(person2.name);   // "Nicholas"——来自原型
alert(person2.hasOwnProperty("name"));   //false
alert("name" in person2);   //true

delete person1.name;
alert(person1.name);    // "Nicholas"——来自原型
alert(person1.hasOwnProperty("name"));   //false
alert("name" in person1);   //true
/*
* 在以上代码执行的整个过程中，name属性要么是直接在对象上访问到的，要么是通过原型访问到的。
* 因此，调用“name” in person1始终都返回true，无论该属性存在于实例中还是存在于原型中。
 */

/*
* 同时使用hasOwnProperty()方法和in操作符，就可以确定该属性到底是存在于对象中，还是存在于原型中
* 下例中由于in操作符只要通过对象能够访问到属性就返回true，hasOwnProperty()只在属性存在于实例中时才返回true，
* 因此只要in操作符返回true而hasOwnProperty()返回false，就可以确定属性时原型中的属性。
 */
function hasPrototypeProterty(object,name){
    return !object.hasOwnProperty(name) && (name in object);

}

function Person1(){
}
Person1.prototype.name = "Rich";
Person1.prototype.age = 24;
Person1.prototype.job = "waitress";
Person1.prototype.sayName = function(){
    alert(this.name);
};

var person3 = new Person1();
  person3.sayName();
alert(hasPrototypeProterty(person3,"name"));   //true

person3.name = "Monica";
alert(hasPrototypeProterty(person3,"name"));   //false

//for-in
/*
* 在使用for-in循环时，返回的是所有能通过对象访问的、可枚举的（enumerated）属性，其中既包括存在于实例中的属性，也包括
* 存在于原型中的属性。
* 屏蔽了原型中不可枚举属性（即将[[Enumerable]]标记为false的属性）的实例属性也会在for-in循环中返回，因为根据规定，所有
* 开发人员定义的属性都是可枚举的
 */
var o = {
    toString :  function(){
        return "My Object";
    }
};
for(var prop in o){
    if(prop == "toString"){
        alert("Found toString");
    }
}
/*
* 当以上代码运行时，应该会显示一个警告框，表明找到了toString()方法。这里的对象o定义了一个名为toString()的方法，该方法
* 屏蔽了原型中（不可枚举）的toString()方法
 */

//Object.keys()
/*
* 要取得对象上所有可枚举的实例属性，可以使用ECMScript 5的Object.keys()方法。这个方法接收一个对象作为参数，返回一个
* 包含所有可枚举属性的字符串数组
 */
function Person2(){
}
Person2.prototype.name = "Shelly";
Person2.prototype.age = 16;
Person2.prototype.job = "student";
Person2.prototype.sayName = function(){
    alert(this.name);
};

var keys = Object.keys(Person2.prototype);
alert(keys);    //"nmae,age,job,sayNmae"

var p1 = new Person2();
p1.name = "Bob";
p1.age = 30;
var p1keys = Object.keys(p1);
alert(p1keys);   //name,age

//Object.getOwnPropertyNames()
/*
* 如果你想要得到所有实例属性，无论它是否可枚举，都可以使用Object.getOwnPropertyNames()方法
* 如下例子
 */
var keys2 = Object.getOwnPropertyNames(Person2.prototype);
alert(keys2);    //"constructor,name,age,job,sayName"

