const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.round((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2

output = binarySearch([4, 5, 6, 9], 100);
console.log(output); // --> -1
