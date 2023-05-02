const add = (a, b) => {
    const result = a + b;
    console.log(`Результат: ${a} + ${b} = ${result}`);
    return result;
}

const subtract = (a, b) => {
    const result = a - b;
    console.log(`Результат: ${a} - ${b} = ${result}`);
    return result;
}

const multiply = (a, b) => {
    const result = a * b;
    console.log(`Результат: ${a} * ${b} = ${result}`);
    return result;
}

const divide = (a, b) => {
    if (b === 0) {
        console.error('Деление на ноль!');
        return null;
    }

    const result = a / b;
    console.log(`Результат: ${a} / ${b} = ${result}`);
    return result;
}