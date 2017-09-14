function callSomeFunction(someFunction,someArgument){
  return someFunction(someArgument);
  }

function add10(num){
    return num + 10;
}
var result1 = callSomeFunction(add10,10);
alert(result1);

function getGreeting(name){
    return "Hello, " + name;
}
var result2 = callSomeFunction(getGreeting,"Geoge");
alert(result2);

/***************************************************************************************************/
function createComparisonFunction(propertyName){
    return function(object1,object2){
        var value1 = object1[propertyName];
        var value2 =object2[propertyName];
        if(value1 < value2){
            return -1;
        }else if(value1 > value2){
            return 1;
        }else{
            return 0;
        }
    };
}
var data = [{name:"Zachary",age:18},{name:"Nicholas",age:29}];
data.sort(createComparisonFunction("name"));
alert(data[0].name);
data.sort(createComparisonFunction("age"));
alert(data[0].name);
