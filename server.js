const app = require("./config/express_config")();

app.listen(app.get("port"), () => console.log("Server started!"))


