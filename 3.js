const utils = require ('./utils')


//map
let numbers = [1,2,3,4,5,6,7,8,9,10]
const square = function(v) {
  return v * v
}

console.log(utils.map(square, numbers))
