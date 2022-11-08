const express = require('express');
const router = express.Router();
const productController= require("../controllers/productController")
const userController= require("../controllers/userController")
const orderController = require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.post("/postProductDetails",productController.postProductDetails )

router.post('/createUser',commonMW.headerValidation ,userController.createUser)

router.post('/postOrder', commonMW.headerValidation ,orderController.postorder)

module.exports = router;