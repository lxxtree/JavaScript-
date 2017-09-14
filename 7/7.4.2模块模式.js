/*
* 前面的模式是用于为自定义类型创建私有变量和特权方法的。
* 而道格拉斯所说的模块模式（module pattern）则是为单例创建私有变量和特权方法。
* 所谓单例（singleton），指的就是只有一个实例的对象。
* 按照惯例，JavaScript是以对象字面量的方式来创建单例对象。
 */
var singleton = {
    name : value,
    method : function(){
        //这里是方法的代码
    }
};

//模块模式通过为单例添加私有变量和特权方法能够使其得到增强，其语法形式如下：
var singleton = function(){

    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction(){
        return false;
    }

    //特权/公有方法和属性
    return {

        publicProperty: true,

        publicMethod : function(){
            privateVariable++;
            return privateFunction();
        }
    };
}();
/*
* 这个模块模式使用了一个返回对象的匿名函数。在这个匿名函数内部，首先定义了私有变量和函数。
* 然后，将一个对象字面量作为函数的值返回。返回的对象字面量中只包含可以公开的属性和方法。
* 由于这个对象是在匿名函数内部定义的，因此它的公有方法有权访问私有变量和函数。
* 从本质上来讲，这个对象字面量定义的是单例的公共接口。
* 这种模式在需要对单例进行某些初始化，同时又需要维护其私有变量时是非常有用的，例如：
 */
var application = function(){

    //私有变量和函数
    var components = new Array();

    //初始化
    components.push(new BaseComponent());

    //公共
    return {
        getComponentCount : function(){
            return components.length;
        },

        registerComponent : function(component){
            if(typeof component == "object"){
                components.push(component);
            }
        }
    };
}();
/*
* 在Web应用程序中，经常需要使用一个单例来管理应用程序级的信息。这个简单的例子创建了一个用于管理组件的application对象。
* 在创建这个对象的过程中，首先声明了一个私有的componnents数组，并向数组中添加了一个BaseComponent的新实例（在这里不需要
* 关心BaseComponent的代码，我们只是用它来展示初始化操作）。
* 而返回对象的getComponentCount()和registerComponent()方法，都是有权访问数组componnents的特权方法。
* 前者只是返回已注册的组件数目，后者用于注册新组件。
 */
/*
* 简而言之，如果必须创建一个对象并以某些数据对其初始化，同时还要公开一些能够访问这些私有数据的方法，那么就可以使用模块模式。
* 以这种模块创建的每一个单例都是object的实例，因为最终要通过一个对象字面量来表示它。
* 事实上，这也没什么；毕竟，单例通常都是作为全局对象存在的，我们不会将它传递给一个函数。
* 因此，也就没什么必要使用instanceof操作符来检查其对象类型了。
 */
