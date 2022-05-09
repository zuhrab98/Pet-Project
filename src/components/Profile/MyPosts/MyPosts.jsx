import React from "react";
import styles from './MyPosts.module.css'
import {Post} from './Post/Post'

export const MyPosts = ({updateNewPostText, addPost, posts, newPostText}) => {

    const onAddPost = () => {
        addPost()
    }

    const onPostChange = (e) => {
        updateNewPostText(e.target.value)
    }

    return (
        <div className='p-40 pt-0'>
            <div className={styles.myPost}>
                <h4>My posts</h4>
                <input className={`input d-block mb-10`} type="text"
                    // при изминении inputa мы в state добовляем тот текст который напичатали
                       onChange={onPostChange}
                    // Значение приходит из state
                       value={newPostText}
                       placeholder='your news...'/>

                <button onClick={onAddPost} className='addBtn' type='submit'>Add Post</button>
            </div>
            <div className={styles.posts}>
                {posts.map((item, index) => <Post key={index} message={item.message} likesCount={item.likesCount}/>)}
            </div>
        </div>
    )
}