const express = require("express")
const app = express()
const bodyParser = require("body-parser");

require("./src/config/db")

const router = require("./src/routes/productRoutes")


app.listen(5000, () => {
	console.log("Server has started!")
})

app.use(bodyParser.json())

app.use("/api", router)