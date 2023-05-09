'use script';
(function () {
    const createTable = (rows = 10, cells = 10) => {
        const uniqNums = [];
        const fragment = document.createDocumentFragment();
        const table = document.createElement('table');

        for (let i = 0; i < rows; i++) {
            const rowElement = document.createElement('tr')
            for (let j = 0; j < cells; j++) {
                const cellElement = document.createElement('td')
                let randomNumbers;

                do {
                    randomNumbers = Math.floor(Math.random() * (rows * cells)) + 1;
                } while (uniqNums.includes(randomNumbers))

                uniqNums.push(randomNumbers);
                cellElement.textContent = randomNumbers;
                rowElement.appendChild(cellElement);
            }
            fragment.appendChild(rowElement);
        }
        document.body.appendChild(table);

        table.appendChild(fragment)
        return table;
    }
    createTable();
})()