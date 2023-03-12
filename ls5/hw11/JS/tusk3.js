'use strict';
const num2 = prompt('Ввести целое число', '');

let length1 = num2.length;
let positiveNum;

if (num2 > 0) positiveNum = 'положительное';
else {
    positiveNum = 'отрицательное'
    length1 = num2.length - 1;
}

let digit;
if (length1 < 2) digit = 'однозначное';
else if (length1 < 3) digit = 'двузначное';
else if (length1 < 4) digit = 'трехзначное';
else if (length1 < 5) digit = 'четырехзначное';
else digit = 'n-значное'
alert(`Число ${num2} ${digit} ${positiveNum}`);
