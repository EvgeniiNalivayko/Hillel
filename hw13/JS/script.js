'use strict';

const yearsOrAges = +prompt('Введите число:');

if (!isNaN(yearsOrAges)) {
    if (yearsOrAges % 10 === 1) {
        alert(yearsOrAges + ' год.')
    } else if (yearsOrAges >= 11 && yearsOrAges <= 19 ){
        alert(yearsOrAges + ' лет.')
    } else if (
        yearsOrAges % 10 === 2 ||
        yearsOrAges % 10 === 3 ||
        yearsOrAges % 10 === 4) {
        alert(yearsOrAges + ' года.')
    } else {
        alert(yearsOrAges + ' лет.')
    }
} else {
    alert('Вы не ввели число')
}