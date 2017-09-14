/*
* min()和max()方法用于确定一组数值中的最小值和最大值，这两个方法都可以接收任意多个数值参数
 */
var max = Math.max(3,54,32,16);
alert(max);
var min = Math.min(3,54,32,16);
alert(min);

var value = [1,2,3,4,5,6,7,8];
var max1 = Math.max.apply(Math,value);
alert(max1);
