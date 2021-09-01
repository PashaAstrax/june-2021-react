import {addUser, loadUsers} from "../redux/actionCreators";

const fetchUsersWithThunk = () => async (dispatch) => {
    let responce = await (await fetch ("https://jsonplaceholder.typicode.com/users")).json();
    dispatch(loadUsers(responce));
}

const addUserWithThunk = (payload) => async (dispatch) => {
    let responce = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let savedUser = await responce.json()
    dispatch(addUser(savedUser))
}

export {fetchUsersWithThunk, addUserWithThunk}