import style from './Users.module.scss'


export const Users = ({users, toggleFollow, setUsers}) => {
    if (users.length === 0) {
        setUsers(
            [
                {
                    id: 1,
                    photo: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/11.png',
                    followed: false,
                    fullName: 'Alex.A.V',
                    location: {city: 'Russia', country: 'Moscow'},
                    status: 'I am so pretty'
                },
                {
                    id: 2,
                    photo: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/11.png',
                    followed: true,
                    fullName: 'Islam.F.D',
                    location: {city: 'Russia', country: 'Makhachkala'},
                    status: 'I am so pretty'
                },
                {
                    id: 3,
                    photo: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/11.png',
                    followed: false,
                    fullName: 'Oleg.G.Z',
                    location: {city: 'Russia', country: 'Yekaterinburg'},
                    status: 'I am so pretty'
                },
            ]
        )
    }

    return (
        <div className='p-40'>
            {users.map(user => {
                return (
                    <div key={user.id} className={`${style.user} d-flex`}>
                        <div className={style.userLeft}>
                            <div>
                                <div>
                                    <img width={95} height={95} src={user.photo} alt="ava"/>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => {
                                    toggleFollow(user.id)
                                }}
                                        className={style.userBtn}>{user.followed ? 'Follow' : 'Unfollow'}</button>
                            </div>
                        </div>
                        <div className={style.userRight}>
                            <div>
                                <div className='mb-30'>
                                    {user.fullName}
                                </div>
                                <div>
                                    {user.status}
                                </div>
                            </div>
                            <div>
                                <div className={style.location}>{user.location.city} {user.location.country}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
