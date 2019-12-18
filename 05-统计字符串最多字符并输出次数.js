var str = "dsfgdfshfghdfasdfasdfasdddddddddfehgsdfgasdfaf";

// charAt() 方法可返回指定位置的字符。
function more(str) {
  var newObj = {}
  for (let i = 0; i < str.length; i++) {
    if (newObj[str.charAt(i)]) {
      newObj[str.charAt(i)] ++;
    } else {
      newObj[str.charAt(i)] =1;
    }
  }

  var max = 0;
  var ss = '';
  for( i in newObj) {
    if (max< newObj[i]) {
      max = newObj[i];
      ss = i;
    }
  }
  console.log(max,ss);
}

more(str)

// var obj = {}
// for (let key of str) {
//   obj[key] ? obj[key] ++ : obj[key] = 1;
// }
// console.log(obj);


// var str = "sdfasdfjhsp;ldjf;lasnkaaaaivuhjapso;ijv;zlkxjvopiwhejvn"

// let obj = {};
// for (key in str) {
//   obj[str.charAt(key)] ? obj[str.charAt(key)] ++ : obj[str.charAt(key)] = 1;
// }

// let max = 0;
// let ss = '';
// for(key in obj) {
//   max < obj[key] ? (max = obj[key],ss = key): '' 
// }

// console.log(max,ss);
