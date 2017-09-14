//如下工厂模式创建的函数
function createPerson(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayNmae = function(){
        alert(this.name);
    };
    return o;

}
var person1 = createPerson("Nicholas",29,"Software Engineer");
var person2 = createPerson("Greg",27,"Doctor");
alert(person1.name);
alert(person2.name);
