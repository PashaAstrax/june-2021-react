import {saveCar} from "../../services/api.service";

export default function CreateCar() {

    let save = (e) => {
        e.preventDefault()

        if (e.target.model.value.length > 20) {
            window.alert('too long model (must not be longer than 20 characters)')
        } else {
            if (e.target.price.value < 0) {
                window.alert('enter correct price')
            } else {
                if (e.target.year.value < 1990 || +e.target.year.value > 2021) {
                    window.alert('enter correct year (must not be less than 1990)')
                } else {
                    let newCar = {
                        model: e.target.model.value,
                        price: e.target.price.value,
                        year: e.target.year.value
                    }
                    saveCar(newCar)
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