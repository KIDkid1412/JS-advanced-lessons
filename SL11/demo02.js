/**
 * Created by qile on 2017/8/14.
 */
//Part 1
var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");

console.log(i instanceof Function); //f   
console.log(i instanceof Object);  //t   除了n两个都是t 其他两个都是f t


// typeof  //不能看是不是对象类型 用instanceof
console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);
console.log(typeof String);
console.log(typeof Boolean);//F
console.log(typeof Math);//O
console.log(typeof JSON);

// Part 2
// instanceof
console.log(Object instanceof Function); //t
console.log(Object instanceof Object);  //t
console.log(Boolean instanceof Function);  //t
console.log(Boolean instanceof Object);  //t
console.log(String instanceof Function);  //t
console.log(String instanceof Object);  //t
console.log(Number instanceof Function);  //t
console.log(Number instanceof Object);  //t
console.log(Function instanceof Function);  //t
console.log(new Function() instanceof Function);  //t 函数 类型是func

console.log(new (new Function()) instanceof Function)  //new 函数 出来的是对象 所以f
console.log(new (new Function()) instanceof Object) //t

console.log(Function instanceof Object);  //t
console.log(Array instanceof Function);  //t
console.log(Array instanceof Object);  //t
console.log(Date instanceof Function);  //t
console.log(Date instanceof Object);  //t
console.log(Math instanceof Function);  //f
console.log(Math instanceof Object);  //t
console.log(JSON instanceof Function);  //f
console.log(JSON instanceof Object);  //t



