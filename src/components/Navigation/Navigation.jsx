import styles from './Navigation.module.css'
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile'
                         className={({isActive}) => (isActive ? styles.linkActive : styles.link)}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/dialogs'
                         className={({isActive}) => (isActive ? styles.linkActive : styles.link)}>Messages</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to='/news'
                         className={({isActive}) => (isActive ? styles.linkActive : styles.link)}>News</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to='/music'
                         className={({isActive}) => (isActive ? styles.linkActive : styles.link)}>Music</NavLink>
            </div>

            <div className={`${styles.item} pt-50`}>
                <NavLink to='/setting'
                         className={({isActive}) => (isActive ? styles.linkActive : styles.link)}>Setting</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to='/friends'
                         className={({isActive}) => (isActive ? styles.linkActive : styles.link)}>
                    Friends
                    <div className='mt-15'>
                        <img className='userImg ml-5' width={35} height={35}
                             src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/02.jpg"
                             alt=""/>
                        <img className='userImg ml-5' width={35} height={35}
                             src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/02.jpg"
                             alt=""/>
                        <img className='userImg ml-5' width={35} height={35}
                             src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/02.jpg"
                             alt=""/>
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}


