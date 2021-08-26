import {deleteCar} from "../services/car.service";

export default function Inform({thisCars, patchFunction}) {

    const delFunction = () => {
        deleteCar(thisCars.id)
    };
    
    const editThisCar = () => {
        patchFunction(thisCars)
    }
    
    return (
    <div>
        <h4>#{thisCars.id}, <i>"{thisCars.model}",</i> {thisCars.price}$, {thisCars.year} year</h4>

        <button type={"submit"} onClick={delFunction}>delete</button>

        <button type={"submit"} onClick={editThisCar}>edit</button>
    </div>
  );
}