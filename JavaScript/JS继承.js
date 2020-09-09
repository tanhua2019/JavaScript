function Father(name) {
  this.name = name || 'father',
  this.eat = function() {
    console.log('eat');
  }
  this.arr = []
}
function Father1(name) {
  this.name = name || 'father1',
  this.money = function() {
    console.log('money');
  }
  this.arr = []
}
Father.prototype.sleep = function(a = 'sleep') {
  console.log('sleep',a);
}
// 1. 原型链继承
// 特点： 
// 1.实例对象是子类的实例也是父类的实例
// 2.父类新增原型方法和原型属性，实例可以访问到
// 缺点： 
// 1.创建子类实例时无法向父类构造函数传参
// 2.无法实现多继承  ps：原型链只能指向一个
// 3.引用类型的属性被所有实例共享

// function Son() {}
// Son.prototype = new Father();
// var son = new Son() 
// son.arr.push('999')
// var son1 = new Son()
// console.log(son.arr,son1.arr); //引用类型的属性被所有实例共享

// 2.借用构造函数继承
// 特点：
// 1. 可以向父类构造函数传参
// 2. 实现多继承
// 3. 避免了引用类型被所有实例共享
// 缺点：
// 1.实例对象只是子类的实例，不是父类的实例
// 2.只能继承父类的实例属性和方法，不能继承原型属性和方法 son.sleep()报错
// 3.无法通过原型实现函数复用，并且每个实例对象都会有父类里面所有的属性和方法，影响性能
// function Son(name) {
//   Father.call(this,name)
//   Father1.call(this,name)
// }
// var son = new Son('亲');
// var son1 = new Son('亲');
// son.arr.push('111')
// console.log(son.arr,son1.arr);
// console.log(son.name,son.eat(),son.money());

// 3. 实例继承
// 特点： 不限制调用方式，通过new 子类 或者直接调用子类都可以
// 缺点： 1. 实例对象是父类的实例对象，不是子类的实例 2. 无法实现多继承
// function Son() {
//   var attr = new Father()
//   attr.name = '999'
//   return attr;
// }
// var son = new Son();
// console.log(Son(),son);

// 4. 组合继承 核心：使用原型链实现对原型方法的继承，可复用，使用构造函数实现对实例属性的继承
// 特点：
// 1. 实例对象即是父类的实例对象又是子类的实例对象
// 2. 避免了引用类型被所有实例共享
// 3. 可以继承实例属性/方法，也可以继承原型属性/方法
// 4. 可以向父类构造函数传参
// 5. 可复用函数
// 缺点：
// 1. 调用了两次父类，产生了两份实例
// function Son(name) {
//   Father.call(this,name)
// }
// Son.prototype = new Father()
// Son.prototype.constructor = Son;
// var son = new Son('xxx')
// console.log(son.name,son.sleep('xxx'),son.eat());

// 5. 寄生组合继承  通过寄生方式砍掉父类的实例属性/实例方法，这样就避免了初始化两次实例属性和方法
function Son(name) {
  Father.call(this,name)
}
(function() {
  var Super = function() {}
  Super.prototype = Father.prototype
  Son.prototype = new Super()
})()


console.log(son instanceof Son); //true
console.log(son instanceof Father); // false
// instanceof原理，通过判断构造函数的原型是否在被检测者的原型链上