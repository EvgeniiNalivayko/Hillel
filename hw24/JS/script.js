'use strict'
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
//1
arr.concat(arr2);
//2
arr.reverse();
//3
arr.push(4, 5, 6);
//4
arr.unshift(4, 5, 6)

let arr3 = ['js', 'css', 'jq'];
//5
alert(`Решение №5: "${arr3[0]}"`);
//6
alert(`Решение №6: "${arr3[2]}"`);
let arr4 = [1, 2, 3, 4, 5];
//7
arr4.slice(0, 3);
//8
arr4.slice(3, 5);
//9
arr4.splice(1, 2);
//10
arr4 = [1, 2, 3, 4, 5];
//11
arr4.splice(3, 0, 'a', 'b', 'c');
//12
arr4 = [1, 2, 3, 4, 5];
arr4.splice(1, 0, 'a', 'b');
arr4.splice(6, 0, 'c');
arr4.splice(8, 0, 'e')
//13
let arr5 = [3, 4, 1, 2, 7];
arr5.sort(function (a, b) {
    return a - b;
});
//14
let arr6 = [5, 6, 7, 8, 9];
let result = arr6.reduce(function (sum, item) {
    return sum + item;
})
//15
let arr6Pow = arr6.map(function (item) {
    return Math.pow(item, 2)
})
//16
let arr0 = [1, -3, 5, 6, -7, 8, 9, -11];
let unPositiveArr = arr0.filter(function (item) {
    return item < 0;
})
//17
let evenNumArr = arr0.filter(function (item) {
    return item % 2 === 0;
})
//18
let arrS = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

let moreFiveSymbolArr = arrS.filter(function (item) {
    return item.length > 5;
})
//19
let arrr = [1, 2, [3, 4], 5, [6, 7]];
let subArr = arrr.filter(function (item) {
    return Array.isArray(item);
})
//20
let arrN = [5, -3, 6, -5, 0, -7, 8, 9];

let negativeNumCount = arrN.filter(function (item) {
    return item < 0;
}).length;

