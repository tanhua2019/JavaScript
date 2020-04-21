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


var cc = deepClone(obj,true)
cc.e.f.g = 'aaa'
console.log(cc,'------------------',obj);




