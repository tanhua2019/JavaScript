// 您经常使用的String对象的方法有哪些，Array对象的方法有哪些，实现下面函数
// function StringToArray(str) {}  input: "1,2,3" output: [1,2,3]
// function ArrayToString(arr) {}  input: [1,2,3] output: "123" 

var str = "1,2,3"
function StringToArray(str) {
  return str.split(',',2)
}
//stringStr.split('切割点',‘设置切割长度，否则整个字符串都会被分割，不考虑它的长度’)；
console.log(StringToArray(str));

var arr = [1,2,3]
function ArrayToString(arr) {
  return arr.join('');
}
console.log(ArrayToString(arr));

// String.toString()
// String.charAt()
// String.charCodeAt()
// String.split()

// Array.push()
// Array.pop()
// Array.unshift()
// Array.shift()
// Array.join()
// Array.reverse()
// Array.indexOf()
// Array.lastIndexOf()
// Array.splice()
// Array.slice()
// Array.from()
// Array.forEach()
// Array.map()
// Array.filter()
// Array.sort()
// Array.reduce()
// Array.isArray()
