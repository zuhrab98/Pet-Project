import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


export const store = {
    _renderEntireTree() {
        console.log('State changed')
    },

    _state: {
        dialogsPage: {
            dialogs: [
                {id: "1", name: "Anton"},
                {id: "2", name: "Andrey"},
                {id: "3", name: "Sveta"},
                {id: "4", name: "Oleg"},
            ],
            messages: [
                {id: "1", message: "Hello"},
                {id: "2", message: "How are you"},
                {id: "3", message: "What's your name"},
            ],
            newMessageBody: ''
        },

        profilePage: {
            posts: [
                {id: "1", message: "Hi, how are you", likesCount: "12"},
                {id: "2", message: "It's my first post", likesCount: "10"},
                {id: "3", message: "It's my first post", likesCount: "10"},
            ],
            newPostText: ''
        },
        sideBar: {}
    },

    get state() {
        return this._state
    },

    subscribe(observer) {
        this._renderEntireTree = observer
    },


    dispatch(action) { // { type: 'ADD POST', message: 'Hello }
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._renderEntireTree(this._state)
    }

}

// Привязываем контекст ко всем методам объекта store
// если не делать привязку то this у методов будет равен window

for (let key in store) {
    if (typeof store[key] == 'function') {
        store[key] = store[key].bind(store);
    }
}

// store.dispatch = store.dispatch.bind(store)
