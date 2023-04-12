'use script';
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//1
const sumPositiveEl = arr.reduce((acc, ell) => {
    if (ell > 0) {
        return {
            sum: acc.sum + ell,
            count: acc.count + 1
        };
    }
    return acc;
}, {count: 0, sum: 0})
console.log(sumPositiveEl);//{sum: 438, count: 14}
//2
const minEL = Math.min(...arr)
const minElIndex = arr.findIndex((el) => el === minEL);
console.log(minEL); //-63
console.log(minElIndex); //15
//3
const maxEl = Math.max(...arr);
const maxElIndex = arr.findIndex((el) => el === maxEl)
//4
const countNegativeEL = arr.filter((el) => el < 0).length
console.log(countNegativeEL);//10
//5
const unpairPosNum = arr.filter((el) => {
    if (el > 0 && el % 2 !== 0) return el;
}).length;
console.log(unpairPosNum);//4
//6
const pairPosNum = arr.filter((el) => {
    if (el > 0 && el % 2 === 0) return el;
}).length;
console.log(pairPosNum);
//7
const pairPositiveSum = arr.reduce((acc, el) => {
    if (el > 0 && el % 2 === 0) {
        acc += el;
    }
    return acc;
}, 0)
console.log(pairPositiveSum);//292
//8
const unpairPositiveSum = arr.reduce((acc, el) => {
    if (el > 0 && el % 2 !== 0) {
        acc += el;
    }
    return acc;
}, 0)
//9
const positiveNumProduct = BigInt(arr.reduce((acc, el) => {
    if (el > 0) acc *= el;
    return acc;
}));
console.log(positiveNumProduct)
//10
const maxEl1 = arr.map((el)=> el === maxEl? el : 0);
console.log(maxEl1);

