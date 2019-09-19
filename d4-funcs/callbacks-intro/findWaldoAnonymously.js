const findWaldo = function (names, found) {
  names.forEach(function (names, index) {
    if (names === 'Waldo')
      found(index);   // execute callback
  });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function (index) {
  console.log(`Found him at ${index}!`);
});