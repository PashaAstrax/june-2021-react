import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Cars from "./components/cars/Cars";
import CreateCar from "./components/create-car/CreateCar";

export default function App() {
  return (
      <Router>
          <div>
              <Link to={"/"}>Default</Link>
              <br/>
              <Link to={"/cars"}>Cars</Link>
              <br/>
              <Link to={"/create-car"}>Create-Car</Link>

              <Switch>
                  <Route path={"/cars"} component={Cars}/>
                  <Route path={"/create-car"} component={CreateCar}/>
              </Switch>
          </div>
      </Router>

  );
}