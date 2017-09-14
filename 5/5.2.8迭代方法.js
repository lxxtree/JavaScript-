var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item,index,array){
    return (item > 2);
});
alert(everyResult);

var someResult = numbers.some(function(item,index,array){
    return (item > 2);
});
alert(someResult);

var filterResult = numbers.filter(function(item,index,array){
    return (item > 2);
});
alert(filterResult);

var mapResult = numbers.map(function(item,index,array){
    return item * 2;
});
alert(mapResult);

numbers.forEach(function(item,index,array){
    //执行某些函数
});
