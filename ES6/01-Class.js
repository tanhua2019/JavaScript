class Father {
  constructor(a,b) {
    this.a = a;
    this.b = b;
  }
  toString() {
    console.log('toString');
  }
}

let father = new Father(2,3);
console.log(father.a,father.b);
father.toString()
for(key in father) {
  console.log(key);
}
console.log(Father.prototype.toString == father.__proto__.toString);

class Son extends Father {
  constructor() {
    super()
  }
}
let son = new Son();
son.toString()

function A (a,b) {
  this.a = a;
  this.b = b;
}
A.prototype.toString = function () {
  return this.a +''+ this.b
}

// 类的所有方法都定义在类的prototype属性上面
class Person {
  toSay() {
    console.log('toSay');
  }
}
Person.prototype.toKey = function () {
  console.log('toKey');
}
Object.assign(Person.prototype, {
  toKu() {
    console.log('toku');
  },
  toGaGa() {
    console.log('toGaGa');
  }
})
var person = new Person()
person.toKey()
person.toSay()
person.toKu()
person.toGaGa()

//在实例上调用方法，实际上就是调用原型方法
console.log(person.toKey == Person.prototype.toKey);
//类内部的方法都是不可枚举的
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));
for (const key in Person.prototype) {
  console.log(key);
}

class Student extends Person {
  constructor() {
    Person.prototype.constructor.call(this)
  }
  toLidy() {
    console.log('toLidy');
  }
}

let student = new Student()
Object.assign(Student.prototype,{
  tocc() {
    console.log('tocc');  
  }
})
console.log('----------------------');
for (const key in Student.prototype) {
  console.log(key); //tocc toKeytoKu toGaGa 遍历出继承属性 
}

// constructor： 它是类的默认方法，每次实例化一个对象时都会自动调用该方法，如果没有定义，他会被默认添加, 默认返回this
console.log('xxxxxxxxxxxxxxxxxxxxxxxx');
class Foo {
  constructor() {
    // return this   //true
    return Object.create(null) // false
  }
}

var foo = new Foo()
console.log(foo instanceof Foo);