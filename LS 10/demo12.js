/**
 * Created by qile on 2017/8/14.
 */
//Part 11111111111111//////////////////
var tmp = 100;//注意：词法作用域,形成的闭包是否包含此行的变量tmp？
function foo(x) {
    var tmp = 3;//注意：词法作用域，若屏蔽此行，会输出113 114 115 foo之外的tmp不是闭包的一部分
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//16  2+10+4 
fee(10);//17  tmp上一次是4  形成闭包 并没有被释放掉 变成5
fee(10);//18


//闭包嵌套，扩展知识（了解即可），思考下述代码中存在几个闭包，设置断点调试
function f1(m){
	var z = 100;  //闭包
	function f2(x) {
    	return function (y) {
        	console.log(x + y + (++z));//设置断点，有两个闭包  能访问到变量z 但z不属于闭包 
    	}   //return到} 闭包
	}
	return f2(m);
}
var f3 = f1(2); 
f3(10);  //113
f3(10);  //114
//思考有几个闭包，x和z分别属于哪个闭包


//Part 2222222222222//////////////////
function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age); //和相关作用域形成了一个闭包
bar(10); //15 1
bar(10); //15 2
bar(10); //15 3


// Part 33333333333
function fn() {
    var max = 10;//屏蔽此行 输出100
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;   //不是它闭包的一部分
f1(15);    //15