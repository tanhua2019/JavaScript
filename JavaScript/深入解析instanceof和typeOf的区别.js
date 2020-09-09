console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof "a");
console.log(typeof 1);
console.log(typeof true);
console.log(typeof function(){});
// typeof 一般只能返回String Number Boolean Object undefined function
if (typeof a !== 'undefined') { console.log('a') } else { console.log('b') }
// 在 java 的最初版本中，使用的 32 位系统，为了性能考虑使用低位存储了变量的类型信息：
// 000：对象
// 1：整数
// 010：浮点数
// 100：字符串
// 110：布尔
// 有 2 个值比较特殊：
// undefined：用 -2^{30} （−2^30）表示。
// null：对应机器码的 NULL指针，一般是全零。

// null作为一个基本数据类型为什么会被typeof运算符识别为object类型呢？ 这是因为javascript中不同对象在底层都表示为二进制
// 而javascript 中会把二进制前三位都为0的判断为object类型
// 而null的二进制表示全都是0，自然前三位也是0，所以执行typeof时会返回'object。 ----引用自《你不知道的javascript（上卷）》


// instanceof 可以用来判断某个构造函数的prototype原型是否在被检测对象的原型链上返回boolean值 简单点说就是判断左边的值是否是右边值得实例
// 检测一个对象是否是数组，可以通过isArray() instanceof Object.prototype.toString.call()来判断是否是数组