const UPDATE_MESSAGE_BODY = 'UPDATE MESSAGE BODY';
const SEND_MESSAGE = 'SEND MESSAGE';

const initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody

            return {
                ...state,
                messages: [...state.messages, {id: "4", message: body}],
                newMessageBody: '',
            }

        default :
            return state
    }
}

export const updateNewMessageCreator = (body) => {
    debugger
    return {
        type: UPDATE_MESSAGE_BODY,
        body: body
    }
}
export const addMessageCreator = () => ({type: SEND_MESSAGE})
