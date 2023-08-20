'use strict';
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.eventHandlers()
    }
    eventHandlers() {
        this.view.albumsList.addEventListener('click', (event) => {
            const albumId = event.target.getAttribute('data-id');
            window.location.href = `pages/image.html?albumId=${albumId}`;
        });
    }
    async init() {
        const albums = await this.model.getAlbums()
        this.view.renderAlbums(albums)
    }
}