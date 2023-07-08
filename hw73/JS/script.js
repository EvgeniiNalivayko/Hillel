'use strict';
(function () {
    class Hamburger {

        constructor(size, stuffing) {
            this.size = size;
            this.stuffing = stuffing;
            this.toppings = [];
        }

        static SIZE_SMALL = {
            price: 50,
            calories: 20
        }

        static SIZE_LARGE = {
            price: 100,
            calories: 40
        }

        static STUFFING_CHEESE = {
            price: 10,
            calories: 20
        }
        static STUFFING_POTATO = {
            price: 15,
            calories: 10
        }
        static STUFFING_SALAD = {
            price: 20,
            calories: 5
        }

        static TOPPING_SPICE = {
            price: 15,
            calories: 0
        }
        static TOPPING_SAUCE = {
            price: 20,
            calories: 5
        }

        addTopping(topping) {
            this.toppings.push(topping)
        }

        calculatorPrice() {
            let toppingPrice = this.toppings.reduce((totalPrice, topping) => totalPrice + topping.price, 0)
            if (this.toppings) return this.size.price + this.stuffing.price + toppingPrice;
        }

        calculatorCalories() {
            let toppingCalories = this.toppings.reduce((totalCalories, topping) => totalCalories + topping.calories, 0)
            if (this.toppings) return this.size.calories + this.stuffing.calories + toppingCalories;
        }

    }

    const hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE)
    hamburger.addTopping(Hamburger.TOPPING_SAUCE)

    // запитаємо скільки там калорій
    console.log("Calories: " + hamburger.calculatorCalories());

// скільки коштує
    console.log("Price: " + hamburger.calculatorPrice());

// я тут передумав і вирішив додати ще приправу
    hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А скільки тепер коштує?
    console.log("Price with spice: " + hamburger.calculatorPrice());
})()