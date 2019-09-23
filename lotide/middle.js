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

module.exports = middle;