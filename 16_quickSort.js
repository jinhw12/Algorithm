const quickSort = function (arr, transform = (item) => item) {
  // base case
  if (arr.length <= 1) return arr;
  // recur case
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i += 1) {
    if (transform(arr[i]) < transform(pivot)) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left, transform), pivot, ...quickSort(right, transform)];
};

let output = quickSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
