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


const takeUntil = function(array, callbacks) {
  let arrayStorage = [];
  for (let i = 0; i < array.length; i++) {
    arrayStorage.push(array[i]);
    if (callbacks(array[i])) {
      arrayStorage.pop();
      return arrayStorage;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);