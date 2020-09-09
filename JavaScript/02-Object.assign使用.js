//Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。 Object.assign(target, source1, source2);

// 注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
var a = {name: '张三'}
var c = {age: '20', name: '李四', aa: 'dd'}
var b = Object.assign(c,a)
console.log(b);

console.log(typeof Object.assign(2));