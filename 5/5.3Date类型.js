var now = new Date();
alert(now);
//Date.parse()方法接收一个表示日期的字符串参数，然后尝试根据这个字符串返回相应日期的毫秒数
var someDate = new Date(Date.parse("May 25,2014"));
alert(someDate);

//直接将表示日期的字符串传给Date构造函数，也会在后台调用Date.parse()
var someDate1 = new Date("May 25,2016");
alert(someDate1);

/*Date.UTC()也返回毫秒数，Date.UTC()的参数分别是年份、基于0的月份（一月是0，二月是1，以此类推）、月中的天数（1~31）、
* 小时数（0~23）、分钟、秒以及毫秒数。如果没有提供月中的天数，则假设天数为1；如果省略其他参数，则统统假设为0
*/
var y2k = new Date(Date.UTC(2000, 0));
var allFives = new Date(Date.UTC(2005, 4, 4, 5, 55, 55));
alert(y2k);
alert(allFives);

var y2k1 = new Date(2000, 0);
var allFives1 = new Date(2005, 4, 5, 17, 55, 55);
alert(y2k1);
alert(allFives1);

//取得开始时间
var start = Date.now();
alert(start);
