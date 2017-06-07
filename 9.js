const { reduce } = require('./fp-utils')

function map (fn, list) {
  function reducer(acc, value) {
    acc.push(fn(value))
    return acc
  }
  return reduce(reduce, [], list)
}

const result = map( function (v) {
  console.log(v)
  return v + 1
},
[1,2,3]
)

console.log(result)
