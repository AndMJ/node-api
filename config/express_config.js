const express = require("express")
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    //Set middleware
    //make it so api receives/responds using json, so we can get the request body data
    app.use(bodyParser.json());//content-type - application/json

    //Load routes
    require("../api/routes/routeCars")(app);

    return app;
}