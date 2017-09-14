/*
*上节构造函数的例子
 function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayNmae = function(){
        alert(this.name);
    };
}
 var person1 = new Person("Nicholas",29,"Software Engineer");
 var person2 = new Person("Greg",27,"Doctor");
*/

/*
* 构造函数的主要问题，就是每个方法都要在每个实例上重新创建一遍。
* 在上面的例子中，person1和person2都有一个名为sayName()的方法，但那两个方法不是同一个Function的实例
* 即alert(person1.sayName == person2.sayName); //false
* 然而，创建两个完成同样任务的Function实例的确没有必要；况且this对象在，根本不用在执行代码前就把函数绑定到特定对象上面
* 可以通过如下方式，把函数定义转移到构造函数外部来解决这个问题
 */
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayNmae = sayName;
}
function sayName(){
    alert(this.name);
}
var person1 = new Person("Nicholas",29,"Software Engineer");
var person2 = new Person("Greg",27,"Doctor");
/*
* 上面的例子中，在构造函数内部，把sayName属性设置成等于全局的sayName函数。
* 由于sayName包含的是一个指向函数的指针，因此person1和person2对象就共享了在全局作用域中定义的同一个sayName()函数
* 在全局作用域中定义的函数实际上只能被某个对象调用，但是如果对象需要定义很多方法，那么就要定义很多个全局函数
* 这样我们自定义的引用类型就丝毫没有封装性可言了，好在，这些问题可以通过使用原型模式来解决
 */
