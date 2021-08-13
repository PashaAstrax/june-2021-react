import {useEffect, useState} from "react";
import {getAxiosUsers} from "../../services/user.axios.service";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getAxiosUsers().then(({data}) => setUsers([...data]));
    }, []);

  return (
    <div>
        {
            users.map((userS) => <User key={userS.id} userS={userS}/>)
        }
    </div>
  );
}
