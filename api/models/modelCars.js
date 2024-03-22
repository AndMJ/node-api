const carsDB = [
    {
        license_plate: "ADG7Q2",
        manufacturer: "Ford",
        model: "Fiesta",
        color: "black",
    },
    {
        license_plate: "O4QF02",
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
            return carsDB
        } catch (error) {
            console.log(error)
            throw error //throws error from DB
        }
    }

    model.createCar = async (carData) => {
        try {
            carsDB.push(carData)//call to maria DB
            return carData
        } catch (error) {
            console.log(error)
            throw error //throws error from DB
        }
    }

    return model;
}