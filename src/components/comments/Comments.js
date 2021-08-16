import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.fetch.service";
import Comment from "../comment/Comment";
import Incomment from "../incomment/Incomment";

export default function Comments() {

    let [comments, setComments] = useState([])
    let [comment, setComment] = useState(null)

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, [])

    const commentsFunc = (value) => {
        setComment([...value])
    }

  return (
    <div className={"wrap"}>
        <div className={"comments"}>
            {
                comments.map(thisComment => <Comment key={thisComment.id} thisComment={thisComment} commentsFunc={commentsFunc}/>)
            }
        </div>

        <div className={"comment"}>
            {
                comment && <Incomment value={comment}/>
            }
        </div>
    </div>
  );
}