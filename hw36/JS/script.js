'use strict';
(function () {
    const calculator = {
        read() {
            this.a = Number(prompt('Введите первое число:', ''));
            this.b = Number(prompt('Введите второе число:', ''));
            if (typeof this.a !== 'number' && typeof this.b !== 'number') throw new Error('Enter correct numbers')
        },
        sum() {
            return this.a + this.b;
        },
        mul() {
            return this.a * this.b;
        }
    };
    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());
})();
