console.log("===== Task 1 =====")
let a = +prompt("Введите число")
let b = +prompt("Введите число")
let c = +prompt("Введите число")
if (a==b || b==c || c==a) {
    alert("Error");
} else {
    let avarage = (a+b+c)/3;
alert (`Ваше среднее число ${avarage}`)
console.log (`Ваше среднее число ${avarage}`);
}
