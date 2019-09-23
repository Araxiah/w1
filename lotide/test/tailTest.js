const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail(["hi", "ahh", "cool"]);
assertEqual(result.length, 2);
assertEqual(result[0], "ahh");
assertEqual(result[1], "cool");
