function mixer(arr) {
  var j = arr.length;
  var i;
  var temp;

  while (j > 0) {
    // i = Math.floor(Math.random() * j);
    i = Math.floor(j/2);
    console.log(i);
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp; 
    j--;
    // if (arr[i] > arr[i+1] && arr[j] > arr[j+1]) {
    //   j--;
    // }
  }



  return arr;
}

var arr = [1, 68, 213, 1, 59, 394, 43, 12, 1, 324, 1, 999, 1];
console.log(mixer(arr));