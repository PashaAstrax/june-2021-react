import "./Style.css"
import {useEffect, useState} from "react";
import {deleteCar, getCars, patchCar, saveCar} from "../services/car.service";
import Inform from "./Inform";

export default function Form() {

    let [cars, setCars] = useState([]);
    let [formState, setFormState] = useState({model: "", price: "", year: "", id: ""})

    useEffect(() => {
        getCars().then(value => setCars(value.reverse()))
    }, [cars]);

    let save = (e) => {
        e.preventDefault()
        if (e.target.model.value.length > 20 || e.target.model.value.length < 1) {
            window.alert("model: only alpha min 1 max 20 characters");
        }else {
            if (e.target.price.value <= 0) {
                window.alert("price: greater or equal than 0");
            } else {
                if (e.target.year.value < 1990 || e.target.year.value > 2021) {
                    window.alert("year: min 1990, max current year");
                } else {
                    let carToSave = {
                        model: e.target.model.value,
                        price: e.target.price.value,
                        year: e.target.year.value,
                        // id: 5135
                    }
                    saveCar(carToSave)
                    // if (carToSave.id === "") {
                    //     patchCar(carToSave)
                    // } else {
                    //     saveCar(carToSave)}
                }
            }
        }
    };
    const delFunction = (id) => {
        deleteCar(id)
        let filterCars = cars.filter(value => value.id !== id);
        setCars([...filterCars])
    };

    const patchFunction = (value) => {
        // patchCar()
        setFormState({...value})
    };

  return (
    <div>
        <div className={"forms"}>
            <form onSubmit={save}>
                <input type="text" name={"model"} value={formState.model} onChange={patchFunction} placeholder={"model"}/>
                <input type="number" name={"price"} value={formState.price} onChange={patchFunction} placeholder={"price"}/>
                <input type="number" name={"year"} value={formState.year} onChange={patchFunction} placeholder={"year"}/>
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