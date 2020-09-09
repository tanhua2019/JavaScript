// var obj = [{id: 1, name: '李四'},{id: 2, name: '张三'},{id: 1, name: '王五'},{id: 1, name: '李四'},]

// var param = {};
// obj = obj.reduce((item,current) => {
//    param[current.id] ? '': param[current.id] = true&& item.push(current)
//    return item;
// },[])
// console.log(obj);
// //注意reduce的第二个参数

var obj = [{id: 1, qty: 10},{id: 2, qty: 8}]
var obj2 ={id: 1, qty: 7}

obj.forEach((item,index) => {
  if(item.id == obj2.id) {
    obj.splice(index,1)
    obj.push(obj2)
  }
})

console.log(obj);
