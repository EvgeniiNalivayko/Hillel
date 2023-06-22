'use strict';
(function () {
    const arr = {0:1, 1:2, 2:3, 3:4, 4:5, length: 4}

    const symbolIterator = (arr) => {
        let i = 0;
        return {
            next() {
                if (i < arr.length  ) return {done: false, value: arr[i++]}
                return {done: true}
            }
        }
    }

    const iterator = symbolIterator(arr);
    let result = iterator.next();
    while (!result.done){
        console.log(result.value);
        result = iterator.next();
    }

})()