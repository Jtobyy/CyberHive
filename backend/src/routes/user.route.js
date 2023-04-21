//this file is for the user routes
const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authenticateToken.middleware")
//import the controller
const userController = require("../controllers/user.controller");


// @route   get api/user/:id
// @desc    get user details
// @access  Private

router.get("/:id", authenticateToken , userController.getUser);

module.exports = router;
