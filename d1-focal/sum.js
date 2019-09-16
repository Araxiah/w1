
const args = process.argv.slice(2);

const addNum = function () {
  let args1 = Number(args[0]);
  let args2 = Number(args[1]);
  let sum = args1 + args2;
  return sum;
};
console.log(addNum());