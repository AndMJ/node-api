const express = require("express");
const bodyParser = require('body-parser');

require("dotenv").config()

module.exports = () => {
    const app = express();

    //Set middleware (It's what's used in the communication between client and API, API and DB)
    //make it so api receives/responds using json, so we can get the request body data
    app.use(bodyParser.json());//content-type - application/json

    //configs
    app.set("port", process.env.API_PORT)
    app.set("API_URI", process.env.API_URI)

    //Load all app routes
    require("../api/routes/routeCars")(app);
    //require("../api/routes/routeUsers")(app);
    //require("../api/routes/routeCarManufacturers")(app);

    return app;
}