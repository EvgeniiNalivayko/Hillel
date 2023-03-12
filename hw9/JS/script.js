'use strict';

a = 0 ? alert('Верно') : alert('Неверно');
a > 0 ? alert('Верно') : alert('Неверно');
a < 0 ? alert('Верно') : alert('Неверно');
a >= 0 ? alert('Верно') : alert('Неверно');
a <= 0 ? alert('Верно') : alert('Неверно');
a !== 0 ? alert('Верно') : alert('Неверно');
a == 'test' ? alert('Верно') : alert('Неверно');
a === '1' ? alert('Верно') : alert('Неверно');

switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
        alert('Верно');
        break;
    default:
        alert('Неверно');
}
switch (a) {
    case 2:
    case 5:
        a +=7;
        break;
    default:
        a /= 10;
        alert(a);
}

if (a <= 1 || b >= 3) {
    alert(a + b);
} else alert(a - b);

if ((a > 2 && a < 11) && (b > 6 && b < 14)) {
    alert('Верно');
} else {
    alert('Неверно');
}

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
        break;
    default:
        result = 'и так далее -_-';
}
