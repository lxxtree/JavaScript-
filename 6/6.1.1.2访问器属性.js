/*
* 访问器属性不包含数据值；它们包含一对getter和setter函数（不过，这两个函数都不是必需的）
* 在读取访问器属性时，会调用getter函数，这个函数负责返回有效的值
* 在写入访问器属性时，会调用setter函数并传入新值，这个函数负责决定如何处理函数。访问器属性有如下4个特性
* 1、[[Configurable]]：表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性。
*    对于直接在对象上定义的属性，这个特性的默认值为true.
* 2、[[Enumerable]]：表示能否通过for-in循环返回属性。对于直接在对象上定义的属性，这个特性的默认值为true.
* 3、[[Get]]：在读取属性时调用的函数。默认值为undefined。
* 4、[[Set]]：在写入属性时调用的函数。默认值为undefined。
* 访问器属性不能直接定义，必须使用Object.defineProperty()来定义,例子如下：
 */
var book = {
    _year: 2004,
    edition: 1
};
Object.defineProperty(book,"year",{
    get: function(){
        return this._year;
    },
    set: function(newValue){
        if(newValue > 2004){
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});
book.year = 2005;
alert(book.edition);
delete book.year;
alert(book.year);
/*上述的例子，因为Object.defineProperty()方法创建了一个新属性“year”，因为不指定，configurable的默认属性为false，所以不能从
* book对象中删除属性“year”
*/
/*
* 在不支持Object.defineProperty()方法的浏览器中不能修改[[Configurable]]和[[Enumerable]]
 */
