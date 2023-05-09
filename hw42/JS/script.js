'use strict';
(function () {
    const generateList = array => {
        const ul = document.createElement('ul');
        for (const item of array) {
            const li = document.createElement('li')
            Array.isArray(item) ? li.appendChild(generateList(item)) : li.textContent = item;
            ul.appendChild(li);
        }
        return ul;
    }

    const array = [1,2, [1.1,1.2,1.3] ,3];
    const list = generateList(array);
    document.body.appendChild(list);
    console.log(list);
})()