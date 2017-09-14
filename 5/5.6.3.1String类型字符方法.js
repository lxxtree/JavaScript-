var stringValue = "hello world";

//length
alert(stringValue.length);

//charAt 访问特定字符，接收一个字符参数，即基于0的字符位置,以单字符字符串的形式返回给定位置的那个字符
alert(stringValue.charAt(1));

//charcodeAt，同charAt，不同的是返回字符编码
alert(stringValue.charCodeAt(1));

//使用方括号加数字索引来访问字符串中的特定字符
alert(stringValue[2]);
