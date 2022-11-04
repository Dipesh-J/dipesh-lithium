const productModel = require("../models/productModel")
const { post } = require("../routes/route")

const postProductDetails = async (req,res) => {
    let body = req.body
    let product = await productModel.create(body)
    res.send({msg: product})
}

module.exports.postProductDetails = postProductDetails