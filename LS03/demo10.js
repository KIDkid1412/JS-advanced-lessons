/**
 * Created by qile on 2017/8/14.
 */
//包装对象
var a = 123;
var b = new Number(a);

console.log(a == b);
console.log(a === b);//true or false 为什么

//临时包装对象
var str = "abcde";
console.log(str.length);//临时包装成了String对象
str.length = 1;
console.log(str.length,str);//临时包装对象并不影响原始值
/*
var str = "abcdef";
str.length;
str.length = 1;
console.log(str,str.length);       //abcdef 6
*/

/*
var arr =[1,2,3,4,5];
arr.length = 1;
console.log(arr,arr.length);      //[1]0: 1length: 1__proto__: Array[0] 1
*/

function foo(){

}
foo instanceof Object;   //true

