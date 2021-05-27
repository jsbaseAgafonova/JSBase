console.log("===== Task 2 =====")
let limit = 7
while (true) {
    let num = prompt(`Введите число от 0 до ${limit}`)
    if (num > 7) {
        alert("Ошибка!");
    } else {
        for (i=1; i<num; i++) {
            console.log("*".repeat(i));
        }
        break;
    }
}
