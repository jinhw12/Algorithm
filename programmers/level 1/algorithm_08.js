/* 하샤드 수
문제 설명

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/
function solution(x) {
  let string = x.toString();
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }

  return x % Number(sum) === 0 ? true : false;
}

//입출력 예

console.log(solution(10)); //true
console.log(solution(12)); //true
console.log(solution(11)); //false
console.log(solution(13)); //false