import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "./User";
import {Route} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";

export default function Users(props) {
    let {match: {url}, history} = props;
    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])
  return (
    <div>
        {
            users.map(thisUser => <User history={history} key={thisUser.id} thisUser={thisUser}/>)
        }

        <Route path={`${url}/:id`} render={(props) => {
            return <UserDetails {...props}/>
        }}/>
    </div>
  );
}