const express = require("express")
const mongoose = require("mongoose")

// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://said:said12@cluster0.rpvry8o.mongodb.net/product", { useNewUrlParser: true })
	.then(() => {console.log("my server!")})
	.catch((err)=>console.log(err))