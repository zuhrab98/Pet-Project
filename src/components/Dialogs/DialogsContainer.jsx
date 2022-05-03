import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


export const DialogsContainer = ({store}) => {
    const state = store.getState().dialogsPage

    const onSendMessageClick = () => {
        store.dispatch(addMessageCreator())
    }

    const onMessageChange = (body) => {
        store.dispatch(updateNewMessageCreator(body))
    }

    return (
        <Dialogs dialogsPage={state}
                 addMessageCreator={onSendMessageClick} updateNewMessageCreator={onMessageChange}/>
    )
}