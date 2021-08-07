function solution(nums) {
  // 1. 주어진 포켓몬 종류
  let allTypes = [...new Set(nums)];
  // 2. 가져갈 수 있는 포켓몬 수
  let limit = nums.length / 2;
  // 1이 2보다 크면 2를, 아니면 1를 리턴
  return allTypes.length > limit ? limit : allTypes.length;
}
