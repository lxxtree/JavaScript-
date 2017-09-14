//reduce()方法：从数组的第一项开始，逐个遍历到最后
var values = [1,2,3,4,5];
var sum = values.reduce(function(prev,cur,index,array){
    return prev + cur;
});
alert(sum);

//reduceRight()从数组的最后一项开始，向前遍历到第一项
var sum = values.reduceRight(function(prev,cur,index,array){
    return prev + cur;
});
alert(sum);
