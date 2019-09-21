const findKey = function(item, callback) {
  for (let x in item)
    if (callback(item[x])) {
      return x;
    }
}




console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)) // => "noma"