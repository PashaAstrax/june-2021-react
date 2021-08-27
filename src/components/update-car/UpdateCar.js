import {useEffect, useState} from "react";
import {getCar, getCars, updateCar} from "../../services/api.service";

export default function UpdateCar() {

    let [cars, setCars] = useState([])
    let [formState, setFormState] = useState({model: "", price: "", year: ""})

    useEffect(() => {
        getCars().then(value => setCars([...value.reverse()]))
    }, [])

    let onFormSubmit = (e) => {
        e.preventDefault()
        updateCar(formState, formState.id)
    }

    let onFormChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    let onSelectChange = (e) => {
        getCar(e.target.value).then(value => setFormState({...value}))
    }

    return (
        <div>
            <div>
                <form onChange={onSelectChange}>
                    <label><i>Select the car</i> - </label>
                    <select>
                        {
                            cars.map(thisCar => <option key={thisCar.id} value={thisCar.id}>{thisCar.model}</option>)
                        }
                    </select>
                </form>
            </div>

            <div>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name={"model"} value={formState.model} onChange={onFormChange} placeholder={"model"}/>
                    <input type="number" name={"price"} value={formState.price}  onChange={onFormChange} placeholder={"price"}/>
                    <input type="number" name={"year"} value={formState.year} onChange={onFormChange} placeholder={"year"}/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
};
