# VsCode 设置多行注释快捷键
- 文件 -> 首选项 -> 键盘快捷方式 -> 输入comment即可
# JWT的使用以及原理
[参考文章](https://www.jianshu.com/p/ed17e00c4484)
- 用户注册登陆成功给用户生成一个token返回给客户端，等前端携带token调用API时我们直接解析token看能否解析出用户数据来决定用户是否有接口权限呢，NodeJS提供的一个npm包：jsonwebtoken就可以实现token的生成与反向解密出用户数据。
1. 引入jsonwebtoken包
2. 配置jsonwebtoken生成token所需的secret，secret为加密密钥，不能泄露给其他人使用。
3. secret通过jsonwebtoken.sign(info, secret, options)进行加密生成token。
4. 如何反向解析出用户数据，解析token使用方法：jsonwebtoken.verify(token,secret,callback)

# SyntaxError: Unexpected identifier错报及解决办法 Babel使Node支持ES6
[参考文章](https://segmentfault.com/a/1190000013445997)
- Babel 是一个 JavaScript 编译器，可将我们代码中的 ES6 语法转换为 ES5 的语法，使我们的代码能在不支持 ES6 语法的环境中正常运行。配合一些插件，我们甚至能直接使用 ES6 标准的一些新特性，而无需等待各大浏览器的实现，也无需担忧兼容性。
1. 装包 babel-cli 是 Babel 内置的一个 CLI，可通过命令行操作来编译文件 babel-node 文件名称运行
2. 装包 babel-preset-env 会根据我们配置的环境自动将该环境不支持的语法转换 ES5 的语法。
3. babel-polyfill（可选的依赖包） 可以为代码的运行环境补充缺少的 API。(参考文章)
4. 新建.babelrc文件 {"presets": ["env"]}

# git忽略某个目录或文件不上传
1. 新建一个.gitignore文件
2. 忽略规则 
node_modules/    //忽略这个node_modules/目录
angular.json    //忽略这个angular.json文件
log/*           //忽略log下的所有文件
css/*.css       //忽略css目录下的.css文件

# 解构赋值
- 基本概念： 本质上就是一种匹配模式， 只要等号两边的模式相同，那么左边的变量就可以被赋予相应的值[参考文章](https://segmentfault.com/a/1190000017312226)
1. 数组的解构赋值
```JavaScript
let [a, b, c] = [1, 2, 3] // a=1, b=2, c=3
let [d, [e], f] = [1, [2], 3] // 嵌套数组解构 d=1, e=2, f=3
let [g, ...h] = [1, 2, 3] // 数组拆分 g=1, h=[2, 3]
let [i,,j] = [1, 2, 3] // 不连续解构 i=1, j=3
let [k,l] = [1, 2, 3] // 不完全解构 k=1, l=2
```
2. 对象的解构赋值
```JavaScript
let {a, b} = {a: 'aaaa', b: 'bbbb'} // a='aaaa' b='bbbb'
let {d, e:{f}} = {d: 'aaaa', e: {f: 'bbbb'}} // 嵌套解构 d='aaaa' f='bbbb'
```
3. 基本类型的解构赋值
```JavaScript
let [h, i, j, k] = 'nice' // 字符串解构 h='n' i='i' j='c' k='e'
let { length: len } = "madk" // len = 4 输出长度
```
- es6解构赋值只需要知道要传什么参数就行，不需要知道参数的顺序也没问题
- null 和 undefined 不能进行解构赋值
```JavaScript
let {a,b,c,d} = {d:4, b:2, c:3,a: 1} //a =1 b =2 c =3 d =4
let [f] = undefined; //TypeError: undefined is not iterable
```

# Set
- 集合的基本概念：集合是由一组无序且唯一（即不能重复）的项组成的。这个数据结构使用了与有限集合相同的数学概念，应用在计算机的数据结构中.特点： key和value相同，没用重复的value
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)
1. set.add(value) 添加一个数据，返回set 结构本身
2. set.delete(value) 删除指定数据，返回一个布尔值，表示删除是否成功
3. set.has(value) 判断值是否为Set的成员， 返回一个布尔值
4. set.clear() 清除所有数据，没有返回值
5. set.entries() 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值的[value, value]数组

# 圣杯布局和双飞翼布局[参考文章](https://www.jianshu.com/p/81ef7e7094e8)
- 圣杯布局和双飞翼布局是为了实现一个两侧宽度固定，中间宽度自适应的三栏布局。

# 深浅拷贝
- 浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。
- js的数据类型分成两种：基本数据类型和引用数据类型，
1. 基本数据类型:Number、String、Boolean、Null、Undefined、Symbol（ES6）这些类型可以直接操作保存在变量中的实际值。
2. 引用数据类型：Object（在JS中除了基本数据类型以外的都是对象，数据是对象，函数是对象，正则表达式是对象）
- 基本数据类型保存在栈内存，引用类型保存在堆内存中。根本原因在于保存在栈内存的必须是大小固定的数据，引用类型的大小不固定，只能保存在堆内存中，但是可以把它的地址写在栈内存中以供我们访问
1. 基本类型的复制：赋值的时候，在栈内存中重新开辟内存，存放变量b，所以在栈内存中分别存放着变量a、b各自的值，修改时互不影响
2. 引用类型的复制：指向堆内存中同一地址的同一对象，复制的只是引用地址，引用类型的复制，简单赋值无用，需要拷贝。
## 浅拷贝 
- 浅拷贝只是拷贝基本类型的数据，如果父对象的属性等于数组或另一个对象，那么实际上，子对象获得的只是一个内存地址，因此存在父对象被篡改的可能，浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存
### Object.assign是第一级属性深拷贝，以后级别属性浅拷贝
- Object.assign 可以把 n 个源对象拷贝到目标对象中去，如下
```JavaScript
let m ={name: {asd: '123'}}
let n = Object.assign({}, m)
console.log(n)  //{name: {asd: '123'}}
n.name.asd = '123456789'
console.log(n,m); // { name: { asd: '123456789' } } { name: { asd: '123456789' } }
n.name = "123"
console.log(n,m); //{ name: '123' } { name: { asd: '123456789' } }
```
### for in浅拷贝
```JavaScript
var str = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
}

function simpleClone(obj) {
  var newObj = {}
  for (var key in obj) {
    newObj[key] = obj[key]
  }
  return newObj
}

var obj2 = simpleClone(str);
console.log(str,obj2); //{ a: 1, b: { c: 2, d: 3 } } { a: 1, b: { c: 2, d: 3 } }
obj2.a = 2;
console.log(str,obj2); //{ a: 1, b: { c: 2, d: 3 } } { a: 2, b: { c: 2, d: 3 } }
obj2.b.c = 1;
console.log(str,obj2); //{ a: 1, b: { c: 1, d: 3 } } { a: 2, b: { c: 1, d: 3 } }
```
- 补充知识点：
- for in主要用于遍历对象的可枚举属性，包括自有属性、包括原型链上的属性
```JavaScript
var obj = {"name":"tom","sex":"male"};
Object.defineProperty(obj, "age", {value:"18", enumerable:false});//增加不可枚举的属性age
Object.prototype.protoPer1 = function(){console.log("name is tom");};//通过原型链增加属性
for(var a in obj)
console.log(a);  //name sex protoPer1
```
- Object.keys遍历对象所有可枚举属性 不包括原型链上的属性
## 深拷贝
### 使用JSON.stringify()和JSON.parse()也可以实现深拷贝。当值为undefined、任意函数、symbol时会被忽略。
```JavaScript 
var obj = {
  a: 1,
  b: function() {
    console.log('dd');
  },
  c: Symbol,
  d: undefined
}
console.log(obj);   //{ a: 1,b: [Function: b],c: [Function: Symbol],d: undefined }
console.log(JSON.parse(JSON.stringify(obj)));   //{ a: 1 }
```
### 通过递归实现深拷贝
- Array.isArray() 判断一个值是否为数组。
- Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。包含true,不包含false，常常用来忽略继承属性。
- typeof和instanceof常用来判断一个变量是否为空，或者是什么类型的。区别：
- typeof对于原始类型来说，除了null都可以显示正确类型
- typeof对于对象来说，除了函数都会显示object
- 对象,数组和null typeof(x) = "object" 
- instanceof运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
```JavaScript
var a=new Array();
console.log(a instanceof Array) //true
console.log(a instanceof Object) //true
//这是因为 Array 是 object 的子类。
```
- 完整的深拷贝实现代码
```JavaScript
function deepClone(obj,deep) {
  var cloneObj = Array.isArray(obj) ? [] : {}
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (deep && typeof obj[key] === "object" && obj[key] !== null) {
        cloneObj[key] = deepClone(obj[key],deep)
      } else { 
        cloneObj[key] = obj[key]
      }
    }
  }
  return cloneObj;
}
```

# Object.assgin的使用[参考文章](https://www.jianshu.com/p/d5f572dd3776)
- Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
- Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
- 注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
1. 如果该参数不是对象，则会先转成对象，然后返回。 typeof Object.assign(2) 返回string 
2. 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。



# Javascript中Math.max.apply和Math.max的区别
- Javascript中的Math.max方法可以求出给定参数中最大的数。
```JavaScript
Math.max('1','2','3.1','3.2')
3.2
Math.min(1,0,-1)
-1 
```

# href和src的区别是什么
- src 的内容，是页面必不可少的一部分，是引入。href 的内容，是与该页面有关联，是引用。区别就是，引入和引用。

# rem 
- 当前设备宽/当前rem = 设计稿宽/预设rem
- 换算公式 当前rem基准值 = 当前设备宽度 /设计稿宽度 * 预设的基准值 
- 基准值可以理解成font-size
- 也就是说640px的设计稿 预设font-size = 100px = 1rem; 为1个基准
- 在320px的屏幕上只占设计稿的一半的font-size = 50px = 1rem 一个基准
- 换个说法，当前屏幕的大小占640设计稿的多少比重 再乘它的预设基准 就可以得出当前基准是多少px = 1rem; 

# Math 
