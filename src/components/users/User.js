import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter, useHistory
} from "react-router-dom";

export default function User({thisUser, history}) {
    // let history = useHistory();
    let navigate = () => {
        history.push("/users/" + thisUser.id, thisUser)
    };
    return (
    <div>
        {thisUser.id}. {thisUser.name} - <button  onClick={navigate}>more info</button>
        <hr/>
    </div>
  );
}