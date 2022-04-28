import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img width={50} height={50}
                     src="https://www.freepnglogos.com/uploads/eagle-png-logo/lakes-eagles-png-logo-14.png" alt="ps4"/>
            </div>
        </header>
    )
}