/*
 * localeCompare()方法，比较两个字符串，并返回下列值中的一个
 * 1、如果字符串在字母表中应该排在字符串参数之前，则返回一个负数（大多数情况下是-1，具体的值要视实现而定）
 * 2、如果字符串等于字符串参数，则返回0；
 * 2、如果字符串在字母表中应该排在字符串参数之后，则返回一个正数（大多数情况下是1，具体的值同样要视实现而定）
 */
var stringValue = "yellow";
alert(stringValue.localeCompare("brick"));
alert(stringValue.localeCompare("yellow"));
alert(stringValue.localeCompare("zoo"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var stringValue2 = "yellow";
function determineOrder(value){
    var result = stringValue2.localeCompare(value);
    if(result>0) {
        alert("The string 'yellow' comes after the string " + value + ".");
    }else if(result<0){
            alert("The string 'yellow' comes before the string "+value+".");
    }else{
            alert("The string 'yellow' is equal to the string "+value+"." );
        }
}
determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo");
