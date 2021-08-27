import {useEffect, useState} from "react";
import {getCars} from "../../services/api.service";
import Car from "./Car";

export default function Cars() {
    let [cars, setCars] = useState([])

    useEffect(() => {
        getCars().then(value => setCars([...value.reverse()]))
    }, [])
  return (
    <div>
        {
            cars.map(thisCars => <Car key={thisCars.id} thisCars={thisCars}/>)
        }
    </div>
  );
}