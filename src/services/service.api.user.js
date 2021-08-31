const url = "https://jsonplaceholder.typicode.com"

const fetchUsers = () => {
    return fetch(url + "/users").then(value => value.json())
}

const addUser = (user) => {
    return fetch(url + "/users", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}
export {fetchUsers, addUser}