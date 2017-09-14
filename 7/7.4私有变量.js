/*
* 严格来说，JavaScript中没有私有成员的概念；所有对象的属性都是公有的。不过，倒是有一个私有变量的概念。
* 任何在函数中定义的变量，都可以认为是私有变量，因为不能在函数外部访问这些变量。
* 私有变量包括函数的参数、局部变量和在函数内部定义的其他函数。来看下面的例子：
 */
function add(num1,num2){
    var sum = num1 + num2;
    return sum;
}
/*
* 在函数内部，有3个私有变量：num、num2、和sum。在函数内部可以访问这几个变量，但在函数外部则不能访问它们。
* 如果在这个函数内部创建一个闭包，那么闭包通过自己的作用域链也可以访问这些变量。
* 而利用这一点，就可以创建用于访问私有变量的公有方法。
 */
/*
* 我们把有权访问私有变量和私有函数的公有方法称为特权方法（privileged method）.
* 有两种在对象上创建特权方法的方式。第一种在构造函数中定义特权方法，基本如下：
 */
function MyObject(){

    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction(){
        return false;
    }

    //特权方法
    this.publicMethod = function(){
        privateVariable++;
        return privateFunction();
    };
}
/*
* 这个模式在构造函数内部定义了所有私有变量和函数。然后，又继续创建了能够访问这些私有成员的特权方法。
* 能够在构造函数中定义特权方法，是因为特权方法作为闭包有权访问在构造函数中定义的所有变量和函数。
* 对这个例子而言，变量privateVariable和函数privateFunction()只能通过特权方法pubilicMethod()来访问。
* 在创建MyObject的实例后，除了使用publicMethod()这一个途径外，没有任何办法可以直接访问privateVariable和privateFunction()。dw
 */
//利用私有和特权成员，可以隐藏那些不应该被直接修改的数据，例如：
function Person(name){

    this.getName = function(){
        return name;
    };

    this.setName = function(value){
        name = value;
    };
}

var person = new Person("Nicholas");
alert(person.getName());        //"Nicholas"
person.setName("Greg");
alert(person.getName());        //"Greg"
/*
* 以上代码的构造函数中定义了两个特权方法：getName()和setName()。
* 这两个方法都可以在构造函数外部使用，而且都有权访问私有变量name。
* 但在Person构造函数外部，没有任何办法访问name。
* 由于这两个方法是在构造函数内部定义的，它们作为闭包能够通过作用域链访问name。
* 私有变量name在Person的每一个实例中都不相同，因为每次调用构造函数都会重新创建这两个方法。
* 不过，在构造中定义特权方法也有一个缺点，那就是你必须使用构造函数来达到这个目的。
* 在第6章曾经讨论过，构造函数模式的缺点是针对每个实例都会创建同样一组新方法，而使用静态私有变量来实现特权方法就可以避免这个问题。
 */
