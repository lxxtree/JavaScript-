/*
* 通过私有作用域中定义私有变量或函数，同样也可以创建特权方法，其基本模式如下所示。
 */
(function(){

    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction(){
        return false;
    }

    //构造函数
    MyObject = function(){
    };

    //公有方法
    MyObject.prototype.publicMethod = function(){
        privateVariable++;
        return privateFunction();
    };

})();
/*
* 这个模式创建了一个私有作用域，并在其中封装了一个构造函数及相应的方法。
* 在私有作用域中，首先定义了私有变量和私有函数，然后又定义了构造函数及其公有方法。
* 公有方法是在原型上定义的，这一点体现了典型的原型模式。
* 需要注意的是，这个模式在定义构造函数时并没有使用函数声明，而是使用了函数表达式。
* 函数声明只能创建局部函数，但那并不是我们想要的。
* 出于同样的原因，我们也没有在声明MyObject时使用var关键字。
* 记住：初始化未经声明的变量，总是会创建一个全局变量。
* 因此，MyObject就成了一个全局变量，能够在私有作用域之外被访问到。
* 但也要知道，在严格模式下给未经声明的变量赋值会导致错误。
 */
/*
* 这个模式与在构造函数中定义特权方法的主要区别，就在于私有变量和函数是由实例共享的。
* 由于特权方法是在原型上定义的，因此所有实例都使用同一个函数。
* 而这个特权方法，作为一个闭包，总是保存着对包含作用域的引用。来看一看下面的代码。
 */
(function(){

    var name = "";

    Person = function(value){
        name = value;
    };

    Person.prototype.getName = function(){
        return name;
    };

    Person.prototype.setName = function(value){
        name = value;
    };
})();

var person1 = new Person("Nicholas");
alert(person1.getName());     //"Nicholas"
person1.setName("Greg");
alert(person1.getName());     //"Greg"

var person2 = new Person("Michael");
alert(person1.getName());      //"Michael"
alert(person2.getName());      //"Michael"
/*
* 这个例子中的Person构造函数与getName()和setName()方法一样，都有权访问私有变量name。
* 在这种模式下，变量name就变成了一个静态的、由所有实例共享的属性。
* 也就是说，在一个实例上调用setName()会影响所有实例。
* 而调用setName()或新建一个Person实例都会赋予name属性一个新值。
* 结果就是所有实例都会返回相同的值。
 */
/*
* 以这种方式创建静态私有变量会因为使用原型而增进代码复用，但每个实例都没有自己的私有变量。
* 到底是使用实例变量，还是静态私有变量，最终还是要视你的具体要求而定。
 */
/*
* 多查找作用域链中的一个层次，就会在一定程度上影响查找速度。而这正是使用闭包和私有变量的一个显明不足之处。
 */
