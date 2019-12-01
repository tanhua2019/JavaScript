//let 和const的区别
// let 和const都是有块级作用域 const用来声明常量且必须要赋初值，并且不可改变值

var a = {name: '张三'}
var c = {age: '20', name: '李四', aa: 'dd'}
var b = Object.assign(c,a)
console.log(b);