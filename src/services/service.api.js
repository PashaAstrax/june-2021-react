const url = "https://jsonplaceholder.typicode.com"

const getUsers = () => {
    return fetch(url + "/users").then(value => value.json())
};
const getUser = (id) => {
    return fetch(url + "/users/" + id).then(value => value.json())
};

const getPosts = () => {
    return fetch(url + "/posts").then(value => value.json())
};

export {getUsers, getPosts, getUser}