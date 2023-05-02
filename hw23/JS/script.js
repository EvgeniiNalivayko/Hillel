const mainFunction = (callback) => {
    let number1 = +prompt("Введите первое число");
    let number2 = +prompt("Введите второе число");
    if (number1 === null || !number1 || number2 === null || !number2) throw new Error('Введите число')
    callback(number1, number2);
}

const exponentiation = (number, number2) => {
    const operator = '**';
    const result = number ** number2;
    alert(`${number} ${operator} ${number2} = ${result}`);
    return result;
}
const multiplay = (number, number2) => {
    const operator = '*';
    const result = number * number2;
    alert(`${number} ${operator} ${number2} = ${result}`);
    return result;
}
const division = (number, number2) => {
    const operator = '/';
    const result = number / number2;
    alert(`${number} ${operator} ${number2} = ${result}`);
    return result;
}
const modulo = (number, number2) => {
    const operator = '%';
    const result = number % number2;
    alert(`${number} ${operator} ${number2} = ${result}`);
    return result;
}

mainFunction(exponentiation);