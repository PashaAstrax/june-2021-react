import "./Style.css"
import {useEffect, useState} from "react";
import {deleteCar, getCars, patchCar, saveCar} from "../services/car.service";
import Inform from "./Inform";

export default function Form() {

    let [cars, setCars] = useState([]);

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
                        year: e.target.year.value
                    }
                    saveCar(carToSave)
                }
            }
        }
    };
    const delFunction = (id) => {
        deleteCar(id)
        let filterCars = cars.filter(value => value.id !== id);
        setCars([...filterCars])
    };

    const patchFunction = (id) => {
        patchCar(id)
    };

  return (
    <div>
        <div className={"forms"}>
            <form onSubmit={save}>
                <input type="text" name={"model"} placeholder={"model"}/>
                <input type="number" name={"price"} placeholder={"price"}/>
                <input type="number" name={"year"} placeholder={"year"}/>
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