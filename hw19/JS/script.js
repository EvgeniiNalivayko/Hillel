'use strict';
const ingredientPrice = (borschtLiters) => {
    const potatoPrice = 13;
    const totalPotatoesInKg = Math.ceil(borschtLiters * 4 * 75 * 0.001);
    return totalPotatoesInKg * potatoPrice;
};

const totalPrice = ingredientPrice(48);
console.log(`Стоимость покупки картошки: ${totalPrice} грн.`);


//if (liters === parseFloat(liters)){}
// String(parseFloat(value, 10)) === String(value)
