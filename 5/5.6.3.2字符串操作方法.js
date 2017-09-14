//concat(),用于将一个或多个字符串拼接起来，返回拼接得到的新字符串
var stringValue = "hello ";
var result = stringValue.concat("world");
alert(stringValue);
alert(result);

//concat()方法可以接受任意多个参数，也就是说可以通过它拼接任意多个字符串
var stringValue1 = "hello ";
var result1 = stringValue.concat("world","!");
alert(stringValue1);
alert(result1);

/*
*slice()、substr()、substring()，这三个方法都会返回被操作字符串的一个子字符串，而且也都接受一或者两个参数。
* 第一个参数指定子字符串的开始位置，第二个参数（在指定的情况下）表示子字符串到哪结束
* slice()和substring()的第二个参数指定的是子字符串最后一个字符后面的位置。
* substr()的第二个参数指定的则是返回的字符数个数。
* 如果没有给这些方法传递第二个参数，则将字符串的末尾作为结束位置。
* 与concat()方法一样，slice()\substr()、substring()也不会修改字符串本身的值—它们只返回一个基本类型的字符串值，对原始字符串没有任何影响
 */
var stringValue2 = "hello world";
alert(stringValue2.slice(3));
alert(stringValue2.substring(2));
alert(stringValue2.substr(4));
alert(stringValue2.slice(3,7));
alert(stringValue2.substring(2,7));
alert(stringValue2.substr(3,7));

/*
* 在传递给这些方法的参数是负值的情况下，它们的行为就不尽相同了。
* 其中slice()方法会将传入的负值与字符串的长度相加；
* substr()方法将负的第一个参数加上字符串的长度，而将负的第二个参数转换为0，若第二个参数为0，这意味着返回包含零个字符的字符串
* substring()方法会将所有负值参数都转换为0，这个方法会将较小的数作为开始位置，将较大的数作为结束位置，如substring(3,0)相当于调用了substring(0,3)
 */
var stringValue3 = "hi Catty and Rose";
alert(stringValue3.slice(-3));
alert(stringValue3.substring(-3));
alert(stringValue3.substr(-3));
alert(stringValue3.slice(3,-4));
alert(stringValue3.substring(3,-4));
alert(stringValue3.substr(3,-4));
