var arr = [998, 645, 68, 324, 213, 15, 12, 16, 59, 98, 394, 43 ];

function swap(index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function heapSort(arr) {
  var middle = Math.floor(arr.length/2);
  var resultArr = [];
    
  function heapify(i) {
    var left;
    var right;
    var max;

    // while(true) {
    //   left = 2 * parent + 1;
    //   right = 2 * parent + 2;
    //   max = parent;

    //   if (left < arr.length && arr[left] > arr[max]) {
    //     max = left;
    //   }

    //   if (right < arr.length && arr[right] > arr[max])  {
    //     max = right;
    //   }
      
    //   if (max == parent) {
    //     break;
    //   }

    //   swap(parent, max);
    //   parent = max;

    // }
   
    // while (true) {
    //   var left = 2 * parent + 1;
    //   var right = 2 * parent + 2;
    //   var max = right;
    //   if (max < arr.length) {
    //     if (arr[right] < arr[left]) {
    //       max = left;
    //     }

    //     swap(parent, max);
    //     parent = max;
    //   } else {
    //     break;
    //   }
    // }

    while(i != 0) {
      var parent = Math.round((i - 1) / 2);
      // console.log(i, parent);
      // console.log(arr[i], arr[parent]);
      if (arr[i] <= arr[parent]) {
        break;
      } else {
        swap(i, parent);
      }
      i = parent
    }

  }


    
  for (var i=arr.length-1; i >= 0; i--) {
    heapify(i);
  }

  // console.log(arr);

  for (var i = arr.length-1; i >= 0; i--) {
    console.log(arr);
    var root = arr.shift();
    // arr.unshift(arr.pop());
    resultArr.unshift(root);
    
    heapify(i);
  }

  console.log(resultArr);
}

heapSort(arr)