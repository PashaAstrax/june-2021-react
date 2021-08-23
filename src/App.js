import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

export default function App() {
  return (
      <Router>
          <div className={"links"}>
              <Link to={"/"}>Home</Link>
              <Link to={"/users"}>Users page</Link>
              <Link to={"/posts"}>Posts page</Link>
          </div>
          <Switch>
              <Route path={"/users"} component={Users}/>
              <Route path={"/posts"} component={Posts}/>
          </Switch>
      </Router>
  );
}