import {useState} from "react";
import {saveUser} from "../service/car.api.service";

export default function SuperForm() {

    // let [username, setUsername] = useState("")
    // let [email, setEmail] = useState("")

    // let onUserNameChange = (e) => {
    //     console.log(e.target.value)
    //     setUsername(e.target.value)
    // };
    // let onEmailChange = (e) => {
    //     console.log(e.target.value)
    //     setEmail(e.target.value)
    // };

    let [formState, setFormState] = useState({username: "", email: "", name: ""});

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    };

    let save = (e) => {
        e.preventDefault();
        // console.log(formState);
        saveUser(formState);
    };
    return (
    <div>
        <form onSubmit={save}>
            <input type="text" name={"username"} value={formState.username} onChange={onFormInputChange} placeholder={"name"}/>
            <input type="text" name={"email"} value={formState.email} onChange={onFormInputChange}/>
            <input type="text" name={"name"} onChange={onFormInputChange}/>
            <input type="submit"/>
        </form>
    </div>
  );
}