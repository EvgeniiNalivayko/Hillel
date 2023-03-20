'use strict';

const yearsOrAges = +prompt('Введите число:');

if (isNaN(yearsOrAges)) {
    alert('Вы не ввели число');
} else {
    let correctYearsForm;

    if (yearsOrAges % 10 === 1) {
        correctYearsForm = 'год';
    } else if (yearsOrAges >= 11 && yearsOrAges <= 19 ){
        correctYearsForm = 'лет';
    } else if ((yearsOrAges % 10 >= 2 && yearsOrAges % 10 <= 4) && (yearsOrAges % 100 <=10 || yearsOrAges % 100 >= 20)){
        correctYearsForm = 'года';
    } else {
        correctYearsForm = 'лет';
    }
    alert(yearsOrAges + ' ' + correctYearsForm);
}



