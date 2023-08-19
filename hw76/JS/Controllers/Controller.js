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
            console.log(albumId);
            console.log(this.openAlbumImages(albumId));
        });
    }
    async init() {
        const albums = await this.model.getAlbums()
        this.view.renderAlbums(albums)
    }
    async openAlbumImages(albumId) {
        const albumImages = await this.model.getAlbumsPhoto(albumId)
        window.location.href = `pages/image.html?albumId=${albumId}`;
        this.view.renderImages(albumImages)
    }
}