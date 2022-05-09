const TOGGLE_FOLLOW = 'TOGGLE FOLLOW';
// const UN_FOLLOW = 'UN FOLLOW';
const SET_USERS = 'SET USERS';

const initialState = {
    users: [
        // {
        //     id: 1,
        //     photo: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/11.png',
        //     followed: false,
        //     fullName: 'Alex.A.V',
        //     location: {city: 'Russia', country: 'Moscow'},
        //     status: 'I am so pretty'
        // },
        // {
        //     id: 2,
        //     photo: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/11.png',
        //     followed: true,
        //     fullName: 'Islam.F.D',
        //     location: {city: 'Russia', country: 'Makhachkala'},
        //     status: 'I am so pretty'
        // },
        // {
        //     id: 3,
        //     photo: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/11.png',
        //     followed: false,
        //     fullName: 'Oleg.G.Z',
        //     location: {city: 'Russia', country: 'Yekaterinburg'},
        //     status: 'I am so pretty'
        // },
    ]
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.userId) {
                        if (item.followed) {
                            return {
                                ...item,
                                followed: false
                            }
                        } else {
                            return {
                                ...item,
                                followed: true
                            }
                        }

                    }
                    return item
                })
            }
        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users ]}
        }
        default:
            return state

    }

}

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId})
// export const unFollowAC = (userId) => ({type: UN_FOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
