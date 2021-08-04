function fibonacci(n) {
  let memo = [0, 1];
  if (memo[n] !== undefined) {
    return memo[n];
  } else {
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
  }
}

let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34
