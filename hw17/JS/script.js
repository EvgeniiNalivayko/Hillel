'use strict'
const padString = (str, num, sym = '', bool = true) => {
    if (typeof str !== 'string') throw new Error('error string');
    if (isNaN(num) || num === 0 || num === null) throw new Error('error number');
    if (typeof sym !== 'string' || sym.length !== 1 ) throw new Error('error symbol');

    let result = str;

    if (str.length < num && bool === true) {
        for (let i = 0; i <= (num - str.length); i++) {
            result += sym;
        }
    } else if (str.length < num && bool === false) {
        for (let i = 0; i <= (num - str.length); i++) {
            result = sym + str;
        }
    } else {
        result = str.substr(0, num);
    }
    return result;
}

console.log(padString('hellowww', 12, '*',false));
