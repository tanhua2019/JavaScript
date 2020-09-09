// 从script(整体代码)开始第一次循环，全局上下文进入函数调用栈（栈底），如果有可执行代码就进行正常的入栈出栈，
// 如果有上面提到的setTimeout和Promise，就将任务分发到各自队列，直到调用栈清空(只剩全局)，
// 然后执行所有的微任务队列（Promise队列），这就是第一次循环。当所有可执行的微任务执行完毕之后，循环再次从宏任务
// （setTimeout队列）开始执行入栈出栈任务分发等，执行完毕，然后再执行所有的微任务，第二次循环结束。。。这样一直循环下去，
// 直到再也没有可执行的任务。这就是JS的循环机制。

setTimeout(function(){
  console.log(1);
},0);
new Promise(function(a,b){
  console.log(2);
  for(var i=0;i<10;i++){
      i==9&&a();
  }
  console.log(3)
}).then(function(){
  console.log(4)
});
console.log(5);