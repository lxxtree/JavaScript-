/*
* 数据属相包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有4个描述其行为的特性
* 1、[[Configurable]]:表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。
*  直接在对象上定义属性，它们的这个特性默认值为true
* 2、[[Enumerable]]:表示能否通过for-in循环返回属性。直接在对象上定义属性，它们的这个特性默认值为true
* 3、[[Writeable]]:表示能否修改属性的值。直接在对象上定义属性，它们的这个特性默认值为true
* 4、[[Value]]:包含这个属性的数据值。读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。这个特性
*   的默认值为undefined.
 */

var person = {
    name:"Nicholas",
    age:29,
    job:"Software Engineer",

    sayName:function(){
        alert(this.name);
    }
};
/*上面的例子直接在对象上定义属性，它们的[[Configurable]]、[[Enumerable]]和[[Writable]]特性都被设置为true，
* 而[[Value]]特性被设置为指定的值，如下面的例子
* 这里创建了一个name的属性，为它指定的值是"Herry"。也就是说，[[Value]]特性将被设置为"Herry"
* 而这个值的任何修改都将反应在这个位置
 */
var person1 = {
    name :"Herry"
};
/*
* 要修改默认的属性，必须使用ECMAScript5的Object.defineProperty()方法。这个方法接收三个参数：属性所在对象、属性的名字和
* 一个描述符对象。其中，描述符(descriptor)对象的属性必须是configurable、enumerable、writable和value，设置其中的一个或
* 者多个值，可以修改对应的特性值。
 */
//下面的例子创建了一个名为name的属性，它的值"Nichoals"是只读的，属性值不能修改
var person2 = {};
Object.defineProperty(person2,"name",{
    writable:false,
    value:"Nicholas"
});
alert(person2.name);
person2.name = "Greg";
alert(person2.name);

//类似的规则也适用于不可配置的属性，
var person3 = {};
Object.defineProperty(person3,"name",{
   configurable:false,
    value:"Chanller"
});
//alert(person3.name);
//delete person.name;
//alert(person3.name);

//把configurable设置为false，表示不能从对象中删除，而且一旦把属性定义为不可配置的，就不能把它再变回课配置了。
//下面例子会抛出错误
Object.defineProperty(person3,"name",{
    configurable:true,
    value:"Chanller"
});
alert(person3.name);
delete person.name;
alert(person3.name);
// 在调用Object.defineProperty()方法创建一个新的属性时，如果不指定，configurable、enumerable和writable特性的默认值都是false，
