let dfs = function (node) {
  let res = [node.value];
  console.log(res);
  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      console.log(res);
      res = res.concat(dfs(node.children[i]));
    }
  }
  console.log(res);
  return res;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = dfs(root);
console.log(output); // --> [1, 2, 4, 5, 3]
console.log(root);

// leaf1.addChild(new Node(6));
// rootChild2.addChild(new Node(7));
// output = dfs(root);
// console.log(output); // --> [1, 2, 4, 6, 5, 3, 7]
