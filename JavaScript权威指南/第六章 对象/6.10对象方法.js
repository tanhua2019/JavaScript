// toString()方法

console.log({x:1,y:2}.toString());
// [object Object] 对检测类型很有效，但是返回值有用的信息很少，很多类都重写了toString()
// 例如Array.toString() 把每个元素都转换成了字符串
console.log([1,2,3].toString()); // '1,2,3'
console.log([1,2,3].toLocaleString()); // '1,2,3'
// Function.toString() 函数调用的时候返回函数源码
function fn() {
  return 'fn'
}
console.log(fn.toString());
// function fn() {
//   return 'fn'
// }
