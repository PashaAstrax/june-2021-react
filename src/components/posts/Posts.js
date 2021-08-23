import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import Post from "./Post";

export default function Posts() {
    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])
  return (
    <div>
        {
            posts.map(thisPosts => <Post key={thisPosts.id} thisPosts={thisPosts}/>)
        }
    </div>
  );
}