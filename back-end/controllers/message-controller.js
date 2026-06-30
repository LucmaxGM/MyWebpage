const pool = require("../db");

const getMessagesForChat= async (req,res)=>{
  const {receiver} = req.params;
  const transmitter = req.session.userId;
  const user1 = Math.min(receiver, transmitter);
  const user2 = Math.max(receiver, transmitter);
let connection
  try {
    connection = await pool.getConnection();
    const users = await connection.query("SELECT username from users WHERE id = ?", [receiver]);
    const receiverUsername = users[0].username;
    const conversations = await connection.query("SELECT conversationId FROM chats WHERE user1Id = ? AND user2Id = ?", [user1, user2]);
    if (conversations.length==0){
      
      const insert = await connection.query("INSERT INTO chats (user1Id, user2Id) VALUES (?,?)", [user1, user2]);
      
       const conversationId = insert.insertId;
      
      return res.status(200).json({message: "No prior messages found. New conversation created", receiverUsername: receiverUsername, conversationId});
      
    }
    const conversationId= conversations[0].conversationId;
    const dbMessages = await connection.query("SELECT * FROM messages WHERE conversationId = ? ORDER BY sentAt ASC", [conversationId]);
    return res.status(200).json({message: "Messages found!", receiverUsername: receiverUsername, conversationId: conversationId, messages: dbMessages});
    
    
  } catch (err) {
    console.error(err);
    return res.status(500).json({message: "Internal server error"});
  } finally {
    if(connection){
      connection.release();
    }
  }

  
}
module.exports = {getMessagesForChat};