const utils = require('./fp-utils')
const characters = ['Mickey', 'Donald', 'Goofy', 'Minnie', 'Daisy']

function count(acc, value) {
  return acc + 1
}

function trace(v) {
   console.log(v)
    return v
}

  utils.compose (
    trace,
    utils.reduce(count, 0)
  )(characters)
