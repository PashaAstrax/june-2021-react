import {useEffect, useState} from "react";
import {deleteCar, getCars, patchCar, saveCar} from "../services/car.service";
import Inform from "./Inform";
import "./Style.css"

export default function Form() {

    let [formState, setFormState] = useState({model: "", price: "", year: ""});
    let [cars, setCars] = useState([])

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])

    let save = (e) => {
        // e.preventDefault()
        saveCar(formState)
    }

    const delFunction = (id) => {
        deleteCar(id)
        let filterCars = cars.filter(value => value.id !== id);
        setCars([...filterCars])
    }

    const patchFunction = (id) => {
        patchCar(id)
    }
  return (
    <div>
        <div className={"forms"}>
            <form onSubmit={save}>
                <input type="text" name={"model"} value={formState.model} onChange={onFormInputChange} placeholder={"model"}/>
                <input type="number" name={"price"} value={formState.price} onChange={onFormInputChange} placeholder={"price"}/>
                <input type="number" name={"year"} value={formState.year} onChange={onFormInputChange} placeholder={"year"}/>
                <input type="submit"/>
            </form>
        </div>

        <div className={"info-car"}>
            {
                cars.map(thisCars => <Inform key={thisCars.id} thisCars={thisCars} delFunction={delFunction} patchFunction={patchFunction}/>)
            }
        </div>
    </div>
  );
}