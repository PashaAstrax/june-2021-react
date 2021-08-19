import {saveCar} from "../../services/api.service";

export default function CreateCar() {

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
    </div>
  );
}