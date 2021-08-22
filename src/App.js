import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import StaticUserDetails from "./components/static-user-details/StaticUserDetails";

export default function App() {
  return (
      <Router>

          <div>
              <Link to={"/"}>Home</Link>
              <br/>
              <Link to={"/users"}>Users page</Link>
          </div>
          <Switch>
              <Route path={"/users"} component={Users}/>

          </Switch>
      </Router>
  );
}