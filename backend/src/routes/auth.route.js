//this is the route for authentication
const express = require('express');
const router = express.Router();

//import the controller
const authController = require('../controllers/auth.controller');

// @route   POST api/auth
// @desc    Authenticate user, Register & get token
// @access  Public
router.post('/login', authController.authenticateUser);
router.post('/register', authController.registerUser);


module.exports = router;
