const balancedBrackets = function (str) {
  const opener = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const closer = ")}]";
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] in opener) {
      stack.push(str[i]);
    } else if (closer.includes(str[i])) {
      const top = stack.pop();
      const pair = opener[top];
      if (pair !== str[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// let output = balancedBrackets("(");
// console.log(output); // // -> false

// output = balancedBrackets("()");
// console.log(output); // --> true

//Advanced
let output = balancedBrackets("[](){}");
console.log(output); // --> true

output = balancedBrackets("[({})]");
console.log(output); // --> true

let output3 = balancedBrackets("[(]{)}");
console.log(output3); // --> false
