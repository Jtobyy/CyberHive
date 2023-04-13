//this file is for the user routes
const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authenticateToken.middleware")
//import the controller
const userController = require("../controllers/user.controller");


// @route   get api/users/getuser
// @desc    get user details
// @access  Private

router.get("/getuser", authenticateToken , userController.getUser);

module.exports = router;
