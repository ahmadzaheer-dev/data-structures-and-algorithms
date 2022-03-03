const quickSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  let smallerArr = [];
  let largerArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      smallerArr.push(arr[i]);
    } else {
      largerArr.push(arr[i]);
    }
  }

  return [...quickSort(smallerArr), pivot, ...quickSort(largerArr)];
};

let arr = [12, 30, 14, 40, 75, 20, 90, 70, 2, 25, 100, 19, 6, 6, 70];

let sortedArr = quickSort(arr);
console.log(sortedArr);
