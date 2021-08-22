import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../../services/service.api";
import AboutUser from "../users/AboutUser";

export default function UserDetails(/*{match: {params: {id}}}*/) {
    let {id} = useParams()

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