const AddPost = 'ADD POST';
const UpdatePostText = 'UPDATE POST TEXT';

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
        },

        profilePage: {
            posts: [
                {id: "1", message: "Hi, how are you", likesCount: "12"},
                {id: "2", message: "It's my first post", likesCount: "10"},
                {id: "3", message: "It's my first post", likesCount: "10"},
            ],
            newPostText: ''
        },
        profilePages: {
            posts: [
                {id: "1", message: "Hi, how are you", likesCount: "12"},
                {id: "2", message: "It's my first post", likesCount: "10"},
                {id: "3", message: "It's my first post", likesCount: "10"},
            ],
            newPostText: ''
        },
    },

    get state() {
        return this._state
    },

    subscribe(observer) {
        this._renderEntireTree = observer
    },

    dispatch(action) { // { type: 'ADD POST', message: 'Hello }
        if (action.type === AddPost) {
            if (this._state.profilePage.newPostText !== '') {
                const newPost = {
                    id: '4',
                    message: this._state.profilePage.newPostText,
                    likesCount: '3'
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._renderEntireTree(this._state)
            }

        } else if (action.type === UpdatePostText) {
            // При вызове Функция dispatch({ type: 'UPDATE POST TEXT', message: 'Hello })
            // добовляет в state новый текс и перерисовываем наше дерево
            this._state.profilePage.newPostText = action.newText
            this._renderEntireTree(this._state)

        }
    }

}

export const addPostActionCreator = () => {
    return {
        type: AddPost
    }
}

export const updatePostTextActionCreator = (newPosctElem) => {
    return {
        type: UpdatePostText,
        newText: newPosctElem
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

//
// export const addPost = () => {
//     const newPost = {
//         id: '4',
//         message: state.profilePage.newPostText,
//         likesCount: '3'
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//     renderEntireTree(state)
// }
//
// // Функция при вызове добовляет в state новый текс и перерисовываем наше дерево
// export const updatePostText = (newText) => {
//     state.profilePage.newPostText = newText
//     renderEntireTree(state)
// }
//
// // В subscribe передавем в параметры функцию из index.js "renderEntireTree()"
// // и таким образом перназначаем renderEntireTree в state.js
// export const subscribe = (observer) => {
//     renderEntireTree = observer
// }