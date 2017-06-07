//---MAP EXERCISES---

//------------------common data------------------

const converter = require('number-to-words')
const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99, -2]
const { map, compose } = require('./fp-utils')

const trace = function(v) {
  console.log(v)
  return v
}

//----------------------------------5---------------------------------

const h = require('hyperscript')
const request = require('request')
const search = (query, callback) => {
  request({
    method: 'GET',
    json: true,
    url: 'http://www.omdbapi.com/?r=json&s=' + query
  }, (e,r,b) => callback(e,b))
}

const img = (url) => h('img', {src: url})

search('batman', (e,b) => {
  // map over results and show movie posters
})




//------------------------------ 4 Next Exercise -----------------------

// const convert = require('color-convert')
// const cssColorList = require('css-color-list')
// const colors = ['red', 'peru', 'orange', 'midnightblue']
//
//
// compose(
//   trace,
//   map(toRgb)
// )(cssColorList())
//
// function toRgb (name) {
//   return `${name} - ${convert.keyword.rgb(name)}`
// }


// function changeColor(item) {
//   return convert.keyword.rgb(item)
// }
//
// console.log(colors.map(changeColor))






//--------------- 3 Using HyperScript(npm install hyperscript) ------------------------
// const h = require('hyperscript')
// const buzzwords = require('buzzwords')
// const li = (w) => h('li', w)
//
// console.log(h('ul', map(li, buzzwords) ).outerHTML)

//
// // -------------- 1/2 convert to words and add 10 with compose ------------------
//
// const converter = require('number-to-words')
// const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99, -2]
// const { map, compose } = require('./fp-utils')
//
// const trace = function(v) {
//   console.log(v)
//   return v
// }
//
// function addTen(number) {
//   return number + 10
// }


// compose(
//   trace,
//   map(converter.toWords),
//   map(addTen)
// )(numbers)
//
// // ----------------convert to words and add 10 with the normal way ----------------
//
// console.log(numbers.map(addTen).map(converter.toWords))
//
//
// // trace(
// //   map(converter.toWords , numbers)
// // )
