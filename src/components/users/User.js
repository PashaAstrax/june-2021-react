import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter, useHistory
} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";

export default function User({thisUser, history}) {
    // let history = useHistory();
    let navigate = () => {
        history.push("/users/" + thisUser.id, thisUser)
    };
    return (
    <div>
        {/*{thisUser.id}. {thisUser.name} - <Link to={{pathname: "/users/" + thisUser.id, state: thisUser}}>user static details</Link>*/}
        {/*{thisUser.id}. {thisUser.name} - <Link to={{pathname: "/users/" + thisUser.id}}>user static details</Link>*/}
        {thisUser.id}. {thisUser.name} - <button  onClick={navigate}>more info</button>
        <hr/>

        {/*інфа під кожним юзером*/}
        {/*<Route path={"/users/" + thisUser.id} component={UserDetails}/>*/}
    </div>
  );
}