// let obj = {
//   name: '张三',
//   age: 23,
//   sex: '男',
//   price: 99
// }
// Object.prototype.A = function () {
//   console.log(this,arguments);
// }
// obj.A();

// let b = [1,2,3]
// b.A()

let arr = [12,22,99,24,5]
Array.prototype.max = function(data) {
  return data.sort((a,b) => b - a)[0]
}
console.log(arr.max(arr));
let obj = {
  name: 23,
  age: 32,
  price: 88
}
console.log(Array.prototype.max.apply(obj,Object.values(obj)));
console.log(Array.prototype.max.call(obj,[...Object.values(obj)]));

// let hd = {
//   data: [1, 2, 3, 4, 5]
// };
// Object.prototype.max = function(data) {
//   return data.sort((a,b) => b-a)[0]
// }
// // Object.setPrototypeOf(hd, {
// //   max: function(data) {
// //     return data.sort((a, b) => b - a)[0];
// //   }
// // });
// console.log(hd.max(hd.data));


//  let lessons = { js: 100, php: 78, node: 78, linux: 125 }

//  console.log(lessons.max(Object.values(lessons)));
// console.log(Object.prototype.max.call(lessons, Object.values(lessons)));