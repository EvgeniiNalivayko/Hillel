'use strict';
(function () {
    const str = "abracadabra";
    const unique = new Set()
    const uniqueSymbol = str => {

        for (let item of str) {
            unique.add(item)
        }
        return unique.size;
    }
    console.log(uniqueSymbol(str));
})()