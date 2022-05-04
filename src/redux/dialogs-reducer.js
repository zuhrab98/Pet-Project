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
        case UPDATE_MESSAGE_BODY: {
            const stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return stateCopy
        }
        case SEND_MESSAGE: {
            const stateCopy = {...state}
            let body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push({id: "4", message: body},)
            return stateCopy
        }
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
