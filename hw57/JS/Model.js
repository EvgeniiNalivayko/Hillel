'use strict';
const Model = {
    storage: null,
    dataKey: 'data_Key',
    currentId: 1,
    //will get data from storage
    getData() {
        return JSON.parse(this.storage.getItem(this.dataKey)) || {};
    },

    // will save DATA by id to storage
    getDataById(id) {
        return this.getData()[id];
    },

    //will save DATA to storage
    postData(data) {
        const savedData = this.getData();
        const dataToSave = {...data, id: this.currentId};
        savedData[this.currentId] = dataToSave;
        this.storage.setItem(this.dataKey, JSON.stringify(savedData))
        const savedItem = this.getDataById(this.currentId);
        this.currentId += 1;
        return savedItem;
    },

    deleteItem(id) {
        const savedData = this.getData();
        if (savedData.hasOwnProperty(id)) {
            const removedItem = savedData[id];
            delete savedData[id];
            this.storage.setItem(this.dataKey, JSON.stringify(savedData));
            return removedItem;
        }
    },

    init(storage, dataKey) {
        this.storage = storage;
        if (typeof dataKey === 'string') this.dataKey = dataKey

        const savedData = this.getData();
        if (!savedData.length) return;
        this.currentId = savedData.at(-1).id + 1;
    }
}