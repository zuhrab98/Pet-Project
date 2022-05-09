import styles from './Dialogs.module.scss'
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";


export const Dialogs = ({dialogsPage, newMessageBody, updateNewMessageCreator, addMessage}) => {
    const onSendMessageClick = () => {
        addMessage()
    }

    const onMessageChange = (e) => {
        updateNewMessageCreator(e.target.value)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {
                    dialogsPage.dialogs.map(item => (<Dialog key={item.id} id={item.id} name={item.name}/>))
                }
                <div>
                    <input className='input d-block mb-10' onChange={onMessageChange} type="text"
                           placeholder={'Enter your message'} value={newMessageBody}/>
                </div>
                <div>
                    <button className='addBtn' onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>

            <div className={styles.messages}>

                {
                    dialogsPage.messages.map((item, index) => <Messages key={index} massage={item.message}/>)
                }
            </div>

        </div>
    )
}