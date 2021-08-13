function solution(numbers, hand) {
  hand === "left" ? (hand = "L") : (hand = "R");
  let answer = "";
  // 위치 저장하는 변수
  let posL = "*";
  let posR = "#";
  // numbers 순회
  for (let i = 0; i < numbers.length; i++) {
    // 1, 4, 7 -> L + 위치 변경
    if ([1, 4, 7].includes(numbers[i])) {
      posL = numbers[i];
      answer += "L";
    }
    // 3, 6, 9 -> R + 위치 변경
    else if ([3, 6, 9].includes(numbers[i])) {
      posR = numbers[i];
      answer += "R";
      // 2, 5, 8, 0 ->  위치에 따라 L or R + 위치 변경
    } else {
      if (posFinder(posL, numbers[i]) > posFinder(posR, numbers[i])) {
        posR = numbers[i];
        answer += "R";
      } else if (posFinder(posL, numbers[i]) < posFinder(posR, numbers[i])) {
        posL = numbers[i];
        answer += "L";
      } else {
        answer += hand;
        hand === "L" ? (posL = numbers[i]) : (posR = numbers[i]);
      }
    }
  }
  return answer;
}

function posFinder(cur, target) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let curPos;
  let targetPos;
  for (let i = 0; i < keypad.length; i++) {
    for (let j = 0; j < keypad[i].length; j++) {
      if (keypad[i][j] === cur) {
        curPos = [i, j];
      }
      if (keypad[i][j] === target) {
        targetPos = [i, j];
      }
    }
  }
  let distance =
    Math.abs(curPos[0] - targetPos[0]) + Math.abs(curPos[1] - targetPos[1]);
  return distance;
}

let output = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
console.log(output); //"LRLLLRLLRRL"
let output2 = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
console.log(output2); //"LRLLRRLLLRR"
let output3 = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right");
console.log(output3); //"LLRLLRLLRL"
