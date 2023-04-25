'use strict';
(function () {
    const randomaizer = () => {
        const numInRange = range => Math.floor(Math.random() * range) + 1;
        const generateOfNums = (length = 100) => {
            const arrOfNums = [];

            const numGenerator = () => {
                if (arrOfNums.length === length) return NaN;

                const randomNum = numInRange(length);
                if (arrOfNums.includes(randomNum)) return numGenerator();

                arrOfNums.push(randomNum);
                return randomNum;
            };
            return numGenerator;
        };

        const genNum = generateOfNums(100);

        let shouldWork = true;

        while (shouldWork) {
            const result = genNum();
            if (isNaN(result)) shouldWork = false;
        }
    };
    randomaizer();
})();