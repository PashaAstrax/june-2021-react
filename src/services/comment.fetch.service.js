const URL = "https://jsonplaceholder.typicode.com/comments";

const getComments = () => {
    return fetch(URL).then(value => value.json())
};

export {getComments};