let a = 1
let b = 2

let firstVariable = (a === 0) ? "Верно" : "Неверно"
let secondVariable = (a < 0) ? "Верно" : "Неверно"
let thirdVariable = (a > 0) ? "Верно" : "Неверно"
let fourthVariable = (a >= 0) ? "Верно" : "Неверно"
let fifthVariable = (a <= 0) ? "Верно" : "Неверно"
let sixthVariable = (a != 0) ? "Верно" : "Неверно"
let seventhVariable = (a === "test") ? "Верно" : "Неверно"
let eighthVariable = (a === 1) ? "Верно" : "Неверно"
let ninthVariable = (a > 0 && a < 5) ? "Верно" : "Неверно"
let tenthVariable = (a === 0 || a === 2) ? a + 7 : a / 10
let eleventhVariable = (a <= 1 && b >= 3) ? a + b : a - b
let twelfthVariable = (2 < a > 11 || 6 <= b > 14) ? "Верно" : "Неверно"

console.log(firstVariable)
console.log(secondVariable)
console.log(thirdVariable)
console.log(fourthVariable)
console.log(fifthVariable)
console.log(sixthVariable)
console.log(seventhVariable)
console.log(eighthVariable)
console.log(ninthVariable)
console.log(tenthVariable)
console.log(eleventhVariable)
console.log(twelfthVariable)

// #13
let num = +prompt("Введите номер сезона")

switch (num) {
    case 1:
        console.log("Зима")
        break;
    case 2:
        console.log("Весна")
        break;
    case 3:
        console.log("Лето")
        break;
    case 4:
        console.log("Осень")
        break;
}