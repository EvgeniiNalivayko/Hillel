const num = +prompt('Введите число:', '7')
let minDivisor;
if (num < 1 || isNaN(num)) {
    console.log(NaN)
} else {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            minDivisor = i;
            break
        }
    }
    minDivisor ? console.log(minDivisor) : console.log(`${num} простое число `)
}





