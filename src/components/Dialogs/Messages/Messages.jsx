import styles from './Messages.module.scss'

export const Messages = ({massage}) => {
    return (
        <div className={styles.message}>
            {massage}
        </div>
    )
}