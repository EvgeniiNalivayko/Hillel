const arrN = [1, 2, 3, 2, -2, -3, 5, 5, 23, 23, -42];
const positiveNumbersFilter = (arr) => {
    if (!Array.isArray(arr)) return "Переданный параметр не является массивом";

    const positiveArr = [];

    if (arr.length === 0) {
        console.log('Массив пустой');
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveArr.push(arr[i]);
        }
    }

    return positiveArr;
}
console.log(positiveNumbersFilter(arrN));

