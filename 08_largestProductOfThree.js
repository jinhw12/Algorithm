const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  const sorted = arr.slice().sort((a, b) => a -b);
  const N = arr.length;
  const left = sorted[N - 3] * sorted[N - 2] * sorted[N - 1];
  const right = sorted[0] * sorted[1] * sorted[N - 1];
  return Math.max(left, right);
};

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
