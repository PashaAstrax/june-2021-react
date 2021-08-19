import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service";
import User from "./User";

export default function Users() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])
  return (
    <div>
        {
            users.map(thisUser => <User key={thisUser.id} thisUser={thisUser}/>)
        }
    </div>
  );
}