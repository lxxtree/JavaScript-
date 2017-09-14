//eg1
var s1 = "some text";
var s2 = s1.substring(2);
alert(s2);

//eg2
var t1 = "some text";
t1.color = "red";
alert(t1.color);

//eg3
var obj = new Object("some text");
alert(obj instanceof String);

//eg4
var value = "25";
var number = Number(value);
alert(typeof number);

var obj1 = new Number(value);
alert(typeof obj1);
