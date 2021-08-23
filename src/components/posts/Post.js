import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter, useHistory
} from "react-router-dom";

export default function Post({thisPosts}) {
    // console.log(useHistory())
    // console.log(history.state)
  return (
    <div>
        <h4>{thisPosts.id}. <i>{thisPosts.title}</i></h4> - <Link to={{pathname: "/posts/" + thisPosts.id}}>More info</Link>
        {/*<h4>- {thisPosts.body}</h4>*/}

        <hr/>
    </div>
  );
}