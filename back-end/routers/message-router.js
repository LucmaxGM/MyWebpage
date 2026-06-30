const express = require("express");
const router = express.Router();

const {requireLogIn} = require("../helpersBE/verification-middleware");
const {getMessagesForChat} = require("../controllers/message-controller.js");

router.get(`/:receiver`, requireLogIn, getMessagesForChat);

module.exports = router;