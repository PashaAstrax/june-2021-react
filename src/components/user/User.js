import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/user.fetch.service";
import Posts from "../posts/Posts";

export default function User({item, choseUser }) {

    const onClickUserChose = () => {
        choseUser(item);
    }

    // let [posts, setPosts] = useState([])
    // useEffect(() => {
    //     getPostsOfUser(item.id).then(({value}) => console.log(value))
    // }, [item.id])

  return (
    <div>
        {item.id}. {item.name} {""}
        <button onClick={onClickUserChose}>posts</button>
        {/*<Posts items={posts}/>*/}
    </div>
  );
}