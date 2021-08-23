import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
// import StaticUserDetails from "./components/static-user-details/StaticUserDetails";
import Posts from "./components/posts/Posts";

export default function App() {
  return (
      <Router>
          <div>
              <Link to={"/"}>Home</Link>
              <br/>
              <Link to={"/users"}>Users page</Link>
              <br/>
              <Link to={"/posts"}>Posts page</Link>
          </div>
          <Switch>
              <Route path={"/users"} component={Users}/>
              <Route path={"/posts"} component={Posts}/>
          </Switch>
      </Router>
  );
}