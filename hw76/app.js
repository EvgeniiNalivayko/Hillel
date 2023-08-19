'use strict';
document.addEventListener('DOMContentLoaded', async function () {
    const model = new Model()
    const view = new View('.album__list','.album-images')
    const controller = new Controller(model, view)
     await controller.init()
});





