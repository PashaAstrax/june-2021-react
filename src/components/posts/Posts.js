import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import Post from "./Post";
import {Route} from "react-router-dom";
import PostDetails from "../post-details/PostDetails";

export default function Posts({match: {url}}) {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])
  return (
    <div>
        {
            posts.map(thisPosts => <Post key={thisPosts.id} thisPosts={thisPosts}/>)
        }
        <Route path={`${url}/:id`} component={PostDetails}/>
    </div>
  );
}