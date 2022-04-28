import {NavLink} from "react-router-dom";
import styles from '../Dialogs.module.scss'

export const Dialog = ({id, name}) => {
    return (
        <NavLink to={`/dialog/${id}`} className='mb-10'>
            <div className={`d-flex mr-15`}>
                <img className='userImg'  width={35} height={35} src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/02.jpg" alt="" />
            </div>
            <p>{name}</p>
        </NavLink>
    )
}