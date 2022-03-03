const getLongestNumber = function (arr) {
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].toString().length;
    if (current > longest) {
      longest = current;
    }
  }
  return longest;
};

const getDigit = function (number, place, longestNumber) {
  const string = number.toString();
  const length = string.length;
  const mod = longestNumber - length;
  return string[place - mod] || 0;
};

const radixSort = function (arr) {
  //step 1: get the longest number
  const longestNumber = getLongestNumber(arr);
  //step 2: create buckets : an array of 10 arrays, one for each number 0 to 9
  const buckets = new Array(10).fill().map(() => []);
  console.log(buckets);
  //step 3: Looping through each digit
  for (let i = longestNumber - 1; i >= 0; i--) {
    // step 3.1: Looping through array to be sorted and inserting elements in buckets
    while (arr.length) {
      const current = arr.shift();
      buckets[getDigit(current, i, longestNumber)].push(current);
    }
    //step 3.2: removing elements from buckets sequentially and pushing back in array

    for (let j = 0; j < buckets.length; j++) {
      while (buckets[j].length) {
        arr.push(buckets[j].shift());
      }
    }
  }
  return arr;
};

let arr = [12, 30, 14, 40, 75, 20, 90, 70, 2, 25, 100, 19, 6, 6, 70];
console.log(radixSort(arr));
