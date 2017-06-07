//------FILTER EXERCISES---------


const {filter, map, compose} = require('ramda')
const trace = function(v) {
  console.log(v)
  return v
}

//-------------------- 1: filter even numbers ---- 2: filter divisibleBy5 ----------------

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//------my way

 const divisibleBy5 = num => num % 5 === 0
 const showEven = num => num % 2 === 0
 const nums = arr => arr

console.log(numbers.map(nums).filter(showEven))

//------with compose
compose(
  trace,
  filter(divisibleBy5),
  map(nums)
)(numbers)


//------------- 3: Filter all buzzwords that contains cloud, html, and data ---------------------------

const h = require('hyperscript')
const buzzwords = require('buzzwords')
const li = (w) => h('li', w)




const renderBuzzwords = compose(
  map(li),
  filter(contains(['cloud', 'html', 'data']))
)

console.log(h('ul', renderBuzzwords(buzzwords)).outerHTML)

function contains(keepers) {
  return function (buzzword) {
    return keepers.find(keeper => hasText(buzzword, keeper))
  }
}

function hasText (compareString, queryString) {
  return RegExp(queryString).test(compareString)
}
