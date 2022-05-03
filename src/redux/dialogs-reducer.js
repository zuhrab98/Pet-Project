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
    debugger
    switch (action.type) {
        case UPDATE_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: "4", message: body},)
            return state
        default :
            return state
    }
}

export const updateNewMessageCreator = (body) => {
    return {
        type: UPDATE_MESSAGE_BODY,
        body: body
    }
}
export const addMessageCreator = () => ({type: SEND_MESSAGE})
