import React from "react";
import styles from './MyPosts.module.css'
import {Post} from './Post/Post'

export const MyPosts = ({profilePage, dispatch}) => {
    // получаем данные из inputa
    let newPosctElem = React.createRef()

    const addPostOnClick = () => {
        dispatch({type: 'ADD POST'})
    }

    const onPostChange = () => {
        dispatch({type: 'UPDATE POST TEXT', newText: newPosctElem.current.value})
    }

    return (
        <div className='p-40 pt-0'>
            <div className={styles.myPost}>
                <h4>My posts</h4>
                <input ref={newPosctElem} className={`${styles.myPostInput} d-block mb-10`} type="text"
                       // при изминении inputa мы в state добовляем тот текст который напичатали
                       onChange={onPostChange}
                       // Значение приходит из state
                       value={profilePage.newPostText}
                       placeholder='your news...'/>

                <button onClick={addPostOnClick} className={styles.myPostBtn} type='submit'>Add Post</button>
            </div>
            <div className={styles.posts}>
                {profilePage.posts.map(item => <Post message={item.message} likesCount={item.likesCount}/>)}
            </div>
        </div>
    )
}