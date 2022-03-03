/*
    ALGORITHM: SELECTION SORT
    HOW IT WORKS: 
        In each pass it finds the minumum and places it to its right position
    
    TIME COMPLEXITY:
        WORST CASE: O(n2)
        BEST CASE: Ω(n2)
        AVERAGE CASE: O(n2)

    SPACE COMPLEXITY:
        O(1)
*/

const { swap } = require("./utility");

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minimumIndex = i;
    let j = i;
    //Inner loop finds the minimum index
    for (j; j < arr.length; j++) {
      if (arr[j] < arr[minimumIndex]) {
        minimumIndex = j;
      }
    }

    //Swappin the minimum value with its rightful position element
    swap(arr, i, minimumIndex);
  }
  return arr;
};

let arr = [12, 30, 14, 40, 6, 20, 50, 70, 2, 25, 100, 19, 6, 6, 70];

let sortedArr = selectionSort(arr);
console.log(sortedArr);
