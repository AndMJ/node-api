module.exports = function(app) {
    //Load car controller
    const controllerCars = require("../controllers/controllerCars")();

    //Declare car routes
    app.route(app.get("API_URI") + "cars/list").get(controllerCars.listCars)
    app.route(app.get("API_URI") + "cars/create").post(controllerCars.createCar)
}