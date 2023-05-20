'use script';
(function () {
    document.addEventListener('DOMContentLoaded', () => {
        if (!localStorage.getItem('formData')) return;
        const data = JSON.parse(localStorage.getItem('formData'));
        const dataList = document.querySelector('#dataList');

        for (const key in data) {
            const li = document.createElement('li');
            if (data[key].trim() === '') li.innerHTML = `${key}: Empty value`
            else li.innerHTML = `${key}: ${data[key]}`
            dataList.append(li);
        }
    })

})()