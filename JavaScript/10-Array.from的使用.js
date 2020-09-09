var str = "1,2,3"

function StringToArray(str) {
  var newArr = str.split(',');
  
  console.log(Array.from(newArr));
}

StringToArray(str)


var arr = [1,2,3]

function ArrayToString(arr) {
  var ccc = arr.join('')
  console.log(ccc);
}

ArrayToString(arr)

var arr1 = [1,3,2,4,5]

console.log(arr1.sort().reverse());


var str1 = "The rain in SPAIN falls mainly in the plain"

console.log(str1.match(/ain/ig).length);

console.log(3>2>1);