const { swap } = require("./utility");

const bubbleSort = function (arr) {
  let swapped = false;
  do {
    let j = arr.length;
    swapped = false;
    for (let i = 0; i < j; i++) {
      //checking if the current element is greater than the next
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
    j--;
  } while (swapped);
  return arr;
};
let arr = [12, 30, 14, 40, 6, 20, 50, 70, 2, 25, 100, 19, 6, 6, 70];

let sortedArr = bubbleSort(arr);
console.log(sortedArr);
