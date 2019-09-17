const eqArrays = function (array1, array2) {
  for (i = 0; i < array2.length; i++) {
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
    console.log(`:^) you did it!`)
  } else {
    console.log(`:^( try again...`)
  }
}