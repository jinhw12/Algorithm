//toy problem 01
function orderOfPresentation(N, K) {
  // TODO: 여기에 코드를 작성합니다.
  let order = [];
  const factorial = (n) => {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };
}
let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

output = orderOfPresentation(5, [1, 3, 2, 4, 5]);
console.log(output); // 6
