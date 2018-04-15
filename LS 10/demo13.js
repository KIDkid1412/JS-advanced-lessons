/**
 * Created by qile on 2017/8/14.
 */
//闭包实例 Part 1111111111111111
function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());//1
console.log(d.count());//1
console.log(c.reset());//0  n是常驻内存 执行return变为0
console.log(c.count());//1  变为0后加1
console.log(d.count());//2  两个独立闭包 d不受影响


