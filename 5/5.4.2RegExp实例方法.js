var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;

var matches = pattern.exec(text);
alert(matches.index);
//input表示应用正则表达式的字符串
alert(matches.input);

/*数组中第一项是与整个模式匹配的字符串，其他项是与模式中的捕获组匹配的字符串（模式中没有捕获组，则该数组只包含一项）
* 数组中的第一项是匹配的整个字符串，第二项包含与第一个捕获组匹配的内容，第三项包含与第二个捕获组匹配的内容
 */
alert(matches[0]);
alert(matches[1]);
alert(matches[2]);

/*
* 对于exec()方法而言，即使在模式中设置了全局标志(g)，它每次也只返回一个匹配项。
* 在不设置全局标志的情况下，在同一个字符串上多次调用exec()将始终返回第一个匹配项的信息。
* 而在设置全局标志的情况下，每次调用exec()则都会在字符串中继续查找新匹配项
 */
var text = "cat, bat, fat";
var pattern1 = /.at/;

var matches = pattern1.exec(text);
alert(matches.index);
alert(matches[0]);
alert(pattern1.lastIndex);

matches = pattern1.exec(text);
alert(matches.index);
alert(matches[0]);
alert(pattern1.lastIndex);

var pattern2 = /.at/g;
matches = pattern2.exec(text);
alert(matches.index);
alert(matches[0]);
alert(matches[1]);
alert(pattern2.lastIndex);

matches = pattern2.exec(text);
alert(matches.index);
alert(matches[0]);
alert(matches[1]);
alert(pattern2.lastIndex);

//test()
/*
* test()接受一个字符串参数。在模式与该参数匹配的情况下返回true；否则返回false.
 */
var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;

if(pattern.test(text)){
    alert("The pattern was matched.")
}

var pattern = new RegExp("\\[bc\\]at","gi");
alert(pattern.toString());
alert(pattern.toLocaleString());

