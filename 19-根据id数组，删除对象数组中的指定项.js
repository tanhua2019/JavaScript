
// 根据id数组，删除对象数组中的指定项
// var arr = [1,2];
// var allArr = [{id:1,name:"s"},{id:2,name:"ds"},{id:3,name:"gg"}]
// var finalArr = [];
// // 最终结果
// finalArr = [{id:3,name:"gg"}];

// includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。

var arr = [1, 2];
var allArr = [{ id: 1, name: "s" }, { id: 2, name: "ds" }, { id: 3, name: "gg" }]

var finalArr = allArr.filter (item => !arr.includes(item.id))
console.log(finalArr);


