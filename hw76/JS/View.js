'use strict'

class View {
    constructor(selectorList,imgSelector) {
        this.albumsList = document.querySelector(selectorList)
        this.albumsImage = document.querySelector(imgSelector)
    }

    renderAlbums(albums) {
        this.albumsList.innerHTML = '';
        albums.forEach(album => {
            const albumEl = document.createElement('li');
            albumEl.setAttribute('data-id', album.id);
            albumEl.classList.add('album__list-item')
            albumEl.textContent = album.title;
            this.albumsList.appendChild(albumEl);
        });
    }

    renderImages(images) {
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            imgElement.alt = image.title;
            imgElement.classList= `album-images__item`
            this.albumsImage.appendChild(imgElement);
        });
    }
}