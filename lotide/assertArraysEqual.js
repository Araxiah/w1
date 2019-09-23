const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1, array2);
  if (result === true) {
    return console.log(`:^) you did it!`);
  } else {
    return console.log(`:^( try again...`);
  }
};

module.exports = assertArraysEqual;