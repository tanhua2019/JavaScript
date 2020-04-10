//数组sort()方法实现a-z排序
var arr = [1,'a','c',3,'b','d',2,'f','e'];
console.log(arr.sort());

// 字符串反转
var str = '346521';
console.log(str.split('').sort().reverse().join(''));


var foo = "get-element-by-id"
var ddd = foo.split('-').map(item => {
  return item.charAt(0).toLocaleUpperCase()+item.substr(1)
}).join('')
console.log(ddd);

var d = new Date()
console.log(d.getFullYear()+'-'+((d.getMonth()+1)<10? '0'+(d.getMonth()+1):(d.getMonth()+1))+'-'+(d.getDay()<10?'0'+d.getDay():d.getDay()));