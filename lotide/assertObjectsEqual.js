const eqObjects = function(object1, object2) {
  let objOne = Object.keys(object1)
  let objTwo = Object.keys(object2)
  if (objOne.length != objTwo.length) {
    return false;
  }
  for (const key of objOne) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (isArrayTrue(object1[key], object2[key]) === false) {
        return false
      }
    } else {
      if (object1[key] != object2[key]) {
        return false
      }
    }
  }
  return true
}

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🙂  Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`)
  } else {
    console.log(`😔  Assertion Failed: ${inspect(actual)} !===  ${inspect(expected)}`)
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

assertObjectsEqual(cd, dc)
isArrayTrue(cd, dc)
eqObjects(cd, dc)