'use strict'
const base = prompt('Введите основание степени:', '')
const exponent = prompt('Введите показатель степени:', '')

let exponentiation = (a, b = 1) => {
    if (isNaN(a) || isNaN(b)) return 'some error'
    else if (a === null || b === null) return 'some error'
    else return Math.pow(a, b)
};

const result = exponentiation(base, exponent);
alert(result);
