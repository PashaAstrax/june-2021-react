import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, fetchUsers} from "./services/service.api.user";
import {fetch_users, push_user} from "./redux/actions";
import {clear_users} from "./redux/actions/actions";

export default function App() {

    let state = useSelector(state => {
        let {rootReducer} = state;
        return rootReducer;
    })
    let {users} = state;
    let dispatch = useDispatch();

    useEffect(() => {
        fetchUsers().then(value => {
            dispatch(fetch_users(value))
        })
    }, [dispatch])

    let clearUsers = () => {
        dispatch(clear_users())
    };
    let setUsers = () => {
        fetchUsers().then(value => {
            dispatch(fetch_users(value))
        })
    };
    let onSubmit = (e) => {
        e.preventDefault()
        let name = e.target.name.value;
        let username  = e.target.username.value;
        let email = e.target.email.value;

        let user = {name, username, email};

        addUser(user).then(value => {
            console.log(value);
            dispatch(push_user(value))
        })
    };
    return (
    <div>
        <button onClick={clearUsers}>clear users</button>
        <button onClick={setUsers}>set users</button>

        <form onSubmit={onSubmit}>
            <input type="text" name={"name"}/>
            <input type="text" name={"username"}/>
            <input type="text" name={"email"}/>
            <button>add user</button>
        </form>

        {
            users.map(value => <div key={value.id}>{value.name} - {value.username} - {value.email}</div>)
        }
    </div>
  );
}