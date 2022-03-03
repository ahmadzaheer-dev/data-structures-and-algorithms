//MERGE FUNCTION OR STITCHING FUNCTION
const merge = function (left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  //Adding Remaining element in left
  while (left.length > 0) {
    result.push(left.shift());
  }

  //Adding Remaining element in right
  while (right.length > 0) {
    result.push(right.shift());
  }
  return result;
};

//MERGE SORT FUNCTION
const mergeSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  const length = arr.length;
  const mid = Math.floor(length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  const leftSorted = mergeSort(subArr1);
  const rightSorted = mergeSort(subArr2);
  return merge(leftSorted, rightSorted);
};

let arr = [12, 30, 14, 40, 6, 20, 50, 70, 2, 25, 100, 19, 6, 6, 70];

let sortedArr = mergeSort(arr);
console.log(sortedArr);
