import axios from "axios";

import style from './Users.module.scss'
import avatar from '../../images/11.png'


export const Users = ({users, toggleFollow, setUsers}) => {

    const getUsers = () => {
        debugger
        if (users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                console.log(response.data.items)
                setUsers(
                    response.data.items
                )
            })

        }
    }

    return (
        <div className='p-40'>
            <button onClick={getUsers}>Get Users</button>
            {users.map(user => {
                return (
                    <div key={user.id} className={`${style.user} d-flex`}>
                        <div className={style.userLeft}>
                            <div>
                                <div>
                                    <img width={95} height={95}
                                         src={user.photos.small ? user.photos.small : avatar}
                                         alt="ava"/>
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
                                    {user.name}
                                </div>
                                <div>
                                    {user.status}
                                </div>
                            </div>
                            <div>
                                <div className={style.location}>{'user.location.city'} {'user.location.country'}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
