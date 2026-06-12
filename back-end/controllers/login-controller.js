const crypto = require("crypto");
const pool = require("../db");

const validateUser = async (req,res)=>{
  const {username, password} = req.body;
  if(!username || !password){
    return res.status(400).json({'message':"Username and password are required"});
  }
  if(username.length<4||username.length>50){
    return res.status(400).json({'message':"Username must between 4 and 50 characters long"});
  }
  let connection;
  try {
    connection = await pool.getConnection();
    const rows = await connection.query('SELECT * FROM users WHERE username = ?', [username]);
    const user = rows[0];
    if (!user){
      return res.status(400).json({'message': `Usuario: ${username} no encontrado.`});
    }
    const hashedPassword = await new Promise((resolve,reject)=>{
      crypto.scrypt(password, user.salt, 64, (err, derivedKey)=>{
        if(err){
          reject(err);
          return;
        }
        resolve(derivedKey.toString("hex"));
      });
    });
    const valid = crypto.timingSafeEqual(
      Buffer.from(hashedPassword, "hex"),
      Buffer.from(user.hashed_password, "hex"),
      );
    if(!valid){
      return res.status(401).json({'message':"Invalid password or username."});
    }
    if(valid){
      req.session.userId = user.id;
      req.session.username = user.username;
      return res.status(200).json({'message':`Successful sign in with user: ${username}.`});
    }
  } catch(err){
    console.error(err);
    
    return res.status(500).json({'message': err});
  } finally {
    if(connection){
      connection.release();
    }
  }
}
module.exports= {validateUser};