'use strict';
(function () {
    const str = "abracadabra";
    const uniqueSymbol = str => {
        const unique = new Set()

        for (let item of str) {
            unique.add(item)
        }

        return unique.size;
    }
    console.log(uniqueSymbol(str));
})()