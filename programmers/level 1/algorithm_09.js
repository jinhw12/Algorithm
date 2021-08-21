/* 행렬의 덧셈
문제 설명

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
*/
function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let arr = [];
    for (let j = 0; j < arr1[i].length; j++) {
      arr.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(arr);
  }
  return result;
}

//입출력 예시
let output = solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
console.log(output); //[[4,6],[7,9]]
let output2 = solution([[1], [2]], [[3], [4]]);
console.log(output2);

/*
[[1,2], [[3,4],
[2,3]]  [5,6]]

result[0][0] = arr1[0][0] + arr2[0][0]
result[0][1] = arr1[0][1] + arr2[0][1]
result[1][1] = arr1[1][0] + arr2[1][0]
result[1][2] = arr1[1][1] + arr2[1][1]
*/
