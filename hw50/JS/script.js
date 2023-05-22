'use strict';
void function () {
    const todoItems = document.querySelector('#todoItems');
    const form = document.querySelector('#todoForm');
    let currentId = 1;
    const createTodoDomElement = ({title, description, id}) => {
        const wrapper = document.createElement('div')
        wrapper.classList.add('col-4');
        wrapper.setAttribute('data-id', id)
        wrapper.innerHTML = `<div class="taskWrapper d-flex flex-column">
                                <div class="taskHeading">${title}</div>
                                <div class="taskDescription">${description}</div>
                                <button type="reset" class="btn btn-danger ms-auto p-0 remove-todo">Remove!</button>
                             </div>`
        return wrapper;
    }

    const renderTodoDomElement = (domEl) => {
        todoItems.prepend(domEl)
    }

    const getTodoItems = () => {
        const existingData = JSON.parse(localStorage.getItem('todoListData'));
        if (!existingData) return [];
        return existingData;
    }

    const saveTodoItem = (dataToSave) => {
        const existingData = getTodoItems();
        console.log(existingData);
        const dataClone = {...dataToSave, id: currentId}
        existingData.push(dataClone);
        localStorage.setItem('todoListData', JSON.stringify(existingData));
        currentId += 1;
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

    const handleClick = (event) => {
        event.stopPropagation();
        const todoItem = event.target.closest('[data-id]');
        if (!todoItem) return;
        const itemId = Number(todoItem.getAttribute('data-id'));

        const existingData = getTodoItems();
        const updatedData = existingData.filter(item => Number(itemId) !== item.id);
        localStorage.setItem('todoListData', JSON.stringify(updatedData));
        todoItem.parentNode.removeChild(todoItem);
    };


    const renderSavedItem = () => {
        const data = getTodoItems();
        currentId = data.length > 0 ? data.at(-1).id + 1 : 1;
        data.forEach(item => {
            const renderItem = createTodoDomElement(item);
            renderTodoDomElement(renderItem);
        })
        document.removeEventListener('DOMContentLoaded', renderSavedItem);
    };
    todoItems.addEventListener('click', handleClick)
    document.addEventListener('DOMContentLoaded', renderSavedItem);

}()