/*
* Math.random()方法返回大于等于0小于1的一个随机数。
 */
//选择一个1到10之间的数
var num = Math.floor(Math.random() * 10 + 1);
alert(num);

//选择一个2到10之间的值
var num1 = Math.floor(Math.random() * 9 + 2);
alert(num1);

//根据上面的规律通过函数计算值，方便从数组中随机取出一项
function selectFrom(lowerValue,upperValue){
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

var colors = ["red","green","blue","yellow","black","purple","brown"];
var color = colors[selectFrom(0,colors.length-1)];
alert(color);
