let obj = {
  name: '张三',
  age: 23,
  sex: '男',
  price: 99
}

console.log(obj.__proto__ == Object.prototype);
console.log(Object.prototype.constructor == Object);

Object.prototype.show = function () {
  console.log('obj show');
}
Object.prototype.father = 'father'

// obj.show()
let arr = [], arr1 = [];
for (let key in obj) {
  arr.push(key)
  if (obj.hasOwnProperty(key)) {
    arr1.push(key)
  }
}

console.log(arr,arr1);

// hasOwnProperty() 是Object的方法 返回一个布尔值 判断是否是自身非继承属性
// for in 循环会遍历对象所有的枚举属性 也就是包含自身属性和继承属性 然后再用 hasOwnProperty()方法来忽略继承属性

// JavaScript没有保护 hasOwnProperty属性名 所以有可能存在生命对象更改了hasOwnProperty 
// 可直接使用原型链上的 hasOwnProperty方法 使用另一个对象的方法需要用call apply bind 改变指向
var foo = {
  hasOwnProperty() {
    return false;
  },
  name: 'this is foo'
}
console.log(foo.hasOwnProperty('name')); //始终返回false
console.log(Object.prototype.hasOwnProperty.call(foo,'name'));
console.log({}.hasOwnProperty.call(foo,'name'));
console.log({}.hasOwnProperty.apply(foo,['name']));

var o = new Object()
o.name = "张三"
function changeO () {
  delete o.name;
}
changeO()
console.log(o.hasOwnProperty('name'));