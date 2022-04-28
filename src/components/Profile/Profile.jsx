import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = ({store}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={store.state.profilePage} dispatch={store.dispatch}/>
        </div>
    )
}