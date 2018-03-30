/**
 * Created by qile on 2017/8/14.
 */
//Part 11111111111111111111
//普通函数直接调用
function test1() {
    console.log("this is",this);
}
test1();//window

//思考嵌套的情况下
function test2() {
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//window



//对象方法调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();//调用对象的方法23  //23 Object {name: "obj", x: 23}


//
var x = 45;
var test = function(){
	console.log("输出：",this.x);
}
var obj = {
    x:23
};
obj.test1 = test;//给obj这个对象添加一个叫test的属性 属性为test这个变量执行的函数（方法）
obj.test1();//23
test();//45



//
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
            //'use strict'
			console.log(this.x);
		}
		foo();
    }
};
obj.test();  //45  this非严格模式下为全局变量  严格模式下报错

//给obj动态添加方法
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;//添加给对象添加方法
obj.sayHi();    //Hi，i'm obj

//思考：若直接调用sayHi();
//var name = "全局";
//sayHi();
var name = "全局";
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
sayHi();    //Hi，i'm 全局

/*
//思考如下代码 详情参见高阶函数章节
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};

var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());//输出什么
console.log(obj.fun3()());//输出什么
console.log(obj.fun4());//输出什么
*/




//Part 22222222222222222
//间接调用 实例一   间接调用的对象要和原对象之间，在数据结构上有对应的相似处，以便不影响调用效果
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB

//间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);      //i'm:polly i can fly ___ 5 6
fish.swim.call(me,3,4);   //i'm ABC i cam swim ___ 3 4
bird.fly.call(me,7,8);   //i'm:ABC i can fly ___ 7 8
bird.fly.call(fish);     //i'm:fish i can fly ___ undefined undefined
fish.swim(1,2);     //i'm fish i cam swim ___ 1 2
fish.swim.call(null,1,2);   //i'm  i cam swim ___ 1 2

//swim(1,2);与swim.call(null,1,2);相同


//很多方法都可以通过间接调用的方式来调用，比如很多原型的方法
function test() {
    console.log(Array.prototype.slice.call(arguments));   //Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组
}
test(1,2,3,"4",5);
/*
function test(a,b,c,d) 
   { 
      var arg = Array.prototype.slice.call(arguments,2,3);  //后可加两个参数 起始位置和结束位置 下标从0开始 结束位置不算
      console.log(arg); 
   } 
   test("a","b","c","d") //["c"]


var a={length:2,0:'first',1:'second'};
Array.prototype.slice.call(a);//  ["first", "second"]
  
var a={length:2};
Array.prototype.slice.call(a);//  [undefined, undefined]
 */



//构造函数
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack