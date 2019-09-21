const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    } else {
      return false;
    }
  }
};

const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1, array2);
  if (result === true) {
    return console.log(`:^) you did it!`);
  } else {
    return console.log(`:^( try again...`);
  }
};


const flatten = function(array) {
  let merged = [].concat.apply([], array);
  return merged;
};
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);