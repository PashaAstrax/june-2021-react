import axios from "axios";

let config = {
    baseURL: "https://jsonplaceholder.typicode.com",
}
let axiosInstance = axios.create(config);

const getAxiosUsers = () => {
    return axiosInstance.get("/users");
}

const getPostsOfUser = (id) => {
    return axiosInstance.get("/users/" + id + "/posts");
}

const getCommentsOfPosts = (id) => {
    return axiosInstance.get("/posts/" + id + "/comments");
}

export {getAxiosUsers, getPostsOfUser, getCommentsOfPosts};