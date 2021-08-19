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
import Comments from "./components/comments/Comments";

export default function App() {
  return (
      <Router>
          <div>
              <div className={"wrap"}>
                  <Link to={"/"}>Default</Link>
                  <Link to={"/users"}>Users</Link>
                  <Link to={"/posts"}>Posts</Link>
                  <Link to={"/comments"}>Comments</Link>
              </div>

              <Switch>
                  <Route path={"/users"} component={Users}/>
                  <Route path={"/posts"} component={Posts}/>
                  <Route path={"/comments"} component={Comments}/>
              </Switch>
          </div>
      </Router>
  );
}
