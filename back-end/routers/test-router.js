const express = require("express");
const router = express.Router();
const {requireLogIn} = require("../helpersBE/verification-middleware.js");
router.get("/connection", (req,res)=>{
  return res.status(200).json({connection: true, message: "Connection established!"});
});

router.get("/signedInUser", requireLogIn, (req,res)=>{
  
  return res.status(200).json({login:true, message: "User logged in"});
});

module.exports = router;