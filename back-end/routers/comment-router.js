const express = require("express");
const router = express.Router();

const {getComments, postComment, deleteComment} = require("../controllers/comment-controller");
const {requireLogIn} = require("../helpersBE/verification-middleware");

router.get("/", getComments);

router.post("/", requireLogIn, postComment);

router.delete("/:id", requireLogIn, deleteComment);
module.exports = router;