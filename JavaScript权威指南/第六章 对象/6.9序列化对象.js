// 对象序列化，是指将对象的状态转换成字符串，也可将字符串还原为对象
let obj = {
  name: '张三',
  child: {
    age: 18,
    children: {
      sex: '男'
    }
  },
  fn () {
    console.log('speak');
  },
  b: Symbol('bbb'),
  c: NaN,
  d: Infinity,
}
console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));

//支持对象、数组、字符串、布尔、null、和无穷大，NAN和Infinity无穷大 会被序列化成null
//不支持 funciton函数 undefined Regexp Error Symbol,序列化时会被忽略掉
//可以实现深拷贝，深拷贝时存在弊端。
