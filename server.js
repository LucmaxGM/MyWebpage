const express = require("express");
const app = express();
const PORT = 4000;
const path = require("path");
app.use(express.static(path.join(__dirname, "docs")));
app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname, "docs", "index.html"));
});
app.get("/help",(req,res)=>{
  console.log("Logging help request");
  res.send("Hello, this is for help! My name is Hi");
});
app.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}, http://localhost:${PORT}`);
});