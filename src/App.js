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
import UpdateCar from "./components/update-car/UpdateCar";

export default function App() {
  return (
      <Router>
          <div>
              <div className={"wrap"}>
                  <Link to={"/"}>Default</Link>
                  <Link to={"/cars"}>Cars</Link>
                  <Link to={"/create-car"}>Create-Car</Link>
                  <Link to={"/update-car"}>Update-Car</Link>
              </div>

              <div className={"route"}>
              <Switch>
                  <Route path={"/cars"} component={Cars}/>
                  <Route path={"/create-car"} component={CreateCar}/>
                  <Route path={"/update-car"} component={UpdateCar}/>
              </Switch>
              </div>
          </div>
      </Router>
  );
}