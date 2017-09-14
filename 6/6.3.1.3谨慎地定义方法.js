/*
* 子类型有时候需要覆盖超类型中的某个方法，或者需要添加超类型中不存在的某个方法。
* 不不管怎样，给原类型添加方法的代码一定要放在替换原型的语句之后。看下面例子
 */
function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};

function SubType(){
    this.subproperty = false;
}

//继承了SuperType
SubType.prototype = new SuperType();
//添加新方法
SubType.prototype.getSubValue = function(){
    return this.subproperty;
};

//重写超类型中的方法
SubType.prototype.getSuperValue = function(){
    return false;
};

var instance = new SubType();
alert(instance.getSuperValue());    //false

/*
* 以上代码中，方法getSubValue()被添加到了SubType中。
* getSuperValue()方法是原型链中已经存在的一个方法，但重写这个方法会屏蔽原来的那个方法。
* 换句话说，当通过SubType的实例调用getSuperValue()时，调用的就是这个重新定义的方法；
* 但通过SuperType的实例调用getSupetValue()时，还会继续调用原来的那个方法。
* 因为SubType原型是SuperType原型的实例，重写这个getSuperValue()方法，
* 即是在实例SubType原型中增加了一个与SuperType原型中同名的SuperType()方法，
* 但是实例SubType原型和原型SuperType原型中的getSuperValue()不是同一个方法
* 这里要格外注意的是，必须在用SuperType的实例替换原型之后，再定义这两个方法。
 */
/*
* 还有一点需要提醒读者，即在通过原型链实现继承时，不能使用对象字面量创建原型方法。因为这样做就会重写原型，如下面的例子
 */
function SuperType1(){
    this.property1 = true;
}

SuperType1.prototype.getSuperValue1 = function(){
    return this.property1;
};

function SubType1(){
    this.subproperty1 = false ;
}

//继承了SuperType
SubType1.prototype = new SuperType1();

//使用字面量添加新方法，会导致上一行代码无效
SubType1.prototype = {
    getSubValue1 : function(){
        return this.subproperty1;
    },

    someOtherMethod : function(){
        return false;
    }
};

var instance1 = new SubType1();
alert(instance1.getSuperValue1());    //error!
/*
* 以上代码展示了刚刚把SuperType的实例赋值给原型，紧接着又将原型替换成一个对象字面量而导致的问题
* 由于现在的原型包含的是一个Object的实例，而非SuperType的实例，因此我们设想中的原型链已经被切断—SuperType和SubType之间已经没有关系了
 */
