var obj = [{id: 1, name: '李四'},{id: 2, name: '张三'},{id: 1, name: '王五'},{id: 1, name: '李四'},]

var param = {};
obj = obj.reduce((item,current) => {
   param[current.id] ? '': param[current.id] = true&& item.push(current)
   return item;
},[])

//注意reduce的第二个参数