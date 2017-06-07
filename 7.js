const { wordsToNumbers } = require('words-to-numbers')
<<<<<<< HEAD
const { map, compose, sum, filter,tap, curry } = require('ramda')
=======
const { map, compose, tap, curry, filter } = require('ramda')
>>>>>>> 9f5572e726046eabbd819d979c839a893052adb3

const numbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten'
]

<<<<<<< HEAD
//----------reduce/redux------------------

function count (list) {
  function reducer (accumulator, value) {
    return accumulator + value
  }
  return list.reduce(reducer,0)
}


function sum (list) {
  function reducer (accumulator, value) {
  return accumlator + value
}
return list.reduce(reducer, 0)

/*
acc = 0
value  = 2
---
acc = 1
value = 2
*/
}



// -------compose/curry---------



// function divisibleBy(num) {
//   return function(v) {
//     return v % num === 0
//  }
// }
const divisibleBy = curry(function (number, value) {
  return value % number ===0
})



const printSumDivThree = compose (
  tap(function(v){
    console.log(v)
  }),
  sum(),
=======
function count(list) {
  function reducer(accumulator, value) {
    return accumulator + 1
  }
  return list.reduce(reducer, 0)
}

function sum(list) {
  function reducer(accumulator, value) {
    return accumulator + value
  }

  return list.reduce(reducer, 0)
}

const divisibleBy = curry(function(number, value) {
  return value % number === 0
})

const printSumDivThree = compose(
  tap(function(v) {
    console.log(v)
  }),
  sum,
>>>>>>> 9f5572e726046eabbd819d979c839a893052adb3
  filter(divisibleBy(3)),
  map(wordsToNumbers)
)

printSumDivThree(numbers)
