'use strict';
class Model {
    QUERY_LINKS = {
        ALBUMS: 'https://jsonplaceholder.typicode.com/albums/',
        PHOTOS: 'https://jsonplaceholder.typicode.com/photos/?albumId=',
    }
    async getAlbums(){
        try {
            const response =await fetch(this.QUERY_LINKS.ALBUMS)
            const data = response.json()
            return data;
        }catch (error){
            console.error('Error fetching albums:', error);
            return [];
        }
    }
    async getAlbumsPhoto(id){
        try {
            const response = await fetch(`${this.QUERY_LINKS.PHOTOS}${id}`)
            const data = response.json();
            return data;
        }catch (error){
            console.error('Error fetching photo',error)
        }
    }
}