'use strict'
//1
let numbers = '';
for (let i = 10; i <= 20; i++) {
    numbers += i + ' ';
}
//2
let exponent = ''
for (let i = 10; i <= 20; i++) {
    exponent += i ** 2 + ' ';
}

//3
let tableMult7 = '';
for (let i = 1; i <= 9; i++) {
    tableMult7 += `7 * ${i} = ${7 * i}; `;
}
//4
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
//5
let mult = 1n;
for (let i = 15n; i <= 35n; i++) {
    mult *= i;
}
//6
let sum1 = 0;

let iteration_num = 0;
for (let i = 1; i <= 500; i++) {
    sum1 += i;
    iteration_num++;
}
//7
let unPair = '';
for (let i = 30; i <= 80; i++) {
    if (i % 2 !== 0) continue;
    unPair += i + ' ';
}
//8
let multOf3 = '';
for (let i = 100; i <= 200; i++) {
    if (i % 3 !== 0) continue;
    multOf3 += i + ' ';
}

console.log(numbers);
console.log(exponent);
console.log(tableMult7);
console.log(sum);
console.log(mult);
console.log(sum1 / iteration_num)
console.log(unPair);
console.log(multOf3);

console.log('<<<<<<<<<<<<<<<<<9>>>>>>>>>>>>>>>>>>');
let naturalNumber = parseInt(prompt('Введите число:', ''));
let divisor = [];
let pairDivisor = [];
let sumOfPairDivisors = 0;
for (let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i !== 0) continue;
    divisor.push(i);
    if (i % 2 === 0){
        pairDivisor.push(i)
        sumOfPairDivisors += i;
    }
}
console.log(`Всі дільники числа <<${naturalNumber}>>: ${divisor}`);
console.log(`Кількість парних дільників числа <<${naturalNumber}>>: ${pairDivisor.length}`);
console.log(`Парні дільники числа <<${naturalNumber}>>: ${pairDivisor}`);
console.log(`Сума парних дільників числа <<${naturalNumber}>>: ${sumOfPairDivisors}`);
console.log('<<<<<<<<<<<<<<<<<9>>>>>>>>>>>>>>>>>>');

for (let i = 1; i <= 10; i++) {
    console.log(`Таблица умножения числа ${i}`) // Если нужно в консоль
    for (let n = 1; n <= 10; n++) {
        const result = i * n
        document.write(`${i} x ${n} = ${result} <br>`)
        console.log(`${i} * ${n} = ${result}`) // Если нужно в консоль
    }
    document.write('<br>');
}





