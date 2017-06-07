//cmd value
//list
//add Hello World
//remove 1
let todos = ['Remember the milk', 'Write some code', 'Walk on the beach']
const {map, reduce, filter} = require('./fp-utils')
const {append, compose, join, __} = require('ramda')
const args = process.argv.slice(2)
const cmd = args[0]
const values = args.slice(1)

//if else statement

if (cmd === 'ls') {
    print(todos)
} else if (cmd === 'add') {
    fadd(values, todos)
} else if (cmd === 'rm') {
  removeTodo(values, todos)
    console.log('TODO: Remove Item')
}

//functions

function removeTodo(value, todo) {
//instructions
// input
// --------> values == ['1']

//-------------------------------------------------

//print(removeItemByIndex(parseInt(head(values), 10), todos))

todos = compose (
  tap(print),
  removeItem(todos),
  toInteger,
  head
)(values)

}

function tap(fn) {
  return function(v) {
    fn(v)
    return(v)
  }
}

function removeItem(todos) {
  return function(index) {
    return removeItemByIndex(index, todos)
  }
}

function toInteger(s) {
  return parseInt(s,10)
}

function head (array) {
  return array[0]
}

function removeItemByIndex (index, todos) {
  return filter(function(v) {
    return todos[index] === v ? false : true
  }, todos)



//   todos = compose(
//     tap(print),
//     function (index) {
//       return filter(function (v)) {
//        return todos.indexOf(index) === v ? false : true
//      }, todos)
//     },
// function (s) {
//   return parseInt(s, 10)
//     },
//     head
//   )(values)
// }
//
// function fadd(values, todos) {
//   todos = compose (
//     tap(print),
//     append(__, todos),
//     join(' ')
//   )(values)

}

// function add(values) {
//   const newItem = (values.join(' '))
//   todos.push(newItem)
//   print(todos)





function print (list) {
  console.log('')
  console.log('Todos')
  console.log('-----------------------')

  map(function (todo) {
    console.log(todo)
  }, list)

  console.log('-----------------------')
  console.log(
    reduce(function(acc, value) {
      return acc + 1
    },
    0,
    list
  ),
  ' Items Not Complete'
  )

}
