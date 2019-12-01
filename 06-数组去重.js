var arr = [1,2,2,2,4,5,6,7,8,8,8,8]

// console.log(Array.from(new Set(arr)));

function cc (arr) {
  var newArr = [];
  for (var i = 0; i< arr.length; i ++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log(cc(arr));



// let arr = [1,2,3,1,2,3,4];


// // var newArr = [];
// // arr.forEach(item => newArr.indexOf(item) === -1? newArr.push(item): 'continue')
// // let newArr1 = arr.filter((item,index,self) => {
// //   return self.indexOf(item) === index
// // })
// // let newArr1 = [...new Set(arr)]
// for()
// console.log(newArr1);


let arr = [1, 2, 1, 3, 3, 5, 5, 6, 6]

// let newArr = [...new Set(arr)]
// let newArr = Array.from(new Set(arr))
// let newArr = []
// arr.forEach(item => newArr.indexOf(item) == -1? newArr.push(item): 'continue');
// let newArr = arr.filter((item, index, self) => {
//   return self.indexOf(item) === index;
// })
let start = arr[0];
for (var i = 1; i< arr.length;i ++) {
  if (arr[i] == start) {
    arr.splice(i,1);
    i --;
  } else {
    start = arr [i]
  }
} 
console.log(arr);