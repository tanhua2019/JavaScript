// var str = "1234"
// String.prototype.toSay = function(arr) {
//   console.log('dsfas',arr);
// }
// // str.toSay()

// // String.prototype.toSay.call(Array)
// // Array.toSay()
// var arr = [1,3,5]
// let aaa = String.prototype.toSay.bind(arr,arr)
// console.log(aaa);
// aaa()
// // arr.toSay()


// var number = [1,-200,20,999]
// Math.max.call(number)
// console.dir(number);
// console.log(Math.max.apply(number,number));
// console.log(Math.max.call(number,...number));
// console.log(Math.max.bind(number,...number)());

// function isArray (obj) {
//   console.log(Array.prototype.slice.call(arguments));
//   return Object.prototype.toString.call(obj) === '[object Array]';
// }
// console.log(isArray({}));
// console.log(isArray([]));

// //定义一个log，让他可以代理console.log()方法
// function log () {
//   let arg = Array.prototype.slice.call(arguments)
//   console.log.apply(console,arg)
// }
// log('2342','23424','324242',324342,'123123123','33333')

// var altwrite = console.log;
// altwrite('213')

// function boom () {
//   this.tag = Math.ceil(Math.random() * 100) + Date.parse(new Date())
// }

// boom.prototype.a = function() {
//   console.log(this.b.bind(this));
//   setTimeout(this.b.bind(this),100)
// }

// boom.prototype.b = function() {
//   console.log(this.tag);
// }

// var bbb = new boom()
// bbb.a()

var timer=setTimeout(function(timer){
  console.log(timer);//undefined
timer+=1;
console.log(timer);//NaN
},0)
console.log(timer); //1