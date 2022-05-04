const ADD_POST = 'ADD POST';
const UPDATE_POST_TEXT = 'UPDATE POST TEXT';

const initialState = {
    posts: [
        {id: "1", message: "Hi, how are you", likesCount: "12"},
        {id: "2", message: "It's my first post", likesCount: "10"},
        {id: "3", message: "It's my first post", likesCount: "10"},
    ],
    newPostText: ''
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            const stateCopy = {...state}
            if (state.newPostText !== '') {
                const newPost = {
                    id: '4',
                    message: state.newPostText,
                    likesCount: '3'
                }
                // Копируем объект state
                stateCopy.posts = [...state.posts]
                stateCopy.newPostText = state.newPostText

                stateCopy.posts.push(newPost)
                stateCopy.newPostText = ''
            }
            return stateCopy
        }

        case UPDATE_POST_TEXT: {
            const stateCopy = {...state}
            // При вызове Функция dispatch({ type: 'UPDATE POST TEXT', message: 'Hello })
            // добовляет в state новый текс и перерисовываем наше дерево
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updatePostTextActionCreator = (newPosctElem) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: newPosctElem
    }
}