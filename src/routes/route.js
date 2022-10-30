const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")

const BookController= require("../controllers/bookController");
const bookModel = require('../models/bookModel');

router.post("/postAPIs", BookController
// .createBook
.createAuthor
)

router.get('/getAPIs',  BookController
// .listChetanBhagat 
// .authorTs
.listOfAuthors
)
module.exports = router;