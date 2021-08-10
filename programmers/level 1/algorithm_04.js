function solution(scores) {
  function checkNumber(arr, maxOrMin) {
    let count = 0;
    let pos = arr.indexOf(maxOrMin);
    while (pos !== -1) {
      count++;
      pos = arr.indexOf(maxOrMin, pos + 1);
    }
    return count;
  }

  let result = "";
  let grade;
  for (let i = 0; i < scores.length; i++) {
    let number = 0;
    let get = [];
    for (let j = 0; j < scores.length; j++) {
      get.push(scores[j][i]);
    }
    let max = Math.max(...get);
    let min = Math.min(...get);
    if (scores[i][i] === max) {
      number = checkNumber(get, max);
    } else if (scores[i][i] === min) {
      number = checkNumber(get, min);
    }
    if (number === 1) {
      get.splice(i, 1);
    }
    let sum = get.reduce((acc, cur) => acc + cur);
    let average = sum / get.length;
    if (average >= 90) {
      grade = "A";
    } else if (average >= 80 && average < 90) {
      grade = "B";
    } else if (average >= 70 && average < 80) {
      grade = "C";
    } else if (average >= 50 && average < 70) {
      grade = "D";
    } else if (average < 50) {
      grade = "F";
    }
    result = result + grade;
  }
  return result;
}

console.log(
  solution([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ])
);
// let output2 = solution([[50, 90], [50, 87]]);
// console.log(output2); // -> "DA"

// let output3 = solution([[70, 49, 90], [68, 50, 38], [73, 31, 100]]);
// console.log(output3); // -> "CFD"
