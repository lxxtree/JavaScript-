/*
* match()方法，在字符串中调用这个方法，本质上与调用RegExp的exec()方法相同。match()方法只接受一个参数，要么是一个正则表达式，要么是一个RegExp对象
 */
var text = "cat, bat, sat, fat";
var pattern = /.at/g;
var matches = text.match(pattern);
alert(matches.index);
alert(matches[0]);
//alert(matches[1]);
//alert(matches[2]);
//alert(matches[3]);
alert(pattern.lastIndex);
matches = text.match(pattern);
alert(matches[0]);
alert(pattern.lastIndex);

/*
* search()也只接收一个参数，与match()方法的参数相同：由字符串或RegExp对象指定的一个正则表达式
* search()方法返回字符串中第一个匹配项的索引，如果没有找到匹配项，则返回-1
* search()方法始终是从字符串开头向后查找模式
 */
var pos = text.search(/at/g);
alert(pos);
pos = text.search(/at/g);
alert(pos);

/*
* replace()方法，接收2个参数：第一个参数可以是一个RegExp对象或者一个字符串（这个字符串不会被转换成正则表达式），
* 第二参数可以是一个字符串或者一个函数。
* 如果第一个参数是字符串，那么只会替换第一个子字符串
* 要想替换所有字符串，唯一的办法就是提供一个正则表达式，而且要指定全局(g)标志
 */
var text1 = "cat, bat, sat, fat";
var result =text1.replace("at","ond");
alert(result);
result = text1.replace(/at/g,"ond");
alert(result);

/*
* 如果第二个参数是字符串，那么还可以使用一些特殊的字符序列，将正则表达式操作得到的值插入到结果字符串中
 */
var text2 = "cat, bat, sat, fat";
result = text.replace(/(.at)/g,"word($1)");
alert(result);

/*
* replace()方法的第二个参数也可以是一个函数。在只有一个匹配项（即与模式匹配的字符串）的情况下，
* 会向这个函数传递3个参数：模式的匹配项、模式匹配项在字符串中的位置和原始字符串
* 在正则表达式中定义了多个捕获组的情况下，传递给函数的参数依次是模式的匹配项、第一个捕获组的匹配项、第二个捕获组的匹配项……
* 但最后两个参数仍然分别是模式的匹配项在字符串中的位置和原始字符串
* 这个函数应该返回一个字符串，表示应该被替换的匹配项
 */
function htmlEscape(text){
    return text.replace(/[<>"&]/g,function(match,pos,originalText){
        switch(match){
            case "<":
                return "&lt;";
            case ">":
                    return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
        }
    });
}
alert(htmlEscape("<p class=\"greeting\">Hello world!</p>"));

/*
* split(),这个方法可以基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中
* split()方法可接受可选的第二个参数，用于指定数组的大小，以便确保返回的数组不会超过既定的大小
 */
 var colorText = "red,blue,green,yellow";
 var colors1 = colorText.split(",");
 var colors2 = colorText.split(",",2);
 var colors3 = colorText.split(/[^\,]+/);
 alert(colors1);
 alert(colors2);
 alert(colors3);

