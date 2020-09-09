console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
Promise.resolve().then(function () {
  console.log("promise1");
}).then(function () {
  console.log("promise2");
});
console.log("script end");

console.log('打印' + 1);
setTimeout(function () {
  console.log('打印' + 2);
})
new Promise(function (resolve, reject) {
  console.log('打印' + 3);
}).then(
  console.log('打印' + 4));
console.log('打印' + 10);
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('打印' + 5);
  });
}).then(
  console.log('打印' + 6));
setTimeout(function () {
  new Promise(function (resolve, reject) {
    console.log('打印' + 7);
  });
})

console.log('打印' + 1);
setTimeout(function () {
  console.log('打印' + 2);
})
new Promise(function (resolve) {
  console.log('打印' + 3);
  resolve();
}).then(function () {
  console.log(4);
}
);
console.log('打印' + 10);
new Promise(function (resolve) {
  setTimeout(function () {
    console.log('打印' + 5);
  });
  resolve();
}).then(function () {

  console.log('打印' + 6)
});
setTimeout(function () {
  new Promise(function (resolve) {
    console.log('打印' + 7);
  });
})