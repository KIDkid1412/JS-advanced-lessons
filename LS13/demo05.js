/**
 * Created by qile on 2017/8/14.
 */
function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm ",this.name,this.age,"years old!");
};

var p1 = new Person("Mike");
console.log(p1.name);
console.log(p1.age);
p1.sayHi();   //Hi,i'm  Mike 21 years old!

console.log(p1.__proto__ === Person.prototype);  //true
Person.__proto__  === Function.prototype  //true
Person.__proto__.__proto__  === Object.prototype  
//原型共享  构造两个对象 更改一个对象的原型的属性值  输出另一个对象也会改变  


/*
var p1= new Person(23) 
var p2= new Person(24)
p1.prototype = 
p2. 
*/