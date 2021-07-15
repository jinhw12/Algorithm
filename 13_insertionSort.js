const insertionSort = function (arr) {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= sorted[i - 1]) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (sorted[j] > arr[i]) {
          let left = sorted.slice(0, j);
          let right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }
  return sorted;
};

let output = insertionSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
