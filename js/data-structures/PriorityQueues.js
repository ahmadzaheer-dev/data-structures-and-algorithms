/* 
HEAP PRIORITY QUEUES
Value will be the priority
*/

// function to swap two elements in array
const swap = function (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

// returns the maximum priority value
const heapMax = function (arr) {
  return arr[0];
};

// dequeues the top priority and returns the value
const extractHeapMax = function (arr) {
  if (arr.length < 1) {
    return;
  }
  max = arr[0];
  arr[0] = arr[arr.length - 1];
  arr.pop();
  heapify(arr, 0, arr.length);
  return max;
};

// returns the parent of an index
const getParentIndex = function (arr, index) {
  let mod = index % 2;

  if (mod === 0) {
    mod = 2;
  }
  let parentIndex = Math.floor((index - mod) / 2);
  return parentIndex;
};

// changes the priority of a certain element
const increasePriority = function (arr, index, priority) {
  if (index > arr.length - 1) {
    return;
  }
  if (priority < arr[index]) {
    return;
  }
  arr[index] = priority;
  let parentIndex = getParentIndex(arr, index);
  while (index > 0 && arr[parentIndex] < arr[index]) {
    swap(arr, parentIndex, index);
    index = parentIndex;
    parentIndex = getParentIndex(arr, index);
  }
  return arr;
};

// adds the task in the queue
const addTask = function (arr, priority) {
  arr.unshift(priority);
  heapify(arr, 0, arr.length);
  return arr;
};

// function that creates the max heap
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

let arr = [];

arr = addTask(arr, 8);
arr = addTask(arr, 9);
arr = addTask(arr, 10);
arr = addTask(arr, 5);
arr = addTask(arr, 12);
arr = addTask(arr, 11);
console.log(increasePriority(arr, 3, 13));
