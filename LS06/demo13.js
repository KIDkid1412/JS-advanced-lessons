/**
 * Created by qile on 2017/8/14.
 */

//下例中有几个是false？（A:0个, B:1个, C:2个, D:3个），运行一下看看
console.log(3===3);     //t
console.log(3==="3");    //f
console.log(3=="3");     //t
console.log(3==new String(3));  // new String(false)（都为true）//双等会进行隐式类型转换  转为number类型
console.log(3===new String(3));

//下例中有几个是false？（A:0个, B:1个, C:2个, D:3个），运行一下看看
var obj1 = new String("xyz");
var obj2 = new String("xyz");
//obj1=obj2   2 3 为true
console.log("xyz"===obj1);    //f
console.log(obj1 == obj2);   //f  不是只指向同一对象
console.log(obj1 === obj2);  //f  同上
console.log(obj1 == new String("xyz"));  //f


//下例中有几个是false？（A:0个, B:1个, C:2个, D:3个），运行一下看看
var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);   //f
console.log(obj1 !== obj2);  //t
console.log(obj1 != obj2);  //t
console.log(obj1 != new String("xyz"));   //t

//注意 是引用类型转换到基本类型了？还是基本类型转换到引用类型了？
console.log(2 == 2);
console.log(new Number(2) == new Number(2));   //f
console.log(2 == new Number(2));  //t
console.log(2 === new Number(2));  // false

var obj1 = {x:2,y:[1],z:false};
var obj2 = {x:2,y:[1],z:(new Boolean(false))};   
console.log(obj1.z==obj2.z);   //  true
console.log(obj1.z===obj2.z);  //false          ?????


