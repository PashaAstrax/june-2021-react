import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.fetch.service";
import Post from "../post/Post";
import Inpost from "../inpost/Inpost";
import "./Posts.css"

export default function Posts() {

    let [posts, setPosts] = useState([])
    let [post, setPost] = useState(null)

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, []);

    const postsFunction = (value) => {
        setPost([...value])
    }

    return (
    <div className={"wrap"}>
        <div className={"posts"}>
            {
                posts.map(thisPost => <Post key={thisPost.id} thisPost={thisPost} postsFunction={postsFunction}/>)
            }
        </div>

        <div className={"post"}>
            {
                post && <Inpost value={post}/>
            }
        </div>
    </div>
  );
}