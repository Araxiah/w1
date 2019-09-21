const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂  Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`😔  Assertion Failed: ${actual} !===  ${expected}`);
  }
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hi", "Hi");
assertEqual("Goat", "Goat");
assertEqual(4, 7);


const tail = function(array) {
  let newArray = []
  for(i = 1; i < array.length; i++){
    newArray.push(array[i]);
  }
  return newArray;
}

const result = tail(["hi", "ahh", "cool"]);
assertEqual(result.length, 2);
assertEqual(result[0], "ahh");
assertEqual(result[1], "cool");
