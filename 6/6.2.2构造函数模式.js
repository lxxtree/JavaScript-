/*
* 附之前工厂模式的例子
* function createPerson(name,age,job){
 *    var o = new Object();
 *   o.name = name;
 *  o.age = age;
 *   o.job = job;
 *  o.sayNmae = function(){
 *     alert(this.name);
 *   };
 *  return o;
 * }
*/
/*
* ECMAScript中的函数可用来创建特定类型的对象。像Object和Array这样的原生构造函数，在运行时会自动出现在执行环境中。
* 也可以创建自定义的构造函数，从而定义自定义对象类型的属性和方法。
* 可以使用构造函数模式将之前的工厂模式的例子重写
 */
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
 // 注：按照惯例，构造函数始终都应该以一个大写字母开头，而非构造函数则应该以一个小写字母开头
/*
* 在上述的例子中，Person()函数取代了createPerson()函数。Person()中的代码除了与createPerson()中相同之外，还有以下不同的地方
* 1、没有显式地创建对象；
* 2、直接将属性和方法赋给了this对象
* 3、没有return语句
 */
/*
* 要创建Person的新实例，必须使用new操作符。以这种方式调用构造结构函数实际上会经历以下4个步骤
* 1、创建一个新对象
* 2、将构造函数的作用域赋给新对象（因此this就指向了这个新对象）；
* 3、执行构造函数中的代码（为这个新对象添加属性）
* 4、返回新对象
 */
