import styles from './Post.module.css'

export const Post = ({message}) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemAvatar}>
                <img  width={35} height={35} src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/02.jpg" alt="" />
                {message}
            </div>
        </div>
    )
}