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


const tail = function (array) {
  let head = array[0]
  let tail = array.slice(1)
  return tail
}

const result = tail(["hi", "ahh", "cool"]);
assertEqual(result.length, 2);
assertEqual(result[0], "ahh");
