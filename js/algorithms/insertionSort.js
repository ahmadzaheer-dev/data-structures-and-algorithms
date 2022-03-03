/*
    ALGORITHM: INSERTION SORT
    HOW IT WORKS: 
        It divides the array starting with one element and then
        increasing by one in each pass. In each pass in that subarray, 
        it places every element to its rightfull place in that subarray.
    
    TIME COMPLEXITY:
        WORST CASE: O(n2)
        BEST CASE: Ω(n)
        AVERAGE CASE: O(n2)

    SPACE COMPLEXITY:
        O(1)
*/

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let insertionValue = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > insertionValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = insertionValue;
  }
  return arr;
};

let arr = [12, 30, 14, 40, 6, 20, 50, 70, 2, 25, 100, 19, 6, 6, 70];

let sortedArr = insertionSort(arr);
console.log(sortedArr);
