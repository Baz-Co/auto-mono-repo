var uniqueRandomArray = require('unique-random-array')
var names = require('./names.json');

var getRandomItem = uniqueRandomArray(names)

module.exports = {
  all: names,
  random: random
}

function random(number) {
  if(number === undefined) {
    return getRandomItem()
  } else {
    var randomItems = []
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem())
    }
    return randomItems
  }
}