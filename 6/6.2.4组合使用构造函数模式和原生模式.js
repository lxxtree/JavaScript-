/*
* 创建自定义类型的最常见方式，就是组合使用构造函数模式和原型模式。
* 构造函数模式用于定义实例属性，原型模式用于定义方法和共享的属性
* 结果，每个实例都会有自己的一份实例属性的副本，但同时又共享着对方法的引用，最大限度地节省了内存。
* 另外，这种混成模型还支持向构造函数传递参数；可谓是集两种模式之长
 */
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelly","Court"];
}

Person.prototype = {
    constructor : Person,
    sayName : function(){
        alert(this.name);
    }
};

var person1 = new Person("Nicholas",29,"Software Engineer");
var person2 = new Person("Greg",27,"Doctor");

person1.friends.push("Van");
alert(person1.friends);     //"Shelly,Court,Van"
alert(person2.friends);     //"Shelly,Court"
alert(person1.friends === person2.friends);    //false
alert(person1.sayName === person2.sayName);        //true
