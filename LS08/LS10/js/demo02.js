/**
 * Created by qile on 2017/8/14.
 */
//JS 词法作用域

var name = "Jack";
function echo() {
    console.log(name);
}
echo();


//词法作用域 与调用形式无关 实例一
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Jack



//词法作用域 与调用形式无关 实例二   静态词法作用域 只能访问到全局的 其他函数作用域里变量的值访问不到 作用域块 动态 
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();//Bill or Jack
//通过new Function实例化的函数对象，不一定遵从静态词法作用域


var scope = "g";
function foo(){
	var scope = "l";
	return function(){
		return scope;
    };
}
foo()();   //"l"


var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();    //"g"