'use script';
(function () {
    const goods = [['футболка', 15], ['шорты', 25], ['носки', 5]];
    const priceMap = new Map()
    const getTotalCost = arr => {

        let totalCost = 0;

        for (let [item, price] of arr) {
            priceMap.set(item, price);
        }

        for (let price of priceMap.values()) {
            totalCost += price;
        }
        return totalCost;
    }
    console.log(getTotalCost(goods));//45

})()