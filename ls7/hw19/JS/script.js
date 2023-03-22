'use strict';
let ingredientPrice = (borschtLiters) => {
    const potatoPerLiter = 4;
    const potatoWeightInGrams = 75;
    const KgPerGram = 0.001;
    const potatoPrice = 13;

    const totalPotatoes = borschtLiters * potatoPerLiter;
    const totalPotatoesInGram = totalPotatoes * potatoWeightInGrams;
    const totalPotatoesInKg = totalPotatoesInGram * KgPerGram;
    const totalPrice = Math.ceil(totalPotatoesInKg) * potatoPrice;

    return totalPrice;
}

const totalPrice = ingredientPrice(48);
console.log(`Стоимость покупки картошки: ${totalPrice} грн.`);


//if (liters === parseFloat(liters)){}
// String(parseFloat(value, 10)) === String(value)
