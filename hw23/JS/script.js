const mainFunction = (callback) => {
    let number;
    let expon;
    for (; ;) {
        number = prompt('Введите число:');
        if (!isNaN(number) && number !== null) {
            break;
        }
    }

    for (; ;) {
        expon = prompt('Введите степень числа:');
        if (!isNaN(expon) && expon !== null) {
            break;
        }
    }
    callback(+number, +expon);

}

const exponentiation = (number, expon) => {
    const operator = '**';
    const result = number ** expon;
    alert(`${number} ${operator} ${expon} = ${result}`);
    return result;
}
const multiplay = (number, expon) => {
    const operator = '*';
    const result = number * expon;
    alert(`${number} ${operator} ${expon} = ${result}`);
    return result;
}
const division = (number, expon) => {
    const operator = '/';
    const result = number / expon;
    alert(`${number} ${operator} ${expon} = ${result}`);
    return result;
}
const modulo = (number, expon) => {
    const operator = '%';
    const result = number % expon;
    alert(`${number} ${operator} ${expon} = ${result}`);
    return result;
}

mainFunction(exponentiation);