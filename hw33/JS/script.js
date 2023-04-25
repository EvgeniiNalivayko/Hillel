'use strict';
(function () {
    const smartSum = () => {
        let result = 0;
        return (num) => {
            return result += num;
        }
    }
    const sum = smartSum()
    console.log(sum(3));
    console.log(sum(5));
    console.log(sum(20));
})()