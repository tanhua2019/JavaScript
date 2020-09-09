Object.prototype.x = '999'

var obj = {
  a: 1,
  b: function() {
    console.log('dd');
  },
  c: Symbol,
  d: undefined,
  e: {
    f: {
      g: 1
    }
  }
}

function cloneDeep(obj, deep = true) {
  //首先要判断obj的类型? 如果不判断如果obj是个[]那么拷贝出来的是[0: {a: 1}]
  let cloneObj = Array.isArray(obj)? [] : {}
  // let cloneObj = Object.prototype.toString.call(obj).slice(8,-1) == 'Array'? [] : {}
  // let cloneObj = obj instanceof Array ? [] : {}
  //第二步，循环遍历obj中的key
  // console.log(Object.keys(obj));
  for (key in obj) {
    // hasOwnProperty判断是否是自身属性而不是继承属性
    if (obj.hasOwnProperty(key)) {
      if (deep && typeof obj[key] == 'object'&& obj !== null) {
        cloneObj[key] = cloneDeep(obj[key], deep)
      } else {
        cloneObj[key] = obj[key]
      }
    }
  }
  return cloneObj
}

// var obj2 = cloneDeep(obj,false)
// obj2.e.f.g = '999'
// console.log(obj,obj2);
var obj3 = cloneDeep(obj)
obj3.e.f.g = '999'
console.log(obj,obj3);





















// function deepClone(obj,deep) {
//   var cloneObj = Array.isArray(obj) ? [] : {}
//   for (key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (deep && typeof obj[key] === "object" && obj[key] !== null) {
//         cloneObj[key] = deepClone(obj[key],deep)
//       } else { 
//         cloneObj[key] = obj[key]
//       }
//     }
//   }
//   return cloneObj;
// }


// var cc = deepClone(obj,true)
// cc.e.f.g = 'aaa'
// console.log(cc,'------------------',obj);




