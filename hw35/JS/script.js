'use strict';
(function () {

    const counter = (number = 0) => {

        return {
            count: number,
            increaseCount: 0,
            decreaseCount: 0,
            valueCount: 0,
            increase() {
                this.count++;
                this.increaseCount++;
                return this;
            },
            decrease() {
                this.count--;
                this.decreaseCount++;
                return this;
            },
            value() {
                this.valueCount++;
                return this.count;
            },
            getStatistic() {
                return {
                    count: this.count,
                    increaseCount: this.increaseCount,
                    decreaseCount: this.decreaseCount,
                    valueCount: this.valueCount,

                };
            },
            reset() {
                this.count = 0;
                return this
            },
        };
    }
    const counter1 = counter(20);
    console.log(counter1.decrease().decrease().increase().increase().increase().reset());
})()