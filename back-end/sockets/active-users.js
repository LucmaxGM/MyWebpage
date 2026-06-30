const pool = require("../db");
const onlineUsers=new Map();
function setUpSocket(io){
  const getActiveUsers=()=>{
    return [...onlineUsers.entries()].map(([id, user]) => ({id, username: user.username}));
  }
  io.on('connection', (socket)=>{

    const session = socket.request.session;

    onlineUsers.set(session.userId, {
      username: session.username,
      socketId: socket.id
    });
    io.emit("active-users", getActiveUsers());
   console.log(`Socket "${socket.id}" connected.`)
    socket.on("get-active-users",()=>{
      console.log("Client requested active users", getActiveUsers());
      
      socket.emit("active-users", getActiveUsers());
      });
    
    socket.on("private-message", async (data)=>{
      console.log(data);
      const senderId=socket.request.session.userId;
      if(data.content==""){return;}
      let connection;
      try {
        connection = await pool.getConnection();

        const valid = await connection.query("SELECT * FROM chats WHERE conversationId = ? AND (user1Id = ? OR user2Id = ?) AND (user1Id = ? OR user2Id = ?)", [data.conversationId, senderId, senderId, data.receiverId, data.receiverId]);
        if (valid.length==0){
          return;
        }
        await connection.query("INSERT INTO messages (conversationId, senderId, content) VALUES (?,?,?)",[valid[0].conversationId, senderId, data.content]);
        const currentChat = valid[0];
        let receiverId;
        if(Number(currentChat.user1Id) === Number(senderId)){
          receiverId=currentChat.user2Id;
        } else {
          receiverId=currentChat.user1Id;
        }
        const receiverObj = onlineUsers.get(receiverId);

        if (receiverObj){
          io.to(receiverObj.socketId).emit("private-message", {
            conversationId:data.conversationId, 
            senderId, 
            content: data.content 
          });
        } 
        socket.emit("private-message", {
          conversationId:data.conversationId,

          content:data.content,
          senderId
        });
      } catch (err){
        console.error(err);
      } finally {
        if(connection){
          connection.release();
        }
      }
    });
    
    socket.on("disconnect", ()=>{
      onlineUsers.delete(session.userId);
      io.emit("active-users", getActiveUsers());
      console.log(`Socket ${socket.id} disconnected`);
    });
  });
  
}

module.exports= {setUpSocket};