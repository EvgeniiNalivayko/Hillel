'use strict'
//1
let arr = ['a', 'b', 'c', 'd'];
let str = arr.slice(0, 2).join('+') + ', ' + arr.slice(2, 4).join('+');
//2
let arr2 = [2, 5, 3, 9];
let result = arr2.reduce(function (acc, curr, index) {
    if (index % 2 === 0) {
        acc += curr * arr2[index + 1];
    }
    return acc
}, 0);
console.log(result);
//3
let arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let newArr3 = arr3[1][0];
console.log(newArr3);
//4
const obj = {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'}
console.log(obj.js[0]);
//5
let arr5 = [];
arr5.unshift('x', 'xx', 'xxx');
//6
let arr6 = [];
arr6.unshift(1, 22, 333);
//7
const arrayFill = (element, length) => {
    return Array(length).fill(element);
};
//8
let arr8 = [1, 2, 3, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 2];

const result2 = arr8.reduce((acc, element) => {
    if (acc.sum <= 10) {
        acc.sum += element;
        acc.count += 1;
    }
    return acc;
}, {sum: 0, count: 0}) //4 элемента
//9
const arr9 = [1, 2, 3, 4];

const reverseArray = (arr) => {
    const length = arr.length;
    for (let i = 0; i < length / 2; i++) {
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    return arr;
}
console.log(reverseArray(arr9));
//10
const arr10 = [[1, 2, 3], [4, 5], [6]];
const flattenArray = (arr) => {
    return arr.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val);
    }, [])
};
const sumArrElement = (arr) => {
    const flatArr = flattenArray(arr);
    return flatArr.reduce((sum, item) => sum + item, 0)
}

const task10 = sumArrElement(arr10);
//11
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const task11 = sumArrElement(arr11)


