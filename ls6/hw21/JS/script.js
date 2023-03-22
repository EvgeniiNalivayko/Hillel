'use strict'
// const num = +prompt('Введите число:','')
// let isPrime;
// for (let i = 1, s = Math.sqrt(num); i <= s; i++) {
//     isPrime = !(num % i === 0 && num !== 3 && num !== 2);
// }
// console.log(isPrime);

const num = +prompt('Введите число:','');
let isPrime = true;
if (num < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(isPrime);
