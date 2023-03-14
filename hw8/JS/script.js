'use strict';
//Задание 1
// if ((b > 0 && a === b) || !isNaN(b)) {
//     //// 1 true
// } else {
//     ///2 false
// }

//Задание 2
const numOrStr = prompt('input number or string');

switch (true) {
    case numOrStr === null:
        console.log('вы отменили');
        break;
    case (numOrStr.trim() === ''):
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}