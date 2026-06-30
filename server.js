require("dotenv").config();
const express = require("express");
const session= require("express-session");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = 4000;
const path = require("path");
const baseURL=`http://localhost:${PORT}`;
const sessionStore = require("./back-end/sessionStore");
const userAuthRouter = require("./back-end/routers/user-auth-router.js");
const testRouter = require("./back-end/routers/test-router.js");
const commentRouter = require("./back-end/routers/comment-router.js");
const {setUpSocket} = require("./back-end/sockets/active-users.js")
const messageRouter = require("./back-end/routers/message-router.js")
  
const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
});
app.use(express.json());
app.use(sessionMiddleware);

app.use(express.static(path.join(__dirname, "docs")));
app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname, "docs", "index.html"));
});
app.use("/test", testRouter);
app.use("/chat", messageRouter);
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
io.use((socket, next)=>{
  sessionMiddleware(socket.request,{}, next);
});
setUpSocket(io);
server.listen(PORT, ()=>{
  console.log(`Server listening on port: ${PORT}, http://localhost:${PORT}`);
});
/*app.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}, http://localhost:${PORT}`);
}); */