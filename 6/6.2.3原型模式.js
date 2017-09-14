/*
* 我们创建的每个函数都有一个prototype（原型）属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定
* 类型的所有实例共享的属性和方法
* 如果按照字面意思来理解，那么prototype就是通过调用构造函数而创建的那个对象实例的原型对象
* 使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法
* 换句话说，不必在构造函数中定义对象实例的信息，而是可以将这些信息直接添加到原型对象中去
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
person1.sayName();   //"Nicholas"

var person2 = new Person();
person2.sayName(); //"Nicholas"

alert(person1.sayName == person2.sayName); //true

/*
* 上面的例子中，我们将sayName()方法和所有属性直接添加到了Person的Prototype属性中，构造函数变成了空函数。
* 即使如此，也仍然可以通过调用构造函数来创建对象，而且新对象还会具有相同的属性和方法。
* 但与构造函数不同的是，新对象的这些属性和方法是由所有实例共享的
* 换句话说，person1和person2访问的都是同一组属性和同一个sayName()函数
 */
