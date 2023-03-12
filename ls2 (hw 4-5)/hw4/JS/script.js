'use strict';

const operator = prompt('Выберите операцию: add(+), sub(-), mult(*), div(/)', '');
if (operator === null || operator === '') {
    alert('Вы не ввели данные для операции')
} else {
    const num1 = Number(prompt('Введите первое число:', ''));
    const num2 = Number(prompt('Введите второе число:', ''));
    if (isNaN(num1) || isNaN(num2)) {
        alert('Некоректный ввод чисел')
    } else {
        let result;
        if (operator === '+') {
            result = num1 + num2;
            alert(`Результат: ${num1} + ${num2} = ${result}`)
        } else if (operator === '-') {
            result = num1 - num2;
            alert(`Результат: ${num1} - ${num2} = ${result}`)
        } else if (operator === '*') {
            result = num1 * num2;
            alert(`Результат: ${num1} * ${num2} = ${result}`)
        } else if (operator === '/') {
            result = num1 / num2;
            alert(`Результат: ${num1} / ${num2} = ${result}`)
        } else {
            alert('Вы не следовали инструкции')

        }
    }
}


const operator = prompt('Выберите операцию: add(+), sub(-), mult(*), div(/)', '');
if (operator === null || operator === '') {
    alert('Вы не ввели данные для операции')
} else {
    const num1 = Number(prompt('Введите первое число:', ''));
    const num2 = Number(prompt('Введите второе число:', ''));
    if (isNaN(num1) || isNaN(num2)) {
        alert('Некоректный ввод чисел')
    } else {
        let result;
        if (operator === '+') {
            result = num1 + num2;
            alert(`Результат: ${num1} + ${num2} = ${result}`)
        } else if (operator === '-') {
            result = num1 - num2;
            alert(`Результат: ${num1} - ${num2} = ${result}`)
        } else if (operator === '*') {
            result = num1 * num2;
            alert(`Результат: ${num1} * ${num2} = ${result}`)
        } else if (operator === '/') {
            result = num1 / num2;
            alert(`Результат: ${num1} / ${num2} = ${result}`)
        } else {
            alert('Вы не следовали инструкции')

        }
    }
}

