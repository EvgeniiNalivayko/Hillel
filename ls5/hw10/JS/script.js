'use strict';

const yearOfBirth = +prompt('Введите год вашего рождения:', '');
let age;
if (yearOfBirth >= 1900 && yearOfBirth <= 2020) {
    age = new Date().getFullYear() - yearOfBirth;
} else {
    alert('Жаль, что Вы не захотели ввести свой год рождения');
    age = 'Не указано';
}

const city = prompt('Введите название вашего города');
let capital;

if (city) {
    if (city === 'Киев') capital = 'столица Украины';
    else if (city === 'Париж') capital = 'столица Франции';
    else if (city === 'Будапешт') capital = 'столица Венгрия';
    else capital = `${city}`; // Какой-то костыль получился
} else {
    alert('Жаль, что Вы не захотели ввести свой город');
    capital = 'Не указано';
}


let sport = prompt('Напиши свой любимый вид спорта:');
let champion;
if (sport) {
    if (sport === 'Dota2' || sport === 'Дота2' || sport === 'Дотка') champion = 'Рикардо Милос';
    else if (sport === 'football') champion = 'Криштиану Роналду';
    else if (sport === 'league of legends') champion = 'Билли Херрингтон';
    else champion = 'Зеленский';
} else {
    alert('Жаль, что Вы не захотели ввести свой любимый вид спорта');
    champion = "Не указано";
}

alert(`Ваш возраст: ${age}.\nВы живете в ${capital}\nКруто!Хочешь стать как ${champion}`);