const powerSet = function (str) {
  const sorted = str.split("").sort();
  const reduced = sorted.reduce((acc, cur) => {
    if (acc[acc.length - 1] === cur) {
      return acc;
    } else {
      return acc.concat(cur);
    }
  });

  const result = [];
  const pickOrNot = (idx, subset) => {
    if (idx === reduced.length) {
      result.push(subset);
      return;
    }
    pickOrNot(idx + 1, subset);
    pickOrNot(idx + 1, subset + reduced[idx]);
  };
  pickOrNot(0, "");
  return result.sort();
};

// let output1 = powerSet("abc");
// console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet("jjump");
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']
