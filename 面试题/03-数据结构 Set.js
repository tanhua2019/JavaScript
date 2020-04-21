// ES6提供了数据结构set 它类似于数组，但是成员的值都是唯一的没有重复的值
const s = new Set([1,2,3])
console.log(s);

// set类的属性
console.log(s.size);

// set类的方法
// 1.set.add(value) 添加一个数据，返回set 结构本身
s.add('a').add('b')
console.log(s);
// 2.set.delete(value) 删除指定数据，返回一个布尔值，表示删除是否成功
s.delete('a')
console.log(s);
//删除不存在的数据返回false
console.log(s.delete('a'));
// 3. set.has(value) 判断值是否为Set的成员， 返回一个布尔值
console.log(s.has('a'));
console.log(s.has('b'));

// 4. set.clear() 清除所有数据，没有返回值
// s.clear()
// console.log(s);
// 5.keys() 返回键名的遍历器
console.log(s.keys());
// 6. set.values() 返回键值的遍历器
console.log(s.values());
// 7. set.entries()返回键值对的遍历器
console.log(s.entries());