// var arr = [3,342, 23, 12, 88,2323]
// // 1. 通过冒泡排序来实现数组排序
// // 第一层i循环是遍历的趟数 例如5个数总共需要遍历四趟 因为最后一趟两个数对比直接出结果
// // 第二层j循环是每一趟比较的次数，例如5个数需要比较四次，由于每一趟排除一个最大的不用再去比较，所以要减去趟数
// // for (var i = 0; i < arr.length - 1; i++) {
// //   for (var j = i; j < arr.length - 1 - i; j++) {
// //     arr[j] > arr[j + 1] ? [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]] : [arr[j], arr[j + 1]]
// //   }
// // }
// // console.log(arr);
// // 数组的两个值交换值可以通过引入变量来做 var temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp;

// // 为什么return a-b可以决定升降序？理解成在26个字母中a到b的意思，在26个字母中b比a大，所以写成a-b就是升序，写成b-a就是降序。
// // console.log(arr.sort((a, b) => a - b));
// // console.log(arr.sort((a, b) => b - a));

// //Javascript中Math.max.apply和Math.max的区别

// console.log(Math.max('1','4','7','88'));
// console.log(Math.max.apply(null,arr));