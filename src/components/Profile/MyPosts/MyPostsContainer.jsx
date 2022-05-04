import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {MyContext} from "../../../MyContext";

export const MyPostsContainer = () => {

    // Презитнационная компонента
    // получает нечего лишнего, только данные и колбэки
    return (
        // Передаем контекст store
        <MyContext.Consumer>{
            (store ) => {
                const profilePage = store.getState().profilePage
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onPostChange = (text) => {
                    store.dispatch(updatePostTextActionCreator(text))
                }

                return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={profilePage.posts}
                                newPostText={profilePage.newPostText}/>
            }
        }</MyContext.Consumer>
    )

}