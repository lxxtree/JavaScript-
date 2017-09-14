/*
* 由于IE9之前的版本对JScript对象和COM对象使用不同的垃圾收集例程（第4章曾经讨论过），因此闭包在IE的这些版本中会导致一些特殊的问题。
* 具体来说，如果闭包的作用域链中保存着一个HTML元素，那么就意味着该元素将无法被销毁。来看下面的例子。
 */
function assignHander(){
    var element = document.getElementById("someElement");
    element.onclick = function(){
        alert(element.id);
    };
}
/*
* 以上代码创建了一个elment元素事件处理程序的闭包，而这个闭包则又创建了一个循环引用（事件将在第13章讨论）。
* 由于匿名函数保存了一个对assignHandler()的活动对象的引用，因此就会导致无法减少elment的引用数。
* 只要匿名函数存在，elment的引用数至少也是1，因此它所占用的内存就永远不会被回收。
* 不过，这个问题可以通过稍微改写一下代码来解决，如下所示。
 */
function assingnHandler(){
    var element = document.getElementById("someElement");
    var id = element.id;

    element.onclick = function(){
        alert(id);
    };
}
/*
* 在上面的代码中，通过elment.id的一个副本保存在一个变量中，并且在闭包中引用该变量消除了循环引用。
* 但仅仅做到这一步，还是不能解决内存泄露的问题。
* 必须要记住：闭包会引用包含函数的整个活动对象，而其中包含着elment。
* 即使闭包不直接引用elment，包含函数的活动对象中也仍然会保存一个引用。
* 因此，有必要把elment变量设置为null。
* 这样就能够解除对DOM对象的引用，顺利地减少其引用数，确保正常回收其占用的内存。
*/
