const express = require('express')
const { signupUser, loginUser} = require('../controllers/userController')
//login route
const router = express.Router();

router.post('/login', loginUser)

//signup route

router.post('/signup',signupUser)

module.exports = router