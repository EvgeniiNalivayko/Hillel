'use strict';
(function () {
    const form = document.querySelector('#form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const formElement = event.target.querySelectorAll('input,select,textarea');
        const data = {};

        formElement.forEach(({name, value}) => {
            data[name] = value;
        })

        console.log(data);
    })
})()