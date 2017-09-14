var text = "this has been a short summer";
var pattern = /(.)hort/g;
if(pattern.test(text)){
    alert(RegExp.input);
    alert(RegExp.leftContext);
    alert(RegExp.rightContext);
    alert(RegExp.lastParen);
    alert(RegExp.multiline);
}


//短属性名
var text1 = "this has been a short pencil";
var pattern1 = /(.)hort/g;
if(pattern1.test(text)){
    alert(RegExp.$_);
    alert(RegExp["$`"]);
    alert(RegExp["$'"]);
    alert(RegExp["$&"]);
    alert(RegExp["$+"]);
    alert(RegExp["$*"]);
}
