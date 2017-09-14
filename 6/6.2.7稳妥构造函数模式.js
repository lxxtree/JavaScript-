//寄生构造函数模式的例子
/*function Person(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    };
    return o;
}

var friend = new Person("Nicholas",29,"Software Engineer");
friend.sayName();   //"Nicholas"
*/

/*
* 道格拉斯·克罗克福德发明了JavaScript中的稳妥对象（durable objects）这个概念。
* 所谓稳妥对象，指的是没有公共属性，而且其方法也不引用this对象。
* 稳妥对象最适合在一些安全的环境中（这些环境中会禁止使用this和new），或者在防止数据被其他应用程序（如Mashup程序）改动时使用。
* 稳妥构造函数遵循与寄生构造函数类似的模式，但有两点不同：
* 一是新创建对象的实例方法不引用this；
* 二是不使用new操作符调用构造函数。
* 按照稳妥构造函数的要求，可以将前面寄生构造函数构造重写如下：
*/
function Person(name,age,job){
    //创建要返回的对象
    var o = new Object();

    //可以在这里定义私有变量和函数

    //添加方法
    o.sayName = function(){
        alert(name);
    };

    //返回对象
    return o;
}
var friend = Person('Nicholas',29,"Software Engineer");
//friend.sayName();    //"Nicholas"
alert(friend.age);

/*
* 注意，在以这种模式创建的对象中，除了使用sayName()方法外，没有其他方法访问name的值。
* 这样，变量friend中保存的是一个稳妥对象，而除了调用sayName()方法外，没有别的方法访问其他数据成员。
* 即使有其他代码会给这个对象添加方法或数据成员，但也不可能有别的方法访问传入到构造函数中的原始数据。
* 稳妥构造函数模式提供的这种安全性，使得它非常适合在某些安全执行环境—例如，ADsafe和Caja提供的环境下使用
 */
