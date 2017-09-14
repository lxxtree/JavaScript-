//arguments对象
function factorial(num){
    if(num<1){
        return 1;
    }else{
        return num * arguments.callee(num-1);
    }
}
alert(factorial(5));

//this对象
/*
* this引用的是函数执行环境对象，当在网页的全局作用域中调用函数时，this对象引用的就是window
 */
window.color = "red";
var o = {color:"blue"};
function sayColor(){
    alert(this.color);
}
sayColor();

o.sayColor = sayColor;
o.sayColor();

//caller属性
function outer(){
    inner();
}
function inner(){
    alert(inner.caller);
}
outer();

//为了实现更松散的耦合，可通过arguments.callee.caller来访问
function outer1(){
    inner1();
}
function inner1(){
    alert(arguments.callee.caller);
}
outer1();
