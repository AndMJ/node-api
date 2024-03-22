module.exports = function(app) {
    const controllerCars = require("../controllers/controllerCars")();

    app.route("/api/v1/cars/list").get(controllerCars.listCars)
    app.route("/api/v1/cars/create").post(controllerCars.createCar)
}