'use strict';
//Задание 1
let a;
let b;
if ((b > 0 && a === b) || !isNaN(b)) {
    //// 1 true
} else {
    ///2 false
}

//Задание 2
let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (numOrStr) {
    case numOrStr === null:
        console.log('вы отменили');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}