const { swap } = require("./utility");

//Q1. Rearrange an array with 0 as a pivot
const reArrange = function (arr) {
  let i = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      swap(arr, i, j);
      j = j + 1;
    }
  }
  return arr;
};

let arr = [13, 12, -5, -6, 12, 17, 18, -2];
console.log(reArrange(arr));
