/*
* 原型模式的重要性不仅体现在创建自定义类型方面，就连所有原生的引用类型，都是采用这种模式创建的。
* 所有原生引用类型（Object、Array、String，等等）都在其构造函数的原型上定义了方法。
* 例如，在Array.prototype中可以找到sort()方法，而在String.prototype中可以找到substring（）方法，如下所示
 */
alert(typeof Array.prototype.sort);     //"function"
alert(typeof String.prototype.substring);   //"function"
/*
* 通过原生对象的原型，不仅可以取得所有默认方法的引用，而且也可以定义新方法。
* 可以像修改自定义对象的原型一样修改原生对象的原型，因此可以随时添加方法。
* 下面的代码就给基本包装类型String添加了一个名为startsWith()的方法
 */
String.prototype.startsWith = function(text){
    return  this.indexOf(text) == 0;
};

var msg = "Hello world!";
alert(msg.startsWith("Hello"));   //false
/*
* 这里新定义的startsWith()方法会在传入的文本位于一个字符串开始时返回true。
* 既然方法被添加给了String.prototype，那么当前环境中的所有字符串就都可以调用它。
* 由于msg是字符串，而且后台会调用String基本包装函数创建这个字符串，因此通过msg就可以调用startsWith（）方法了
 */
/*
* 尽管可以这样做，但是不推荐在产品化的程序中修改原生对象的原型。
* 如果因某个实现中缺少某个方法，就在原生对象的原型中添加这个方法，那么当在另一个支持该方法的实现中运行代码时，就可能会导致命名冲突。
* 而且这样做也可能会意外地重写原生方法
*/

