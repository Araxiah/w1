const eqArrays = function (array1, array2) {
  for (i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
      return true
    } else {
      return false
    }
  }
}

const assertArraysEqual = function (array1, array2) {
  let result = eqArrays(array1, array2)
  if (result === true) {
    return console.log(`:^) you did it!`)
  } else {
    return console.log(`:^( try again...`)
  }
}

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i]
    console.log(char)
    if (!results[char]) {
      results[char] = []
    }
    results[char].push(i)
  }
  console.log(results)
  return results;
}


letterPositions("hello");