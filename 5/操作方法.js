//concat()
var colors = ["red","green","blue"];
var colors2 = colors.concat("yellow",["black","brown"]);
alert(colors);
alert(colors2);

//slice()
var colors3 = ["red","green","blue","yellow","purple"];
var colors4 = colors3.slice(1);
var colors5 = colors3.slice(1,4);
alert(colors4);
alert(colors5);

//splice()
 var colors6 = ["red","green","blue"];
 var removed = colors6.splice(1,1);
 alert("splice删除"+colors6);
 alert(removed);

 removed = colors6.splice(1,0,"yellow","orange");
 alert(removed);
 alert("splice插入"+colors6);

 removed = colors6.splice(1,1,"red","purple");
 alert("splice替换"+colors6);
 alert(removed);
