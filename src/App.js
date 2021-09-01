import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUserWithThunk, fetchUsersWithThunk} from "./services/service";

export default function App() {

    let state = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersWithThunk())
        // fetchUsersWithThunk()(dispatch)
    },[dispatch])
    
    const add = (e) => {
        e.preventDefault();
        let name = e.target.name.value
        let user = {name}
        dispatch(addUserWithThunk(user))
        // addUserWithThunk(user)(dispatch)
    }

    let {users} = state;

    return (
    <div>
        <form onSubmit={add}>
            <input type="text" name={"name"}/>
            <button>save user</button>
        </form>
        {users.map(value => <div key={value.id}>{value.name}</div>)}
    </div>
  );
}