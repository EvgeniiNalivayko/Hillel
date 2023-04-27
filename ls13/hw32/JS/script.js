'use strict';
(function () {
    const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
    const myFlat = (arr) => {
        const newArr = [];
        const flatten = arr => {
            arr.forEach(el => (Array.isArray(el) ? flatten(el) : newArr.push(el)));
        }
        flatten(arr);
        return newArr;
    }
    const flat = myFlat(arr4);
    console.log(flat);
})()