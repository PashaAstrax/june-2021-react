import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/user.axios.service";
import Posts from "../posts/Posts";

export default function User({userS}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsOfUser(userS.id).then(({data}) => setPosts([...data]));
    }, [userS.id]);

  return (
    <div>
        <h2>{userS.id}. {userS.name}</h2>
        <Posts items={posts}/>
    </div>
  );
}