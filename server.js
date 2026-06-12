require("dotenv").config();
const express = require("express");
const session= require("express-session");
const app = express();
const PORT = 4000;
const path = require("path");
const baseURL=`http://localhost:${PORT}`;
const sessionStore = require("./back-end/sessionStore");
const userAuthRouter = require("./back-end/routers/user-auth-router.js");

const commentRouter = require("./back-end/routers/comment-router");
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  
}));
app.use(express.static(path.join(__dirname, "docs")));
app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname, "docs", "index.html"));
});
app.get("/back-end/connection", (req,res)=>{
  return res.status(200).json({connection: true, message: "Connection established!"});
});
app.use("/back-end/comments", commentRouter);
app.get("/test-session", (req,res)=>{
  req.session.visits= (req.session.visits || 0)+1;
  res.send(`Visits: ${req.session.visits}`)
});
app.get("/whoami", (req,res)=>{
  res.json({session: req.session });
});
app.use("/back-end/userauth", userAuthRouter);
app.get("/help",(req,res)=>{
  console.log("Logging help request");
  res.send("Hello, this is for help! My name is Hi");
});
app.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}, http://localhost:${PORT}`);
});