/**
 * Created by qile on 2017/8/14.
 */
//全局作用
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    //console.log(a,b,c,d);  //d is not defined
    function bar() {
        //bar局部作用域
        var a = 500; 
            d = 600,   //逗号是局部变量   ;是全局变量
        console.log(a,b,c,d);
    }
    bar();
}
fn();    //500 20 200 600
//console.log(a,b,c,d);   //c is not defined
