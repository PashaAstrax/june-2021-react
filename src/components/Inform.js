// import {patchCar} from "../services/car.service";

export default function Inform({thisCars, delFunction, patchFunction}) {
    return (
    <div>
        <h4>#{thisCars.id}, <i>"{thisCars.model}",</i> {thisCars.price}$, {thisCars.year} year</h4>

        <button onClick={() => {delFunction(thisCars.id)
            console.log("delete:", thisCars)}}>delete
        </button>

        <button onClick={() => {patchFunction(thisCars)
            console.log("car update...", thisCars)}}>edit</button>
    </div>
  );
}