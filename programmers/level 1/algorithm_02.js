function solution(new_id) {
  // 1. 대문자 -> 소문자
  new_id = new_id.toLowerCase();
  // 2. 소문자, 숫자, 빼기, 밑줄, 마침표 제외한 모든 문자 제거
  let new_id_arr = new_id.split("");
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let removeFromArr = [];

  for (let i = 0; i < new_id_arr.length; i++) {
    if (
      !lowerCase.includes(new_id_arr[i]) &&
      !number.includes(new_id_arr[i]) &&
      new_id_arr[i] !== "-" &&
      new_id_arr[i] !== "_" &&
      new_id_arr[i] !== "."
    ) {
      removeFromArr.push(i);
      // 3. 마침표 2번 이상 연속 -> 하나의 마침표
    } else if (new_id_arr[i] === "." && new_id_arr[i + 1] === ".") {
      removeFromArr.push(i);
    }
  }

  for (let i = removeFromArr.length - 1; i >= 0; i--) {
    new_id_arr.splice(removeFromArr[i], 1);
  }
  // 4. 처음과 끝에 위치한 마침표 제거
  if (new_id_arr[0] === ".") {
    new_id_arr = new_id_arr.slice(1);
  }

  if (new_id_arr[new_id_arr.length - 1] === ".") {
    new_id_arr = new_id_arr.slice(0, new_id_arr.length - 1);
  }

  // 5. 빈 문자열이면 "a"를 대입
  if (new_id_arr.length === 0) {
    new_id_arr.push("a");
  }

  // 6. 길이 16자 이상 -> 첫 15개 문자 이외 모두 제거, 제거 후 마침표가 끝에 위치하면 마침표 제거
  if (new_id_arr.length >= 16) {
    new_id_arr = new_id_arr.slice(0, 15);
  }

  if (new_id_arr[new_id_arr.length - 1] === ".") {
    new_id_arr = new_id_arr.slice(0, new_id_arr.length - 1);
  }
  // 7. 길이 2자 이하 -> 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙임
  if (new_id_arr.length <= 2) {
    while (new_id_arr.length <= 2) {
      new_id_arr.push(new_id_arr[new_id_arr.length - 1]);
    }
  }

  new_id = new_id_arr.join("");
  return new_id;
}

//let output = solution("...!@BaT#*..y.abcdefghijklm");
let output = solution("=.=");
console.log(output); //"bat.y.abcdefghi"
