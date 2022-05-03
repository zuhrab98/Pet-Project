import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = ({store}) => {
    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text) => {
        store.dispatch(updatePostTextActionCreator(text))
    }

    // Презитнационная компонента
    // Презитнационная получает нечего лишнего, только данные и колбеки
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={store.getState().profilePage.posts}
                     newPostText={store.getState().profilePage.newPostText}/>)
}