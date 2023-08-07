class PhoneBook {
    #ATTR = {
        userId: 'data-user-id',
        startCallBtn: 'data-startCall',
        endCallBtn: 'data-endCall'
    }

    #contacts = [];
    list = null;
    listUl = null;
    searchInput = null;
    #modal = null;

    constructor(users, listSelector) {
        this.list = document.querySelector(listSelector)
        this.listUl = this.list.querySelector('ul')
        this.#modal = new bootstrap.Modal(document.getElementById("myModal"), {
            keyboard: false,
            backdrop: 'static'
        })
        this.callDurationEl = this.#modal._element.querySelector('.modal-title .duration')
        this.#setEvents()

        users.forEach(user => {
            this.addContact(user)
        })
        this.#searchInput()
    }

    addContact(user) {
        if (user.id === null) return;

        const userInstance = new User(user)
        userInstance.template = this.generateContactTemplate(userInstance)

        this.#contacts.push(userInstance);
        this.listUl.prepend(this.#contacts.at(-1).template);
    }

    search(searchText) {

        this.listUl.innerHTML = '';

        const filteredContacts = this.#contacts.filter(contact => {
            const name = contact.name.trim().toLowerCase()
            const email = contact.email.trim().toLowerCase()
            const phone = this.#normalizePhoneNumber(contact.phone)

            return (
                name.includes(searchText) ||
                email.includes(searchText) ||
                phone.includes(searchText)
            )

        })
        filteredContacts.forEach(contact => {
            this.listUl.prepend(this.generateContactTemplate(contact));
        })
    }

    #searchInput = () => {
        this.searchInput = document.querySelector('#contacts-search')
        this.searchInput.addEventListener('input', () => {
            const searchText = this.#normalizePhoneNumber(this.searchInput.value)
            this.search(searchText)
        })
    }

    #normalizePhoneNumber(phoneNumber) {
        return phoneNumber.replace(/[()\-\s+.]/g).trim().toLowerCase();
    }

    call(contactId) {
        const contact = this.#contacts.find(({id}) => id === contactId);
        this.#modal._element.querySelector('.modal-title .title').innerHTML = contact.name
        this.#modal._element.querySelector('.modal-body').innerHTML = 'Conversation with ' + contact.phone
        this.#modal.show();
        callController.startCall(contact)
    }

    #endCall = () => {
        callController.endCall()
        this.#modal.hide();
    }

    #removeContact(contactId) {
        const contactIndex = this.#contacts.findIndex(({id}) => id === contactId)
        this.#contacts[contactIndex].template.remove()
        this.#contacts.splice(contactIndex, 1);
    }

    #callHandler = (event) => {
        if (!event.target.closest(`[data-startCall]`)?.hasAttribute('data-startCall')) return;
        const userId = +event.target.closest(`[data-user-id]`).getAttribute('data-user-id');
        this.call(userId);
    }
    #removeContactHandler = (event) => {
        if (!event.target.closest(`[data-endCall]`)?.hasAttribute('data-endCall')) return;
        const userId = +event.target.closest(`[data-user-id]`).getAttribute('data-user-id');
        this.#removeContact(userId);

        // При вызове модального окна, убедитесь, что у модального окна есть id "exampleModalToggle"

    }
    #trackCallStatus = (newStatus) => {
        if (!Call.endCallStatuses.includes(newStatus)) return
        this.#endCall()
    }

    #trackCallDuration = (duration) => {
        this.callDurationEl.innerHTML = '00:0' + duration
    }

    #setEvents() {
        Call.addSubscription(Call.EVENT_TYPES.changeStatus, this.#trackCallStatus)
        Call.addSubscription(Call.EVENT_TYPES.changeDuration, this.#trackCallDuration)


        this.list.addEventListener('click', this.#callHandler)
        this.list.addEventListener('click', this.#removeContactHandler)
        this.#modal._element.querySelector(`[data-end-call-btn]`).addEventListener('click', (this.#endCall))
    }

    generateContactTemplate(user) {
        const wrapper = document.createElement('li')
        wrapper.className = 'list-group-item d-flex justify-content-between align-items-center'
        wrapper.setAttribute('data-user-id', user.id)
        wrapper.innerHTML = `<span class="contacts__contact">${user.name}</span>
                            <div>
                                <button type="button" ${this.#ATTR.startCallBtn}  class="btn btn-success">
                                    <i class="bi bi-telephone"></i>
                                </button>

                                <button type="button"${this.#ATTR.endCallBtn} class="btn btn-danger">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>`
        return wrapper
    }


}


const phoneBook = new PhoneBook(users, '.contacts__list');
