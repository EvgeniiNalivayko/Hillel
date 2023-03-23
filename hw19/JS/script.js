'use strict';
const ingredientPrice = (borschtLiters, borschtPotato, potatoPrice,onePotatoWeightInGram = 75) => {
    const totalPotatoesInKg = Math.ceil(borschtLiters * borschtPotato * onePotatoWeightInGram * 0.001);
    return totalPotatoesInKg * potatoPrice;
};

const totalPrice = ingredientPrice(48,4,13);
console.log(`Стоимость покупки картошки: ${totalPrice} грн.`);
