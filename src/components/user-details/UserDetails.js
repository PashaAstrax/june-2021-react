import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../../services/service.api";
import User from "../users/User";
import AboutUser from "../users/AboutUser";

export default function UserDetails({match: {params: {id}}}) {
    // let {id: userId} = useParams("id")
    // console.log(id)
    // console.log(userId)
    let [user, setUser] = useState({})
    useEffect(() => {
        getUser(id).then(value => setUser({...value}))
    }, [id])
  return (
    <div>
        {
            <AboutUser value={user}/>
        }
    </div>
  );
}