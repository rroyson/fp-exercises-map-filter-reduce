
let numbers = [1,2,3,4,5,6,7,8,9,10]

function print (value) {
console.log(value)
}
//built in option
//numbers.forEach(print)

forEach (print, numbers)

function forEach (fn, list) {
  for (let i = 0; i < list.length; i++) {
    fn(list[i])
  }
}
