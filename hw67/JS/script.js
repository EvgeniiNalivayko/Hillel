'use script';
(function () {
    const goods = [['футболка', 15], ['шорты', 25], ['носки', 5]];
    const getTotalCost = arr => {
        const map = new Map(arr)
        let totalCost = 0;
        for (let price of map.values()) {
            totalCost += price;
        }
        return totalCost;
    }
    console.log(getTotalCost(goods));

})()