import Comments from "../comments/Comments";
import {useEffect, useState} from "react";
import {getCommentsOfPosts} from "../../services/user.axios.service";

export default function Post({item}) {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsOfPosts(item.id).then(({data}) => setComments([...data]));
    }, [item.id]);

  return (
    <div>
        <h2>"{item.title}"</h2>
        <Comments itemS={comments}/>
    </div>
  );
}