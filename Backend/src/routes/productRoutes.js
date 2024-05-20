const express = require("express")
const routers= express.Router()
const ProductController = require("../controllers/productController")

// Get all posts
routers.get("/product",ProductController.getAllProduct)
routers.post("/product",ProductController.postProduct)
routers.get("/product/:id",ProductController.getProductId)
routers.delete("/product/:id",ProductController.deleteProduct)
routers.patch("/product/:id",ProductController.patchProduct)



module.exports = routers