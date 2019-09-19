const findWaldo = function (names, found) {

  names.forEach(function (names, index) {
    if (names === 'Waldo')
      found(index);   // execute callback
  });
}

const actionWhenFound = function (i) {
  console.log(`Found him at ${i}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);