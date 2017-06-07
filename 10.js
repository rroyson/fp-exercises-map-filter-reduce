const {reduce} = require('./fp-utils')

const numbers = [1,2,4,5,6]

function filter (fn, list) {
  function reducer (acc, value) {
    return fn(value) ? acc.concat([value]) : acc
  }
  return reduce(reducer, [], list)
}

console.log(filter(function (v){
  return v % 2 === 0
}, numbers)
)
