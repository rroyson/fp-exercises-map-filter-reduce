const {curry} = require('ramda')

module.exports = {
  forEach: forEach,
  map: map,
  filter: filter,
  reduce: curry(reduce),
  compose: compose
}

// pure functions


function reduce(reducer, acc, list) {
  forEach(function(x) {
    acc = reducer(acc, x)
  }, list)
  return acc
}

function compose(...fns) {
  function reducer (acc, fn) {
    return fn(acc)
  }
  return function(x) {
    return reduce(reducer, x, fns.reverse())
  }
}

function filter(fn, list) {
  let results = []
  forEach(function(v) {
    if (fn(v)) {
      results.push(v)
    }
  }, list)
  return results
}

function map(fn, list) {
  let results = []
  forEach(function(v) {
    const result = fn(v)
    results.push(result)
  }, list)
  return results
}

function forEach(fn, list) {
  for (let i = 0; i < list.length; i++) {
    fn(list[i])
  }
}
