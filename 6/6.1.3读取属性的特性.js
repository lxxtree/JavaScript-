/*
* 使用ECMAScript 5的Object.getOwnPropertyDescriptor()方法，可以取得给定属性的描述符。
* 这个方法接收两个参数：属性所在的对象和要读取其描述符的属性名称
* 返回值是一个对象，如果是访问器属性，这个对象的属性有configurable、enumberable、get和set；
* 如果是数据属性，这个对象的属性有configurable、enumerable、writable和value
 */
var book = {};
Object.defineProperties(book,{
   _year: {
       value:2004
   } ,
    edition: {
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
var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
alert(descriptor.value);
alert(descriptor.configurable);
alert(descriptor.get);
alert(descriptor.enumerable);


var descriptor = Object.getOwnPropertyDescriptor(book,"year");
alert(descriptor.value);
alert(descriptor.configurable);
alert(descriptor.enumerable);
alert(descriptor.get);
alert(typeof descriptor.set);

//注意：get和set分别是指向getter函数和setter函数的指针
