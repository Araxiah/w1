// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`🙂  Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`😔  Assertion Failed: ${actual} !===  ${expected}`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hi", "Hi");
assertEqual("Goat", "Goat");
assertEqual(4, 7);

const head = function (array) {
  return array[0];
};

//Test code for 2 functions.
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));