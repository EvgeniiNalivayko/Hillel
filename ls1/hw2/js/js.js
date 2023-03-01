'use strict';

// const a = Number(prompt('Enter the first number',''));
// const b = Number(prompt('Enter the second number',''));
//
// console.log(`Результат: ${a} + ${b} =` ,a + b);
// console.log(`Результат: ${a} - ${b} =` ,a - b);
// console.log(`Результат: ${a} / ${b} =` ,a / b);
// console.log(`Результат: ${a} * ${b} =` ,a * b);


/////////////////////////////////////////////

function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    }

    document.getElementById("result").innerHTML = result;
}

document.getElementById("calculate").addEventListener("click", calculate);


