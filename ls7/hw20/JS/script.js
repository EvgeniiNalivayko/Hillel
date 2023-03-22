'use strict';

// let fib = (n = 1) => {
//     let arr = [];
//     for (let i = 0; i <= 100; i++) {
//         n = n[i] + n[i - 1];
//         arr.push(arr[n]);
//     }
//     return arr;
// }
//
// console.log(fib);

let fib = (n) => {
    let prevNum = 0;
    let currNum = 1;
    let i = 0;

    while (i < n - 2) {
        let nextNum = prevNum + currNum;
        prevNum = currNum;
        currNum = nextNum;
        i++;
    }
    return currNum;
}
fib(10)

// function fib(n) {
//     if (n <= 1) return n;
//     else return fib(n - 1) + fib(n - 2);
// }