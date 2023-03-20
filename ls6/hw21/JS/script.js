// 4 час выполнения
// const num1 = +prompt('Введите число:')
// let bool2;
// nextPrime:
//     for (let i = 2; i <= num1; i++) {
//         for (let j = 2; j < i; j++) {
//             if (num1 % j === 0 && num1 !== 2 && num1 !== 3) {
//                 bool2 = false;
//                 continue nextPrime;
//             } else bool2 = true;
//         }
//     }
// console.log(bool2);
//

//6 час выполнения
// const num = +prompt('Введите число:','')
// let isPrime;
// for (let i = 1, s = Math.sqrt(num); i <= s; i++) {
//     isPrime = !(num % i === 0 && num !== 3 && num !== 2);
// }
// console.log(isPrime);

//8 час выполнения(заработал ГПТ)
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
