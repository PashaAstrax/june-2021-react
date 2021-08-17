import {useEffect, useState} from "react";
import {saveCar} from "../service/car.api.service";
import Inform from "./Inform";
import {getCars} from "../service/get.car.api.service";

export default function Form() {

    let [formState, setFormState] = useState({model: "", price: "", year: ""});
    let [cars, setCars] = useState([]);

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, []);

    let save = (e) => {
        e.preventDefault();
        console.log(formState);
        saveCar(formState);
    };
    return (
        <div>
            <div>
                <form onSubmit={save}>
                    <input type="text" name={"model"} value={formState.model} onChange={onFormInputChange} placeholder={"model"}/>
                    <input type="number" name={"price"} value={formState.price} onChange={onFormInputChange} placeholder={"price"}/>
                    <input type="number" name={"year"} value={formState.year} onChange={onFormInputChange} placeholder={"price"}/>
                    <input type="submit"/>
                </form>
            </div>
            <div>
                {
                    cars.map(thisCars => <Inform key={thisCars.id} thisCars={thisCars}/>)
                }
            </div>
        </div>
    );
}