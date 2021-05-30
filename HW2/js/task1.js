console.log("===== Task 1 =====")
let a = prompt("Введите число")
let b = prompt("Введите число")
let c = prompt("Введите число")
if (a==b || b==c || c==a) {
    alert("Error");
} else {
    var varage = ((+a + +b+ +c)/3);
alert (`Ваше среднее число ${varage}`)
console.log (`Ваше среднее число ${varage}`);
}
