/**
 * Created by qile on 2017/8/14.
 */

function foo(){}
console.log(foo); //function foo(){}
console.log(typeof foo); //function
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true


console.log(typeof Function);//function
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object


//思考：
console.log(typeof new Function());//function 创建函数的第三种方式
console.log(typeof new new Function());//object
console.log(typeof new Array());	 //object  创建的数组对象
console.log(typeof new Date());	 //object

//补充思考：
console.log(Function instanceof Function);  //t
console.log(Array instanceof Function);  //t
console.log(Date instanceof Function);  //t
console.log(Math instanceof Function);    //f
console.log(JSON instanceof Function);    //f

console.log(Function instanceof Object);  //t
console.log(Array instanceof Object);  //t
console.log(Date instanceof Object);  //t
console.log(Math instanceof Object);  //t
console.log(JSON instanceof Object);  //t

//函数对象本身就是函数 用来杀实例化对象的函数 是函数  用来实例化数组的函数
//构造函数 用来实例化date对象