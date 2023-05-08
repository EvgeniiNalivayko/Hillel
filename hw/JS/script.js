'use strict';
(function () {
    const ul = document.querySelector('#ulId');
    const liList = ul.querySelectorAll('li');
    liList.forEach((li) => {
        console.log(li.textContent);
    })

    const ulAtrValue = [];
    for (const atr of ul.getAttributeNames()) {
        ulAtrValue.push(ul.getAttribute(atr));
    }
    console.log(ulAtrValue)
    const ulAtrName = ul.getAttributeNames();
    console.log(ulAtrName);


    const lastLi = liList[liList.length - 1];
    lastLi.textContent = 'Привет меня зовут Женя';
    liList[0].setAttribute('data-my-name', 'Evg');
    ul.removeAttribute('data-dog-tail');
})()