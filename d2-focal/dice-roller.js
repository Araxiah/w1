function rollDice(num) {
  let number = num
  let diceNumber = [];

  for (i = 0; i < num; i++) {
    diceNumber.push(Math.floor((Math.random() * 6) + 1))
  }

  diceNumber = diceNumber.toString().replace(/,/g, ", ")
  return `You rolled ${number} dice: ${diceNumber}`
}

console.log(rollDice(process.argv.splice(2)))

