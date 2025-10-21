"use strict";

const dice = {
  d4: 'd4',
  d6: 'd6',
  d8: 'd8',
  d10: 'd10',
  d12: 'd12',
  d16: 'd16',
  d20: 'd20'
};

function rollDice(diceNotation) {
  const sides = parseInt(String(diceNotation).slice(1));
  return Math.floor(Math.random() * sides) + 1;
}

console.log(rollDice(dice.d20));
