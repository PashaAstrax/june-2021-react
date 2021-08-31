import {CLEAR_USERS, FETCH_USERS, PUSH_USER} from "./index";

const fetch_users = (value) => {
    return {type: FETCH_USERS, payload: value}
}

const push_user = (value) => {
    return {type: PUSH_USER, payload: value}
}

const clear_users = (value) => {
    return {type: CLEAR_USERS}
}

export {fetch_users, push_user, clear_users}