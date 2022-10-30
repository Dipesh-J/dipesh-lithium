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
.authorTs
)
module.exports = router;

// const express = require('express');
// const router = express.Router();
// //const BookModel = require("../models/userModel.js")
// //const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController.js")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!!")
// })

// // router.post("/createUser", UserController.createUser  )
// // router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )
// router.post("/createAuthor", BookController.createAuthor  )
// router.get("/bookByCb", BookController.bookByCb)
// router.get("/getAuthorOfTs", BookController.getAuthorOfTs)
// router.get("/getInclCost", BookController.getInclCost)

// module.exports = router;
