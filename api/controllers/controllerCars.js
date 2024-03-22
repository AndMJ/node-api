module.exports = () => {
    const modelCars = require("../models/modelCars")()

    const controller = {};
    controller.listCars = async (req, res) => {
        try {
            //call modules
            const result = await modelCars.listCars()

            res.status(200).json({
                cars: result
            })
        } catch (error) {
            //also catches error thrown by model
            res.status(400).json({
                message: error.message
            })
        }
    }

    controller.createCar = async (req, res) => {
        try {
            //formulate and validate car data json from request body
            const car = {
                license_plate: req.body.license_plate.trim(),
                manufacturer: req.body.manufacturer.trim(),
                model: req.body.model.trim(),
                color: req.body.color.trim(),
            }
            //call modules
            const result = await modelCars.createCar(car)

            res.status(200).json({
                created: true,
                car: result
            });
        } catch (error) {
            //also catches error thrown by model
            res.status(400).json({
                message: error.message
            });
        }
    }

    return controller
}

