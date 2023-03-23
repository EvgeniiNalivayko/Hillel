'use strict';

let fib = (n = 1) => {
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

