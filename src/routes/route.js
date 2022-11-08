const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/signUp", userController.signUpUser)

router.post("/login", userController.loginUsers)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updatedUser)

router.delete("/users/:userId", userController.deleteUser)

module.exports = router;