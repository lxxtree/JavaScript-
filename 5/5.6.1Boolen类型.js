var falseObject = new Boolean(false);
var result = falseObject && true;
alert(result);

var falseValue = false;
result = falseValue && true;
alert(result);

alert(typeof falseObject);
alert(typeof falseValue);
alert(falseObject instanceof Boolean);
alert(falseValue instanceof Boolean);
