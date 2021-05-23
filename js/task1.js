console.log("===== Task 1 =====")
let x1 = prompt("Введите значение x1")
let y1 = prompt("Введите значение y1")
let x2 = prompt("Введите значение x2")
let y2 = prompt("Введите значение y2")
 
let k = (y1 - y2) / (x1 - x2)
console.log(`k is: ${k}`)

let b = y2 - k*x2
console.log(`b is: ${b}`)

let result = `y = ${k}*x + ${b}`

console.log(`Result is: ${result}`)
