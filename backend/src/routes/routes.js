const express = require("express");
const { signUpAPI, signInAPI } = require("../controller/userController");
const router = express.Router();

router.post('/signup',signUpAPI)
router.post('/signin',signInAPI)


module.exports = router;