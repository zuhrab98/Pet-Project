import styles from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <>
            <div className={`${styles.profileImage} d-flex mb-30`}>
                <img height={300} src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt=""/>
            </div>

            <div className={`${styles.profileInfo} p-40`}>
                <div className={`d-flex mb-30`}>
                    <div className='mr-15'>
                        <img width={82} height={82}
                             src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/07.jpg"
                             alt=""/>
                    </div>
                    <div>
                        <h6>Zuhrab A</h6>
                        <p> Date of Birth: 1 january lorem lorem</p>
                        <p>City: Moscow</p>
                        <p>Education: EAT</p>
                        <p>Web Site: zuhrab.ru</p>
                    </div>
                </div>
            </div>
        </>
    )
}