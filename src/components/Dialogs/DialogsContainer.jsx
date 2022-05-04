import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {MyContext} from "../../MyContext";


export const DialogsContainer = () => {


    return (
        <MyContext.Consumer>{
            (store) => {
                const state = store.getState().dialogsPage

                const onSendMessageClick = () => {
                    store.dispatch(addMessageCreator())
                }

                const onMessageChange = (body) => {
                    store.dispatch(updateNewMessageCreator(body))
                }
                return <Dialogs dialogsPage={state}
                                addMessageCreator={onSendMessageClick} updateNewMessageCreator={onMessageChange}/>

            }
        }</MyContext.Consumer>
    )
}