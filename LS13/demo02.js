/**
 * Created by qile on 2017/8/14.
 */
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
//console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);   //Object构造函数的一个属性

var a = {};    //和var b = new Object(); 的原型一样为Object.prototype

var newObj = Object.create(obj);
newObj.age = 23;
//console.log(newObj.__proto__);
console.log(newObj.__proto__ === obj);

//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null