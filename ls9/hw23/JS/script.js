const mainFunction = (callback) => {
    let number;
    let expon;

    do {
        number = prompt('Введите число:');
    } while (isNaN(number) || number === null);

    do {
        expon = prompt('Введите степень числа:');
    } while (isNaN(expon) || expon === null);

    callback(+number, +expon);
}

const exponentiation = (number, expon) => {
    const result = number ** expon;
    alert(`${number} ** ${expon} = ${result}`)
}
const multiplay = (number, expon) => {
    const result = number * expon;
    alert(`${number} * ${expon} = ${result}`)
}
const division = (number, expon) => {
    const result = number / expon;
    alert(`${number} / ${expon} = ${result}`)
}
const modulo = (number, expon) => {
    const result = number % expon;
    alert(`${number} % ${expon} = ${result}`)
}

mainFunction(exponentiation);