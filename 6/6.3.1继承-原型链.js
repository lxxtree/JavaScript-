/*
* 许多OO语言都支持两种继承方式：接口继承和实现继承。
* 接口继承只继承方法签名，而实现继承则继承实际的方法。如前所述，由于函数没有签名，在ESMAScript中无法实现接口继承。
* ECMAScript只支持实现继承，而且其实现继承主要是依靠原型链来实现的。
 */
/*
* ECMAScript中描述了原型链的概念，并将原型链作为实现继承的主要方法。
* 其基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。
* 简单回顾下构造函数、原型和实例的关系：
* 每一个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。
* 那么，假如我们让原型对象等于另一个类型的实例，结果会怎么样呢？
* 显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。
* 假如另一个原型又是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实例与原型的链条。
* 这就是所谓原型链的基本概念。
 */
//实现原型链有一种基本模式，其代码大致如下：
function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};

function SubType(){
    this.subproperty = false;
}

SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function(){
    return this.subproperty;
};

var instance = new SubType();
alert(instance.getSuperValue());       //true
/*
* 以上代码定义了两个类型：SupetType和SubType。每个类型分别有一个属性和一个方法。
* 它们的主要区别是SubType继承了SupperType，而继承是通过创建SuperType的实例，并将该实例赋给SubType.prototype实现的
* 实现的本质是重写原型对象，代之以一个新类型的实例。
* 还换句话说，原来存在于SuperType的实例中的所有属性和方法，现在也存在于SubType。prototype中了。
* 在确立了继承关系后，我们给SubType。prototype添加了一个方法，这样就在继承了SuperType的属性和方法的基础上又添加了一个新方法。
 */
/*
* 在上面的代码中，我们没有使用SubType默认提供的原型，而是给它换了一个新原型；
* 这个新原型就是SuperType的实例。于是，新原型不仅具有作为一个SuperType的实例所拥有的全部属性和方法，而且其内部还有一个指针，指向了SuperType的原型。
* 最终结果就是这样的：instance指向SubType的原型，SubType的原型又指向SuperType的原型。
* getSuperValue()方法仍然还在SuperType.prototype中，但property则位于SubType.prototype中。
* 这是因为property是一个实例属性，而getSuperValue()则是一个原型方法。
* 既然SubType.prototype现在是SuperType的实例，那么property当然就位于该实例中了。
* 此外，要注意instance.constructor现在指向的是SuperType，这是因为原来SubType.prototype中的constructor被重写了的缘故。
 */
/*
* 通过实现原型链，本质上扩展了本章前面介绍的原型搜索机制。
* 读者大概还记得，当以读取模式访问一个实例属性时，首先会在实例中搜索该属性。如果没有找到该属性，则会继续搜索实例的原型。
* 在通过原型链实现继承的情况下，搜索过程就得以沿着原型链继续向上。
* 就拿上面的例子来说，调用instance.getSuperValue()会经历三个搜索步骤：
* 1）搜索实例
* 2）搜索SubType.prototype；
* 3）搜索SuperType.prototype，最后一步才会找到该方法
* 在找不到属性或方法的情况下，搜索过程总是要一环一环地前行到原型链末端才会停下来
 */
