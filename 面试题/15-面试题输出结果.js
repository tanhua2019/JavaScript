var data = new Date('2019-12-06')
data.setMonth(1)
console.log(data.getFullYear()+'-'+(data.getMonth()+1)+"-"+data.getDate());
//2019-2-06


const sum = (a,b) => {
  return a+b;
}

const c = (a,b) => {
  return a-b;
}

console.log(sum(2,c(3,1))); //4

var User = {
  count: 1,
  getCount: function() {
    return this.count;
  }
}

console.log(User.getCount()); //1

var name = "window"
var obj = {
  name: 'whp',
  getName: function() {
    return function () {
      return this.name;
    }
  }
}

console.log(obj.getName()());  //undefined

console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);
// 1,3,2