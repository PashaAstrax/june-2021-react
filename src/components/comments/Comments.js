import {useEffect, useState} from "react";
import {getComments} from "../../services/api.service";
import Comment from "./Comment";

export default function Comments() {
    let [comments, setComments] = useState([])

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, [])
  return (
    <div>
        {
            comments.map(thisComments => <Comment key={thisComments.id} thisComments={thisComments}/>)
        }
    </div>
  );
}