
import {useEffect, useState} from "react";
// import './UpdateCar.css'
import {getCar, getCars, updateCar} from "../../services/api.service";

export default function UpdateCar() {

    let [cars, setCars] = useState([])

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [cars])

    let onFormSubmit = (e) => {
        e.preventDefault()
        updateCar(formState, formState.id)
    }

    let [formState, setFormState] = useState({model: '', price: '', year: ''})

    let onFormChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    let onSelectChange = (e) => {
        getCar(e.target.value).then(value => setFormState({...value}))
    }

    return (
        <div>
            <div>
                <form className={'select_form'} onChange={onSelectChange}>
                    <label htmlFor="cars">Select a car</label>
                    <select name="cars" id="cars">
                        {
                            cars.map(thisCar => <option value={thisCar.id}>{thisCar.model}</option>)
                        }
                    </select>
                </form>
            </div>

            <div>
                <form className={'edit_form'} onSubmit={onFormSubmit}>
                    <input type="text" name={'model'} value={formState.model} onChange={onFormChange} placeholder={'model'}/>
                    <input type="text" name={'price'} value={formState.price}  onChange={onFormChange} placeholder={'price'}/>
                    <input type="text" name={'year'} value={formState.year} onChange={onFormChange} placeholder={'year'}/>
                    <button type={'submit'}>update</button>
                </form>
            </div>
        </div>
    );
}