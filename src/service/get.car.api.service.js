const url = "http://195.72.146.25/api/v1/cars"

const getCars = () => {
    return fetch(url).then(value => value.json())
}

export {getCars}