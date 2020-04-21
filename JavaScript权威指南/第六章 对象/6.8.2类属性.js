function classof(o) {
  if (o === null) return 'NULL'
  if (o === undefined) return 'undefined'
  return Object.prototype.toString.call(o).slice(8,-1)
}

console.log(null);  //null
console.log(undefined);  //undefined
console.log(classof(""));  //String
console.log(classof(1));  //Number
console.log(classof(true));  //Boolean
console.log(classof({}));  //Object
console.log(classof([]));   //Array
console.log(classof(/./));  //RegExp
console.log(classof(new Date()));  //Date
function fn() {}  
console.log(classof(fn)); //Function
console.log(classof(new fn())); //Object

// 由于很多对象继承的toString()方法重写了，所以用call改变this直接指向Object原型，来正确调用toString

// slice（start,end） （包头不包尾）可以从已有数组中返回选定元素 该方法不会改变数组，而是返回一个新的子数组
// start 必须，end可选，-1指最后一个元素，如果无end，则截取start之后所有元素