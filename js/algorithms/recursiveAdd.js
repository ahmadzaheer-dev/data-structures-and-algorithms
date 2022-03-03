const arr = [10, [12, 14, [1], [16, [20]]], 10, 11];
function recursiveAdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (Array.isArray(current)) {
      sum += recursiveAdd(current);
    } else {
      sum += current;
    }
  }
  return sum;
}

console.log(recursiveAdd(arr));
