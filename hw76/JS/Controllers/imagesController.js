'use strict';
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    async init() {
        const albumId = new URLSearchParams(window.location.search).get('albumId');
        const albums = await this.model.getAlbumsPhoto(albumId)
        this.view.renderImages(albums)
    }
}
