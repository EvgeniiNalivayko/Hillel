'use strict'
const arrExp = [1, 2, 3, 4, 5, 5, 6, 6, 6, 77, 7, 'sea', 'asd', 'aaa']
const indexOf = (arr, searchElement, fromIndex = 0) => {
    const len = arr.length;
    if (fromIndex >= len) return -1;
    if (fromIndex < 0) {
        for (let i = len - 1 + fromIndex; i >= 0; i--) {
            if (arr[i] === searchElement) return i;
        }
    } else {
        for (let i = fromIndex; i < len; i++) {
            if (arr[i] === searchElement) return i;
        }
    }
    return -1;
}
console.log(indexOf(arrExp, 'sea', 1));

const anyString = 'канал';
const lastIndexOf = (str, searchElement, fromIndex = str.length) => {
    const len = str.length;
    if (fromIndex > len) fromIndex = str.length;
    if (fromIndex < 0) fromIndex = 0;
    if (fromIndex <= len) {
        for (let i = fromIndex; i >= 0; i--) {
            if (str[i] === searchElement) return i
        }
    }
    return -1;
}
console.log(lastIndexOf(anyString, 'а', 0));

const find = (arr, callback, thisArg = window) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (callback.length < 2) {
            if (callback.call(thisArg, arr[i])) return arr[i];
        } else {
            if (callback.call(thisArg, arr[i], i, arr)) return arr[i];
        }
    }
    return undefined;
}

const findIndex = (arr, callback, thisArg = window) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (callback.length < 2) {
            if (callback.call(thisArg, arr[i])) return i;
        } else {
            if (callback.call(thisArg, arr[i], i, arr)) return i;
        }
    }
    return -1;
}


const testArr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
const includes = (arr, searchElement, fromIndex = 0) => {
    const len = arr.length
    if (fromIndex < 0) {
        fromIndex = fromIndex + len - 1;
        if (fromIndex < 0) fromIndex = 0;
    }
    for (let i = fromIndex; i < len; i++) {
        if (arr[i] === searchElement) return true
    }
    return false
}
console.log(includes(testArr, 'Апельсин'));
console.log(includes(testArr, 'ыфвфы'));
console.log(includes(testArr, 'Груша', -2));

const every = (arr, callback, thisArg) => {
    if (arr.length === 0) return true;
    const len = arr.length;
    if (thisArg === null) {
        thisArg = window;
    }
    for (let i = 0; i < len; i++) {
        if (callback.length < 2) {
            if (!callback.call(thisArg, arr[i])) return false;
        } else {
            if (!callback.call(thisArg, arr[i], i, arr)) return false;
        }
    }
    return true;
};
const some = (arr, callback, thisArg = window) => {
    if (arr.length === 0) return true;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (callback.length < 2) {
            if (callback.call(thisArg, arr[i])) return true;
        } else {
            if (callback.call(thisArg, arr[i], i, arr)) return true;
        }
    }
    return false;
};