'use strict';
void function () {
    const todoItems = document.querySelector('#todoItems');
    const form = document.querySelector('#todoForm');
    let ID_EL = 1;
    const createTodoDomElement = ({title, description}) => {
        const wrapper = document.createElement('div')
        wrapper.classList.add('col-4');
        wrapper.innerHTML = `<div class="taskWrapper d-flex flex-column">
                                <div class="taskHeading">${title}</div>
                                <div class="taskDescription">${description}</div>
                                <button type="reset" class="btn btn-danger ms-auto p-0 ">Remove!</button>
                             </div>`
        return wrapper;
    }
    const giveId = () => {
        const data = getTodoItems();
        data.forEach((item)=>{
            item.id = 1;
        })
    }

    const renderTodoDomElement = (domEl) => {
        todoItems.prepend(domEl)
    }

    const getTodoItems = () => {
        const existingData = JSON.parse(localStorage.getItem('todoListData'));
        if (!existingData) return [];
        console.log(existingData);
        return existingData;
    }

    const saveTodoItem = (dataToSave) => {
        const existingData = getTodoItems();
        existingData.push(dataToSave);

        localStorage.setItem('todoListData', JSON.stringify(existingData));
        giveId(dataToSave)
        return dataToSave;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const data = {}
        const formElement = event.target.querySelectorAll('input,textarea');
        formElement.forEach(({name, value}) => {
            data[name] = value;
        })
        const saveItem = saveTodoItem(data)
        renderTodoDomElement(
            createTodoDomElement(saveItem)
        );
    })

    const renderSavedItem = () => {
        const data = getTodoItems();
        data.forEach(item => {
            const renderItem = createTodoDomElement(item);
            renderTodoDomElement(renderItem);
        })
        document.removeEventListener('DOMContentLoaded', renderSavedItem);
    }

    document.addEventListener('DOMContentLoaded', renderSavedItem);

}()