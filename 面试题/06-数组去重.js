// var arr = [1,2,2,2,4,5,6,7,8,8,8,8]

// function cc (arr) {
//   var newArr = [];
//   for (var i = 0; i< arr.length; i ++) {
//     if (newArr.indexOf(arr[i]) == -1) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr;
// }
// console.log(cc(arr));


// let start = arr[0];
// console.log(start);
// for (var i = 1; i< arr.length;i ++) {
//   if (arr[i] == start) {
//     arr.splice(i,1);
//     i --;
//   } else {
//     start = arr [i]
//   }
// } 
// console.log(arr);


let arr = [1, 2, 1, 3, 3, 5, 5, 6, 6]
// arr.forEach(item => newArr.indexOf(item) == -1? newArr.push(item): '')
// let newArr = [...new Set(arr)]
// let newArr = Array.from(new Set(arr))
let newArr = arr.filter((item,index,self) => {
  console.log(self.indexOf(item),index);
  return self.indexOf(item) === index
})
console.log(newArr);

// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。