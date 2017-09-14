var numbers = [1,2,3,4,5,4,3,2,1];
alert(numbers.indexOf(4));
alert(numbers.lastIndexOf(4));

alert(numbers.indexOf(4,4));
alert(numbers.lastIndexOf(4,4))

var person = {name:"Nicholas"};
var people =[{name:"Nicholas"}];

var morePeople = [person];
alert(people.indexOf(person));
alert(morePeople.indexOf(person));
