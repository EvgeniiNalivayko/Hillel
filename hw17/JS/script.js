'use strict'
const padString = (str, num, sym = '', bool = true) => {
    if (typeof str !== 'string') throw new Error('error string');
    if (isNaN(num) || num !== 'number') throw new Error('error number');
    if (typeof sym !== 'string' || sym.length !== 1 ) throw new Error('error symbol');

    let result = str;

    if (str.length < num && bool) {
        for (let i = 0; i <= (num - str.length); i++) {
            result += sym;
        }
    } else if (str.length < num && !bool) {
        for (let i = 0; i <= (num - str.length); i++) {
            result = sym + str;
        }
    } else {
        result = str.substring(0, num);
    }
    return result;
}

console.log(padString('hello', 12, '*',false));
