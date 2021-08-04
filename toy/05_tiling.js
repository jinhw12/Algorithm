let tiling = function (n, memo = [0, 1, 2]) {
  // TODO: 여기에 코드를 작성합니다.
  if (memo[n] !== undefined) {
    return memo[n];
  }
  return (memo[n] = tiling(n - 1, memo) + tiling(n - 2, memo));
};

let output = tiling(2);
console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5

output = tiling(7);
console.log(output); // --> 21

/* 
tiling (1) => 1
2 | a
1 | a

tiling (2) => 2
2 | a b
1 | a b 

2 | a a
1 | b b

tiling (3) => 3
2 | a b b
1 | a c c

2 | a b c
1 | a b c

2 | a a c
1 | b b c

tiling (4) => 5
2 | a b c d
1 | a b c d 

2 | a a c c
1 | b b d d 

2 | a b c c
1 | a b d d 

2 | a a c d
1 | b b c d 

2 | a b b d
1 | a c c d 
*/
