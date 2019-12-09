// "The rain in Spain falls mainly in the plain" 使用正则表达式匹配ain出现的次数

// stringObj.match(rgExp) 使用正则表达式模式对字符串执行查找，并将包含查找的结果作为数组返回。
// match 方法返回的数组有三个属性：input、index和lastIndex。
// Input 属性包含整个的被查找字符串。
// Index 属性包含了在整个被查找字符串中匹配的子字符串的位置。
// LastIndex 属性包含了最后一次匹配中最后一个字符的下一个位置。

// i的作用是忽略大小写

var str = "The rain in Spain falls mainly in the plain"

console.log(str.match(/ain/ig));