/*
* 有其他OO语言经验的开发人员在看到独立的构造函数和原型时，很可能会感到非常困惑。
* 动态原型模式正是致力于解决这个问题的一个方案，它把所有信息都封装在了构造函数中，而通过在构造函数中初始化原型（仅在必要情况下）,
* 又保持了同时使用构造函数和原型的优点。换句话说，可以通过检查某个应该存在的方法是否有效，来决定是否初始化。看下面例子
 */
function Person(name,age,job){
    //属性
    this.name = name;
    this.age = age;
    this.job = job;

    //方法
  if(typeof Person.prototype.sayName != "function"){
      Person.prototype.sayName = function(){
           alert(this.name);
       };
   }
}

var friend = new Person("Nicholas",29,"Software Engineer");
friend.sayName();
/*
* 注意if部分的代码，这里只在sayNameB()方法不存在的情况下，才会将它添加到原型中。这段代码只会在初次调用构造函数时才会执行。
* 此后，原型已完成初始化，不需要再做什么修改了。不过要记住，对原型的修改，能够立即在所有实例中得到反映。
* 因此，这种方法确实可以说非常完美。
* 其中，if语句检查的可以是初始化之后应该存在的任何属性或者方法—不必用一大堆if语句检查每个属性和方法，只要检查其中一个即可。
* 对于采用这种模式创建的对象，还可以使用instanceof操作符确定它的类型
*
 */
