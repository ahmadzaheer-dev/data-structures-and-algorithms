//CONSTRAINTS: THE ARRAY SHOULD BE SORTED

let binarySearch = function (arr, num) {
  let min = 0;
  let max = arr.length - 1;
  let mid;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (num === arr[mid]) {
      return mid;
    } else if (num < arr[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return void 0;
};

const arr = [2, 6, 6, 12, 14, 19, 20, 25, 30, 40, 70, 70, 75, 90, 100];

console.log(binarySearch(arr, 3));
