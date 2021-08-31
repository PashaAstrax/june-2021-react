import {CLEAR_USERS, FETCH_USERS, PUSH_USER} from "../actions/actionTypes";

export const rootReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case FETCH_USERS:
            // console.log(action.payload)
            return {...state, users: [...action.payload]}
        case CLEAR_USERS:
            return {...state, users: []}
        case PUSH_USER:
            // state.users.push(action.payload)
            // return {...state}
            return {...state, users:[...state.users, action.payload]}
        default:
            return state;
    }
}