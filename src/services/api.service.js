// const url = "http://195.72.146.25/api/v1/cars"
const urlTemp = "http://91.201.233.14/api/v1/cars"

const getCars = () => {
    return fetch(urlTemp)
        .then(value => value.json())
}

const getCar = (id) => {
    return fetch(urlTemp + '/' + id)
        .then(value => value.json())
}

const saveCar = (car) => {
    fetch(urlTemp, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log("new car:", json));
}

const updateCar = (car, id) => {
    fetch(urlTemp + "/" + id, {
        method: 'PATCH',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log("update car:", json));
}


export {getCars, getCar, saveCar, updateCar}