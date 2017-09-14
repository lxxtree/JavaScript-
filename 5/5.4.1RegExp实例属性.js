var pattern1 = /\[bc\]at/i;

//布尔值，表示是否设置了g变量，g：表示全局模式
alert(pattern1.global);

//布尔值，表示是否设置了i变量，i：表示不区分大小写
alert(pattern1.ignoreCase);

//布尔值，表示是否设置了m标志，m：表示多行模式
alert(pattern1.multiline);

//整数，表示开始搜索下一个匹配项的字符位置，从0算起
alert(pattern1.lastIndex);

//正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回
alert(pattern1.source);

var pattern2 = new RegExp("\\[bc\\]at","i");
alert(pattern2.global);
alert(pattern2.ignoreCase);
alert(pattern2.multiline);
alert(pattern2.lastIndex);
alert(pattern2.source)
