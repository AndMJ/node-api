const express = require("express")
const app = express()

const listUsers = async (req, res) => {
    res.status(200).json({
        users: "list of users"
    })
}

app.listen(3000, () => console.log("Server started!"))

app.route("/api/v1/users/list").get(listUsers)
