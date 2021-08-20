import "./App.css"
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
              <div className={"wrap"}>
                  <Link to={"/"}>Default</Link>
                  <Link to={"/cars"}>Cars</Link>
                  <Link to={"/create-car"}>Create-Car</Link>
              </div>

              <div className={"route"}>
              <Switch>
                  <Route path={"/cars"} component={Cars}/>
                  <Route path={"/create-car"} component={CreateCar}/>
              </Switch>
              </div>
          </div>
      </Router>
  );
}