'use strict';
(function () {
    const task1 = () => {
        function getFactorial(num) {
            return (num === 1) ? num : (num * getFactorial(num - 1));
        }

        console.log(getFactorial(6));//720
    }
    task1();

    const task2 = () => {
        const pow = (num, degree) => {
            return (degree === 1) ? num : num * pow(num, degree - 1)
        }

        console.log(pow(2, 4));
    }
    task2();

    const task3 = () => {
        const recSum = (a, b) => {
            if (a < 0 || b < 0) throw new Error('Введите положительное число');
            if (b === 0) return a;
            return recSum(++a, --b)
        }

        console.log(recSum(3, 23));
    }
    task3()
})();