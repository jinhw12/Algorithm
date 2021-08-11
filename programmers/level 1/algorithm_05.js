//크레인 인형뽑기 게임

function solution(board, moves) {
  let stack = [0];
  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        stack.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        if (stack[stack.length - 1] === stack[stack.length - 2]) {
          stack.pop();
          stack.pop();
          count += 2;
        }
        break;
      }
    }
  }
  return count;
}
