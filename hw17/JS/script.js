'use strict'
const padString = (str, num, sym = ' ', bool = true) => {
    if (typeof str !== 'string') throw new Error('error string');
    if (typeof num !== 'number') throw new Error('error number');
    if (typeof sym !== 'string' || sym.length !== 1) throw new Error('error symbol');

    let result = str;

    if (str.length < num) {
        const diff = num - str.length;

        if (bool) result = str + sym.repeat(diff);
        else result = sym.repeat(diff) + str;
    } else {
        result = str.substring(0, num);
    }

    return result;
};

console.log(padString('hello', 12, '*', false));

