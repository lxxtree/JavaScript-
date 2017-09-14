/反转数组
var values = [1,2,3,4,5];
values.reverse();
alert("反转数组："+values);

//sort()方法
var values = [0,1,5,10,15];
values.sort();
alert(values);

function compare(value1,value2){
    if(value1 < value2){
        return -1;
    }else if(value1 > value2){
        return 1;
    }else{
        return 0;
    }
}
values.sort(compare);
alert(values);

function compare2(value1,value2){
    if(value1 < value2){
        return 1;
    }else if(value1 > value2){
        return -1
    }else{
        return 0;
    }
}

values.sort(compare2);
alert(values);

