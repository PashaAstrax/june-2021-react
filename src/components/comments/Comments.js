import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.fetch.service";
import Comment from "../comment/Comment";
import Incomment from "../incomment/Incomment";

export default function Comments() {

    let [comments, setComments] = useState([])
    let [comment, setComment] = useState([])

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, [])

    const commentsFunc = (id) => {
        setComment([...id])
    }

  return (
    <div>
        <div className={"comments"}>
            {
                comments.map(thisComment => <Comment key={thisComment.id} commentsFunc={commentsFunc}/>)
            }
        </div>

        <div className={"comment"}>
            {
                <Incomment value={comment}/>
            }
        </div>
    </div>
  );
}