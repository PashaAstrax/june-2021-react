import "./Style.css"
import {useEffect, useState} from "react";
import {getCars, putCar, saveCar} from "../services/car.service";
import Inform from "./Inform";

export default function Form() {

    let [cars, setCars] = useState([]);
    let [formState, setFormState] = useState(null);

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
                    }
                    if (formState === null) {
                        saveCar(carToSave)
                    } else {
                        putCar(carToSave, formState.id)}
                }
            }
        }
    };

    let [model, setModel] = useState('model')
    let [price, setPrice] = useState('price')
    let [year, setYear] = useState('year')

    let onModelChange = (e) => {setModel(e.target.value)}
    let onPriceChange = (e) => {setPrice(e.target.value)}
    let onYearChange = (e) => {setYear(e.target.value)}

    let putFunction = (editCar) => {
        setFormState({...editCar})
        setModel(editCar.model)
        setPrice(editCar.price)
        setYear(editCar.year)
    }

  return (
    <div>
        <div className={"forms"}>
            <form onSubmit={save}>
                <input type="text" name={"model"} value={model} onChange={onModelChange} placeholder={"model"}/>
                <input type="text" name={"price"} value={price} onChange={onPriceChange} placeholder={"price"}/>
                <input type="text" name={"year"} value={year} onChange={onYearChange} placeholder={"year"}/>
                <input type="submit"/>
            </form>
        </div>

        <div className={"info-car"}>
            {
                cars.map(thisCars => <Inform key={thisCars.id} thisCars={thisCars} putFunction={putFunction}/>)
            }
        </div>
    </div>
  );
}