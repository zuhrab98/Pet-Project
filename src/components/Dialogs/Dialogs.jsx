import styles from './Dialogs.module.scss'
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";


export const Dialogs = ({state}) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {
                    state.dialogs.map(item => (<Dialog id={item.id} name={item.name}/>))
                }
            </div>

            <div className={styles.messages}>

                {
                    state.messages.map(item => <Messages massage={item.message}/>)
                }

                {/*<Routes>*/}
                {/*    <Route exact path='dialog/1' element={<Messages massage='Hello'/>}>*/}

                {/*    </Route>*/}
                {/*    <Route exact path='dialog/2' element={<Messages massage='How are you'/>}>*/}

                {/*    </Route>*/}
                {/*    <Route exact path='dialog/3' element={<Messages massage="What's your name"/>}>*/}

                {/*    </Route>*/}
                {/*    <Route exact path='dialog/4' element={<Messages massage='Yo'/>}>*/}

                {/*    </Route>*/}
            </div>

        </div>
    )
}