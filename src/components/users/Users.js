import "./Users.css"
import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../services/user.fetch.service";
import User from "../user/User";
import Post from "../post/Post";

export default function Users() {

    let [users, setUsers] = useState([])
    let [posts, setPosts] = useState(null)

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    const postsFunction = (userId) => {
        getPostsOfUser(userId).then(value => setPosts([...value]))
    }

    return (
        <div className='wrap'>
            <div className='users'>
                {
                    users.map(thisUser => <User key={thisUser.id} thisUser={thisUser} postsFunction={postsFunction}/>)
                }
            </div>

            {posts && <div className='posts'>
                {
                    posts.map(thisPost => <Post key={thisPost.id} thisPost={thisPost}/>)
                }
            </div>}
        </div>
    );
}