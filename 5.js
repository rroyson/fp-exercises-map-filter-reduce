const utils = require('./fp-utils')

// filters
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function print(v) {
  console.log(v)
}

function isEven(v) {
  return  divisibleBy(2)(v)
}

function divisibleBy(number) {
  return function (v) {
    return v % number === 0
  }
}

const newList = utils.filter(isEven, numbers)

utils.forEach(print, newList)
