/*indexOf()和lastIndexOf()，这两个方法都是从一个字符串中搜索给定的子字符串，然后返回子字符串的位置（若没有找到该子字符串，则返回-1）
* indexOf()方法从字符串的开头向后搜索子字符串，而lastIndexOf()方法是从子字符串的末尾向前搜索子字符串
* 这2个方法都接收两个参数：要查找的项和（可选的）表示查找起点位置的索引
* 在比较第一个参数与数组中的每一项时，会使用全等操作符，也就是说，要求查找的项必须严格相等（就像使用===一样）
 */
var stringValue = "hello world";
alert(stringValue.indexOf("o"));
alert(stringValue.lastIndexOf("o"));
alert(stringValue.indexOf("o",6));
alert(stringValue.lastIndexOf("o",6));

var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");
while(pos > -1){
    positions.push(pos);
    pos = stringValue.indexOf("e",pos+1);
}
alert(positions);
