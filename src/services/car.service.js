// const url = "http://195.72.146.25/api/v1/cars"
const urlTemp = "http://195.72.144.67/api/v1/cars"

const getCars = () => {
    return fetch(urlTemp).then(value => value.json())
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

const deleteCar = (id) => {
    fetch(urlTemp + "/" + id, {
        method: "DELETE",
    })
}

const patchCar = (car) => {
    fetch(urlTemp + "/" + car.id, {
        method: "PATCH",
        body: JSON.stringify({}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log("changed the car:", json));
}


export {saveCar, getCars, deleteCar, patchCar}