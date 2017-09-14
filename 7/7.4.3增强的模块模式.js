/*
* 有人进一步改进了模块模式，即在返回对象之前加入对其增强的代码。
* 这种增强的模块模式适合那些单例必须是某种类型的实例，同时还必须添加某些属性和（或）方法对其加以增强的情况。
* 来看下面的例子。
 */
var singleton = function(){

    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction(){
        return false;
    }

    //创建对象
    var object = new CustomType();

    //添加特权/公有属性和方法
    object.publicProperty = true;

    object.publicMethod = function(){
        privateVariable++;
        return privateFunction();
    };

    //返回这个对象
    return object;
}();

/*
* 如果前面演示模块模式的例子中application对象必须是BaseComponent的实例，那么就可以使用以下代码。
 */
var application = function(){

    //私有变量和函数
    var components = new Array();

    //初始化
    components.push(new BaseComponent());

    //创建application的一个局部副本
    var app = new BaseComponent();

    //公共接口
    app.getComponentCount = function(){
        return components.length;
    };

    app.registerComponent = function(component){
        if(typeof component == "object"){
            components.push(component);
        }
    };

    //返回这个副本
    return app;
}();
/*
* 在这个重写后的应用程序（application）单例中，首先也是像前面例子中一样定义了私有变量。
* 主要不同之处在于命名变量app的创建过程，因为它必须是BaseComponent的实例。
* 这个实例实际上是application对象的局部变量版。
* 此后，我们又为app对象添加了能够访问私有变量的公有方法。
* 最后一步是返回app对象，结果仍然是将它赋值给全局变量application。
 */
