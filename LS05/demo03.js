/**
 * Created by qile on 2017/8/14.
 */
//实参数大于形参数
function test() {
    console.log(arguments);//console.log(test.arguments);
    console.log(Array.prototype.slice.call(arguments));
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");//"hello,world!"


//实参数小于形参数
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));   //6
console.log(sum(1,2));   //8
console.log(sum(1));      //10


//是一个类数组对象（in...）