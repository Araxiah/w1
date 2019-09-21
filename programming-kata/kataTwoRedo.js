const conditionalSum = function(array, condition) {
  let sumNum = 0;
  for (let i = 0; i < array.length; i++) {
    if (condition === "even" && array[i] % 2 === 0) {
      sumNum += array[i];
    }
    if (condition === "odd" && array[i] % 2 !== 0) {
      sumNum += array[i];
    }
  }
  return sumNum;
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));