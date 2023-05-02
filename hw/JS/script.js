'use strict';
(function (){
    const ul = document.getElementById("ulId");
    const liList = ul.getElementsByTagName("li");

    console.log(`Количество элементов: ${liList.length}`);

    const textArray = [];
    for (const li of liList) {
        textArray.push(li.innerText);
    }
    console.log(textArray);
})()

