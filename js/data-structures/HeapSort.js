/*
BINARY MAX HEAP

Space Complexity : Constant
Time Complexity: n log n

RULES FOR CREATING A BINARY MAX HEAP
1. Each child of a node should me lower than the node
2. The formula used for left child is 2n + 1
3. The formula used for right child is 2n + 2
For example we have a tree like
                    100
            90              80
        70      60      50      40

* 100: Root node and will have a 0 index
* 90: left child of root, will have index (2(0) + 1) = 1
* 80: right child of root, will have index(2(0) + 2) = 2
* 70: left child of 90, will have index (2(1) + 1) = 3
* 60: right child of 90, will have index (2(1) + 2) = 4
* 50: left child of 80, will have index (2(2) + 1) = 5
* 40: right child of 80, will have index (2(2) + 2) = 6


HEAP SORT ALGORITHM
Example Array: [5, 3, 2, 10, 1, 9, 8, 6, 4, 7]
1. Construct a Binary Heap from array
    1. Start at the middle of the array and construct the tree upwards
    Example: 
        * 1 is the middle which is at the index 4
        * its left child will be (2(4) + 1) = 9 which is the value 7
        * its right child will be (2(4) + 2) = 10 which is out of bound
        * Now we will check whether the parent is greater than the child nodes
        * If not, swap the parent with the largest child
        * In this case 1 < 7 thus swapping
        * [5, 3, 2, 10, 7, 9, 8, 6, 4, 1]
    2. Now we will move backward to index 3 which is 10
    Example:
        * its left child will be (2(3) + 1) = 7 which is the value 6
        * its right child will be (2(3) + 2) = 8 which is the value 4
        * As the parent is greater than children, no need to swap
        * [5, 3, 2, 10, 7, 9, 8, 6, 4, 1]
    3. Now checking index 2 which is 2
    Example:
        * its left child will be (2(2) + 1) = 5 which is the value 9
        * its right child will be (2(2) + 2) = 6 which is the value 8
        * swapping parent with its left child thus parent is 9 and left child will be 2
        * [5, 3, 9, 10, 7, 2, 8, 6, 4, 1]
    4. Now checking index 1 which is 3
        * its left child will be (2(1) + 1) = 3 which is the value 10
        * its right child will be (2(1) + 2) = 4 which is the value 7
        * swapping with the left child
        * [5, 10, 9, 3, 7, 2, 8, 6, 4, 1]
        * Now checking whether 3 is greater than its children
        * 3 children are 6 and 4 thus swapping 3 with 6
        * [5, 10, 9, 6, 7, 2, 8, 3, 4, 1]
    5. Now checking the index 0 which is 5
        * its left child will be at index 1 which is 10
        * its right child will be at index 2 which is 9
        * swapping with the left child
        * [10, 5, 9, 6, 7, 2, 8, 3, 4, 1]
        * Checking whether 5 is greater than its children
        * its children are 6 and 7 thus swapping 5 with 7
        * [10, 7, 9, 6, 5, 2, 8, 3, 4, 1]
        * Now checking if 5 is greater than its new children or not
        * its children are at index 9 and 10 which is 1 so no swapping
    6. Now our tree will look like this
                            10
                7                       9
        6               5       2               8
    3       4       1       

2. Now doing the sorting process taking root and swapping it with the last index and again
   calling the heapify function
*/

const swap = function (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

const heapSort = function (arr) {
  arr = createMaxHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, 0, i);
  }
  return arr;
};

const createMaxHeap = function (arr) {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
  return arr;
};

const heapify = function (arr, index, heapSize) {
  const leftChildIndex = 2 * index + 1;
  const rightChildIndex = 2 * index + 2;
  let greaterValueIndex = index;
  if (
    leftChildIndex < heapSize &&
    arr[leftChildIndex] > arr[greaterValueIndex]
  ) {
    greaterValueIndex = leftChildIndex;
  }
  if (
    rightChildIndex < heapSize &&
    arr[rightChildIndex] > arr[greaterValueIndex]
  ) {
    greaterValueIndex = rightChildIndex;
  }
  if (greaterValueIndex !== index) {
    swap(arr, index, greaterValueIndex);
    heapify(arr, greaterValueIndex, heapSize);
  }
};

let arr = [5, 3, 2, 10, 1, 9, 8, 6, 4, 7, 20, 100];
console.log(heapSort(arr));
