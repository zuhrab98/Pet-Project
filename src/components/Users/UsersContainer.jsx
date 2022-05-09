import {connect} from "react-redux";
import {Users} from "./Users";
import {setUsersAC, toggleFollowAC} from "../../redux/users-reducer";


// Которая принимает весь state целиком, глобальный state всего приложения
// И возврошает объект только с теми данными которые нам нужны
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

// Которая служит для того чтобы  дочерней презинтационной компоненте
// передобать через пропсы колбэки
let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)