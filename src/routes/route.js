const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const UserController2= require("../controllers/userControllers2")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post('/postBooks', UserController2.bookCreate)

router.get('/getBooks', UserController2.bookFind)

module.exports = router;