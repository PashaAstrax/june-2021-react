const url = "http://195.72.146.25/api/v1/cars"

const getCars = () => {
    return fetch(url).then(value => value.json())
}

const saveCar = (car) => {
    fetch('http://195.72.146.25/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

const deleteCar = (id) => {
    fetch("http://195.72.146.25/api/v1/cars/" + id, {
        method: "DELETE",
    })
}

const patchCar = (id) => {
    fetch("http://195.72.146.25/api/v1/cars/" + id, {
        method: "PATCH",
        body: JSON.stringify(),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


export {saveCar, getCars, deleteCar, patchCar}