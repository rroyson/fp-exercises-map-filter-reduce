module.exports = {
  forEach: forEach,
  map: map,
  filter: filter
}

// pure functions
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
