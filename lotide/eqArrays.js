const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂  Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`😔  Assertion Failed: ${actual} !===  ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (i = 0; i < array2.length; i++) {
    if (array1[i] == array2[i]) {
      return true
    } else {
      return false
    }
  }
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false)
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) 