/*
* ECMAScript虽然没有指出如何直接访问Global对象，但是Web浏览器都是将这个全局对象作为window对象的一部分加以实现的。
* 因此，在全局作用域中声明的所有变量和函数，就都成为了window对象的属性
 */
var color = "red";
function sayColor(){
    alert(window.color);
}
window.sayColor();
