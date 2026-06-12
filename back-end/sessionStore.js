const session = require("express-session");
const mysqlstore = require("express-mysql-session")(session);

const sessionStore = new mysqlstore({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
  
})

module.exports = sessionStore;