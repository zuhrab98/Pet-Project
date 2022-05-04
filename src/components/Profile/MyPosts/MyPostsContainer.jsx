import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

// export const MyPostsContainer = () => {
//
//     // Презитнационная компонента
//     // получает нечего лишнего, только данные и колбэки
//     return (
//         // Передаем контекст store
//         <MyContext.Consumer>{
//             (store) => {
//                 const profilePage = store.getState().profilePage
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//
//                 const onPostChange = (text) => {
//                     store.dispatch(updatePostTextActionCreator(text))
//                 }
//
//                 return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={profilePage.posts}
//                                 newPostText={profilePage.newPostText}/>
//             }
//         }</MyContext.Consumer>
//     )
//
// }


// Здесь у нас будут сидеть данные из state
// замапить state на пропсы
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

// Здесь у нас будут сидеть колбэки
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updatePostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

// connect Она создает контейнерную компаненту внутри нее она рендерит презинтационную компоненту
// и внутрь презинтационной компоненты в качестве пропсов  передает те свойства
// которые сидят в этих двух объектах т.е func

// Внутрь connect мы передаем две функции, и она сама их вызыввает и в первую func он засунет state
// А во вторую func засунет dispatch уже забайндинную на store
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)