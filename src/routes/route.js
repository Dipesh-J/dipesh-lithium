const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")

const BookController= require("../controllers/bookController")

router.post("/postAPIs", BookController
// .createBook
.checkAuthorId
)

router.get('/getAPIs',  BookController.listChetanBhagat

 ) 

module.exports = router;