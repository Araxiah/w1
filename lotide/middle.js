const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array2.length; i++) {
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

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  let midTwo = Math.floor(array.length / 2 + 1);
  let mid = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    return [array[mid - 1], array[midTwo - 1]];
  } else {
    return array[mid];
  }
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3]));// => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);