/*
* 前面的例子中每添加一个属性和方法就要敲一遍Person.protottype。为减少不必要的输入，也为了从视觉上更好地封装原型的功能，
* 更常见的做法是用一个包含所有属性和方法的对象字面量来重写整个原型对象，如下面的例子
 */
function Person(){
}

Person.prototype = {
    name : "Bob",
    age : 30,
    job : "Software Engineer",
    sayName : function(){
        alert(this.name);
    }
};
/*
* 在上面代码中，我们将Person.prototype设置为等于一个以对象字面量形式创建的新对象
* 最终结果相同，但是有一个例外：constructor属性不再指向Person了。
* 前面介绍过，每创建一个函数，就会同时创建它的prototype对象，这个对象也会自动获得constructor属性。
* 而我们在这里使用的语法，本质上完全重写了默认的prototype对象，因此constructor属性也就变成了新对象的construct对象（指
* 向Object构造函数），不再指向Person函数。
* 此时，尽管instanceof操作符还能返回正确的结果，但通过constructor已经无法确定对象的类型了
 */
var friend = new Person();

alert(friend instanceof Person);
alert(friend instanceof Object);
alert(friend.constructor == Person);
alert(friend.constructor == Object);
/*
* 在此，用instanceof操作符测试Object和Person仍然返回true，但constructor属性则等于Object而不等于Person了。
* 如果constructor的值真的很重要，可以像下面这样特意将它设置回适当的值
 */
function Person(){
}
Person.prototype = {
    constructor : Person,
    name : "Bob",
    age: 29,
    job:"SoftWare Engineer",
    sayName:function(){
        alert(this.name);
    }
};

/*
* 注意，以这种方式重设constructor属性会导致它的[[Enumerable]]特性被设置为true。
*/
 var keys = Object.keys(Person.prototype);
 alert(keys);   //"constructor,name,age,job,sayName"


/*
* 默认情况下，原生的constructor属性是不可枚举的，因此如果你使用兼容ECMAScript 5的JavaScript引擎，
* 可以试一试Object.defineProperty().
 */
function Person1(){
}
Person.prototype = {
    name : "Bob",
    age: 29,
    job:"SoftWare Engineer",
    sayName:function(){
        alert(this.name);
    }
};
//重设构造函数，只适用于ECMAScript 5兼容的浏览器
Object.defineProperty(Person1.prototype,"constructor",{
    enumerable :false,
    value:Person1
});
