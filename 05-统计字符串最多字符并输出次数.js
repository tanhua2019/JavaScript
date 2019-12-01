var str = "dsfgdfshfghdfasdfasdfasdddddddddfehgsdfgasdfaf";

function more(str) {
  var newObj = {}
  for (let i = 0; i < str.length; i++) {
    if (!newObj[str.charAt(i)]) {
      newObj[str.charAt(i)] = 1;
    } else {
      newObj[str.charAt(i)] ++;
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