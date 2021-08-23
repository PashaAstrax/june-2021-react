import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter, useHistory
} from "react-router-dom";
import PostDetails from "../post-details/PostDetails";

export default function Post({thisPosts}) {

  return (
    <div>
        <hr/>
        <h4>{thisPosts.id}. <i>{thisPosts.title}</i> - <Link to={{pathname : /posts/ + thisPosts.id, state : thisPosts}}>More info</Link></h4>

        <Route path={'/posts/' + thisPosts.id} component={PostDetails}/>
    </div>
  );
}