function sayName(name){
    alert(name);
}
function sum(num1,num2){
    return num1 + num2;
}
function sayHi(){
    alert("hi");
}
alert(sayName.length);
alert(sum.length);
alert(sayHi.length);

//apply()方法
function sum(num1,num2){
    return num1 + num2;
}
function callSum1(num1,num2){
    return sum.apply(this,arguments);
}
function callSum2(num1,num2){
    return sum.apply(this,[num1,num2]);
}
alert(callSum1(10,10));
alert(callSum2("Joy and ","Chanller"));
alert(callSum2(20,20));

/*call()方法，与apply()方法的作用相同，区别在于接收参数的方式不同。
* 第一个参数this没有变化，变化的是其余参数都是直接传递给函数
* 使用call()方法时，传递给函数的参数必须逐个列举出来。
 */
function callSum3(num1,num2){
    return sum.call(this,num1,num2);
}
alert(callSum3(15,15));

/*
* 传递参数并非apply()和call()真正的用武之地；它们真正强大的地方是能够扩充函数赖以运行的作用域
* 使用call()或者apply()来扩充作用域的最大好处，就是对象不需要与方法有任何耦合关系
 */
window.color = "red";
var o = {color:"blue"};
function sayColor(){
    alert(this.color);
}
sayColor();
sayColor.call(window);
sayColor.call(this);
sayColor.call(o);

//bind()方法，该方法会创建一个函数实例，其this值会被绑定到传给bind()函数的值
window.color = "purple";
var p = {color:"yellow"};
function displayColor(){
    alert(this.color);
}
var objectdisplayColor = displayColor.bind(p);
objectdisplayColor();
