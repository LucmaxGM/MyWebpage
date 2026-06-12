
const crypto = require("crypto");
const pool = require("../db");

const handleNewUser = async (req,res)=>{
  const {password,username}=req.body;
  if(!username||!password){
    return res.status(400).json({'message':"Username and password are required."});
  }
  if(username.length<4||username.length>50){
    return res.status(400).json({'message':"Username must between 4 and 50 characters long"});
  }
  let connection;
  try {
    connection = await pool.getConnection();
    const rows = await connection.query('SELECT username FROM users WHERE username = ?', [username]);
    if (rows.length>0){
      return res.status(409).json({'message':`User ${username} already exists.`});
    }
    const salt = crypto.randomBytes(16).toString("hex");
    const hashedPassword = await new Promise((resolve,reject)=>{
      crypto.scrypt(password, salt, 64, (err, derivedKey)=>{
        if(err){
          reject(err);
          return;
        }
        resolve(derivedKey.toString("hex"));
      })
    });
    await connection.query('INSERT INTO users (username, hashed_password, salt) VALUES (?,?,?)', [username, hashedPassword, salt]);
    return res.status(201).json({'message': 'Account successfully created!'});
  } catch(err){
    console.error(err.message);
    return res.status(500).json({'message': `${err.message}`});
  } finally {
    if(connection){connection.release();}
  }
};

module.exports= {handleNewUser};