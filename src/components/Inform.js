import {deleteCar} from "../services/car.service";

export default function Inform({thisCars, putFunction}) {

    const delFunction = () => {
        deleteCar(thisCars.id)
    };
    
    const editCar = () => {
        putFunction(thisCars)
    }
    
    return (
    <div>
        <h4>#{thisCars.id}, <i>"{thisCars.model}",</i> {thisCars.price}$, {thisCars.year} year</h4>

        <button type={"submit"} onClick={delFunction}>delete</button>

        <button type={"submit"} onClick={editCar}>edit</button>
    </div>
  );
}