'use strict';
(function () {
    const palindrome = (num) => {
        let steps = 0;
        function checkPalindrome(num) {
            steps++;
            const reversNum = Number(num.toString().split('').reverse().join(''));
            if (num === reversNum) {
                return {
                    result: num,
                    steps
                };
            } else return checkPalindrome(num + reversNum)
        }
        return checkPalindrome(num)

    }
    console.log(palindrome(96));
})()