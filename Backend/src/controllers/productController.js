const express = require("express")
const Product = require("../models/productModel")
// const router = express.Router()


const getAllProduct = async (req, res) => {
	const product= await Product.find()
	res.send(product)
};
const postProduct = async (req, res) => {
  try{
    const obj = req.body;
    const createProduct = new Product(obj);
    createProduct.save();
    res.status(200).send("succes");
  }catch{
    res.status(500).console.log(err.message)
  }
  }
const getProductId = async (req, res) => {
  const MyProduct= await Product.find({_id:req.params.id})
  res.status(200).send(MyProduct)
};
const deleteProduct = async (req, res) => {
  try{
    await Product.findOneAndDelete({_id:req.params.id})
	  res.status(200).send("deleted")
  }catch{
    res.status(400).send(err.message)
  }
};
const patchProduct = async (req, res) => {
  try{
    const updatedProduct = await Product.findOneAndUpdate({_id:req.params.id},req.body)
	  res.status(200).send(updatedProduct)
  }catch{
    res.status(400).send(err.message)
  }
}

module.exports = {getAllProduct, postProduct,getProductId,deleteProduct,patchProduct}

