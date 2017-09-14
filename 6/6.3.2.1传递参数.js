/*
* 相对于原型链而言，借用构造函数有一个很大的优势，即可以在子类型构造函数中向超类型构造函数传递参数。如下例子
 */
function SuperType(name){
    this.name = name;
}

function SubType(){
    //继承了SuperType，同时还传递了参数
    SuperType.call(this,"Nicholas");

    //实例属性
    this.age = 29;
}

var instance = new SubType();
alert(instance.name);        //"Nicho;as"
alert(instance.age);        //29
/*
* 以上代码中的SuperType只接受一个参数name，该参数会直接赋给一个属性。
* 在SubType构造函数内部调用SuperType构造函数时，实际上是为SubType的实例设置了name属性。
* 为了确保SuperType构造函数不会重写子类型的属性，可以在调用超类型构造函数后，再添加应该在子类型中定义的属性。
 */

//借用构造函数的问题
/*
* 如果仅仅是借用构造函数，那么也将无法避免构造函数模式存在的问题：方法都在构造函数中定义，因此函数复用就无从谈起了
* 而且，在超类型的原型中定义的方法，对子类型而言也是不可见的，结果所有类型都只能使用构造函数模式。
* 考虑到这些问题，借用构造函数的技术也是很少单独使用的。
 */
