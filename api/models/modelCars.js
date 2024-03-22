const cars = [
    {
        plate: "ADG7Q2",
        manufacturer: "Ford",
        model: "Fiesta",
        color: "black",
    },
    {
        plate: "O4QF02",
        manufacturer: "Toyota",
        model: "Corola",
        color: "white",
    }
]

module.exports = () => {
    const model = {};

    model.listCars = async () => {
        try {
            //call to maria DB
            return cars
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    model.createCar = async (carData) => {
        try {
            cars.push(carData)
            return carData
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    return model;
}