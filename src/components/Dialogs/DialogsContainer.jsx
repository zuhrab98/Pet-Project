import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


// export const DialogsContainer = () => {
//     return (
//         <MyContext.Consumer>{
//             (store) => {
//                 const state = store.getState().dialogsPage
//
//                 const onSendMessageClick = () => {
//                     store.dispatch(addMessageCreator())
//                 }
//
//                 const onMessageChange = (body) => {
//                     store.dispatch(updateNewMessageCreator(body))
//                 }
//                 return <Dialogs dialogsPage={state}
//                                 addMessageCreator={onSendMessageClick} updateNewMessageCreator={onMessageChange}/>
//
//             }
//         }</MyContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        updateNewMessage: (body) => {
            dispatch(updateNewMessageCreator(body))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)