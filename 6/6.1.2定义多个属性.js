/*
* ECMAScript 5定义了一个Object.defineProperties()方法，利用这个方法可以通过描述符一次定义多个属性
* 这个方法接收两个对象的参数：第一个对象是要添加和修改其属性的对象，第二个对象的属性与第一个对象中要添加或修改的属性一一对应
 */
var book = {};
Object.defineProperties(book,{
   _year: {
       writable: true,
       value:2004
   },
    edition: {
       writable: true,
        value:1
    },
    year: {
       get: function(){
           return this._year;
       },
        set: function(newValue){
            if(newValue > 2004){
             this._year = newValue;
             this.edition += newValue - 2004;
            }
        }
    }
});
delete book.year;
alert(book.year);
book.year = 2017;
alert(book.edition);
/*上述的例子，因为Object.defineProperty()方法创建了一个新属性“year”，因为不指定，configurable的默认属性为false，所以不能从
 * book对象中删除属性“year”
 */
