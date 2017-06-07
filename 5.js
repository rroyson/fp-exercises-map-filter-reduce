const utils = require('./fp-utils')

// filters
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function print(v) {
  console.log(v)
}

function isEven(v) {
  return  divisibleBy(2)(v)
}

//curry function
// function curry (fn) {
//
//   return function (...args) {
//     if (args.length === 2) {
//       fn.apply(null, args)
//     }
//     if (args.length == 1) {
//       return function (a) {
//         args.push(a)
//         fn.apply(null, args)
//       }
//     }
//   }
// }

const divisibleBy = curry(function (number, value) {
  return value % number ===0
})

function divisibleBy(number) {
  return function (v) {
    return v % number === 0
  }
}

const newList = utils.filter(isEven, numbers)

utils.forEach(print, newList)
