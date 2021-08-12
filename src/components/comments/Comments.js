import {useEffect, useState} from "react";
import {getAxiosComments} from "../../services/comment.axios.service";
import Comment from "../comment/Comment";

export default function Comments() {

    let [comments, setComments] = useState([])

    useEffect(() => {
        getAxiosComments().then(({data}) => setComments([...data]));
        }, []);

    return (
        <div>
            {
                comments.map((commentS, index) => <Comment key={commentS.id} commentS={commentS}/>)
            }
        </div>
    );
}