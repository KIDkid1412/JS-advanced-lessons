/**
 * Created by qile on 2017/8/14.
 */
console.log("1"+"2"); //"12"

console.log("1"+2); //"12"
console.log(1+{}); //"1[object Object]"
console.log(true+true); //2
console.log("5"-2); //3

//
var x = "1";
console.log(++x); //2 注意++和--的隐式类型转换
var x = "1";
console.log(x+1);//11

//回顾++i 与 i++
var i=1;
var y = ++i + ++i + ++i;
console.log(y);   //9

var y = "1";
y+= 1;
console.log(y);      //11   
typeof(y);      //"string"   加等是字符串
y/=1;
console.log(y);    //11
typeof(y);     //"number"    除等是数字