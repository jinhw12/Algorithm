const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = 0;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap++;
      }
    }
    if (swap === 0) {
      break;
    }
  }
  return arr;
};

// 재귀를 배열의 크기만큼 반복해야하니까, 재귀 횟수를 알려주는 변수 (counter) 선언
// base case : counter = arr의 길이와 같을 경우에 재귀 종료
// arr를 순회하여 arr[i]가 arr[i + 1]보다 클 경우 스왑
// 만약 arr가 스왑하기 전 배열과 같을 경우, 더 이상 스왑이 필요없으므로 리턴
// counter를 1을 올려서 재귀함수를 계속 돌린다

/*
첫 번째 요소가 두 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
두 번째 요소와 세 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
1, 2를 마지막까지 반복합니다. (마지막에서 두 번째 요소와 마지막 요소를 비교)
1~3의 과정을 한 번 거치게 되면, 가장 큰 요소가 배열의 마지막으로 밀려납니다.
1~3의 과정을 첫 요소부터 다시 반복합니다.
5를 통해 두 번째로 큰 요소가 배열의 마지막 바로 두 번째로 밀려납니다.
1~3의 과정을 총 n번(배열의 크기) 반복합니다
*/

let output = bubbleSort([3, 2, 1]);
console.log(output); // --> [1, 2, 3]
