'use strict';
(function () {
    Function.prototype.newBind = function (obj, ...args) {
        const func = this;
        return function () {
            return func.apply(obj, [...args]);
        };
    };
    let someObj = {
        firstName: 'Женя',
        Oldzatup() {
            console.log(`${this.firstName} у тебя избыток затупов, завязывай!!`);
        }
    }

    const exampleWithContext = someObj.Oldzatup.newBind(someObj);
    console.log(exampleWithContext(), typeof (exampleWithContext))
})()

