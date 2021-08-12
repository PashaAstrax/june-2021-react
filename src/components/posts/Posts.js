import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getAxiosPosts} from "../../services/post.axios.service";

export default function Posts({items}) {

  let[posts, setPosts] = useState([])

  useEffect(() => {
      getAxiosPosts().then(({data}) => setPosts([...data]));
      }, [])

  return (
      <div>
          {
              posts.map((postS, index) => <Post  key={postS.id} postS={postS}/>)
          }

      </div>
  );
}