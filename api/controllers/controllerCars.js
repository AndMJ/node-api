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
            res.status(401).json({
                message: error
            })
        }
    }

    controller.createCar = async (req, res) => {
        try {
            //call modules
            const car = {
                plate: req.body.plate.trim(),
                manufacturer: req.body.manufacturer.trim(),
                model: req.body.model.trim(),
                color: req.body.color.trim(),
            }

            const result = await modelCars.createCar(car)

            res.status(200).json({
                created: true,
                car: result
            });
        } catch (error) {
            res.status(401).json({
                message: error
            });
        }
    }

    return controller
}

