const express = require("express");
const router = express.Router();
const registerController=require("../controllers/register-controller.js");
const loginController = require("../controllers/login-controller.js");
router.post("/signIn", registerController.handleNewUser);
router.post("/logIn", loginController.validateUser);
module.exports= router;