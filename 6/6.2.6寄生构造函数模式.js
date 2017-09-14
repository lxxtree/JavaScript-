/*
* 通常，在前述的几种模式都不适用的情况下，可以使用寄生（parasitic）构造函数模式。
* 这种模式的基本思想是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后再返回新创建的对象；
* 但从表面上，这个函数又很像典型的构造函数，如下例子
 */
function Person(name,age,job){
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
/*
* 在这个例子中，Person函数创建了一个新对象，并以相应的属性和方法初始化该对象，然后又返回了这个对象。
* 除了使用new操作符并把使用的包装函数叫做构造函数外，这个模式跟工厂模式其实一模一样的。
* 构造函数不返回值的情况下，默认会返回新对象实例。而通过在构造函数的末尾添加一个return语句，可以重写调用构造函数时返回的值
 */

/*
* 这个模式在特殊情况下用来为对象创建构造函数。
* 假设我们想创建一个具有额外方法的特殊数组。由于不能直接修改Array构造函数，因此可以使用这个模式
 */
function SpecialArray(){
    //创建数组
    var values = new Array();
    //添加值
    values.push.apply(values,arguments);
    //添加方法
    values.toPipedString = function(){
        return this.join("||");
    };
    return values;
}

var colors = new SpecialArray("green","bulue","red","orange");
alert(colors.toPipedString());    //"green||blue||red||orange



// "

/*
* 关于寄生构造函数模式，有一点需要说明：首先，返回的对象与构造函数或者构造函数的原型属性之间没有关系。
* 也是说，构造函数返回的对象与在构造函数外面创建的对象没有什么不同。
* 为此，不能依赖instanceof操作符来确定对象类型
* 由于存在上述问题，我们建议在可以使用其他模式的情况下，不要使用这种模式
 */
