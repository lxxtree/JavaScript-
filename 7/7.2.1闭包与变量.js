/*
* 作用域链的这种配置机制引出了一个值得注意的副作用，即闭包只能取得包含函数中任何变量的最后一个值。
* 别忘了闭包所保存的是整个变量对象，而不是某个特殊的变量。
 */
function createFunctions1(){
    var result1 = new Array();

    for(var i=0; i< 10; i++){
        result1[i] = function(){
            return i;
        };
    }
    return result1;
}
/*
* 这个函数会返回一个函数数组。表面上看，似乎每个函数都应该返自己的索引值，即位置0的函数返回0，位置1的函数返回1，以此类推。
* 但实际上，每个函数都返回10。因为每个函数的作用域链中都保存着createFunctions()函数的活动对象，所以它们引用的都是同一个变量i。
* 当createFucntions()函数返回后，变量i的值是10，此时每个函数都引用着保存变量i的同一个变量对象，所以在每个函数内部i的值都是10.。
 */

//改进版
function createFunctions2(){
    var result2 = new Array();

    for(var i=0; i< 10; i++){
        result2[i] = function(num){
            return function(){
                return num;
            };
        }(i);
    }

    return result2;
}
/*
* 在重写了前面的createFunctions()函数后，每个函数就会返回各自不同的索引值了。在这个版本中，我们没有直接把闭包赋值给数组，
* 而是定义了一个匿名函数，并将立即执行该匿名函数的结果赋给数组。
* 这里的匿名函数有一个参数num，也就是最终的函数要返回的值。在调用每个匿名函数时，我们传入了变量i。
* 由于函数参数是按值传递的，所以就会将变量i的当前值复制给参数num。
* 而在这个匿名函数内部，又创建并返回了一个访问num的闭包。
* 这样一来，result数组中的每个函数都有自己num变量的一个副本，因此就可以返回各自不同的数值了。
 */

var r1 = createFunctions1();
alert(r1[0]);   //function (){return i;}
alert(r1[0]()); //10
//alert(r1[10]);  //undefined
//alert(r1[10]()); //报错

var r2 = createFunctions2();
alert(r2[0]);     //function (){ return num;}
alert(r2[0]);    //undefined
alert(r2[10]());    //报错
