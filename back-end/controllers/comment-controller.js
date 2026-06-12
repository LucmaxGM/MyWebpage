const pool = require("../db");

const getComments = async (req,res)=>{
  let connection;
  try {
    connection = await pool.getConnection();
    const rows = await connection.query("SELECT comments.id, users.username, comments.content, comments.author_id = ? AS isAuthor FROM comments LEFT JOIN users ON comments.author_id = users.id ORDER BY comments.created_at DESC;", [req.session.userId]);
    console.log(rows);
    return res.status(200).json({rows});
  } catch(err){
    console.error(err);
    return res.status(500).json({'message': err.message});
  } finally {
    if(connection){
      connection.release();
    }
  }
}

const postComment = async (req,res)=>{
  const { content } = req.body;
  if (!content || !content.trim()){
    return res.status(400).json({message: "Comment can't be empty"});
  };
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.query("INSERT INTO comments (author_id, content) VALUES (?,?)", [req.session.userId, content]);
    return res.status(201).json({message: "Valor insertado"});
  } catch(err){
    console.error(err);
    return res.status(500).json({'message': err.message});
  } finally {
    if(connection){
      connection.release();
    }
  }
  
}

const deleteComment = async (req,res)=>{
  const commentId=req.params.id;
  let connection;
  try {
    connection = await pool.getConnection();
    const rows = await connection.query("SELECT author_id FROM comments WHERE id = ?", [commentId]);
    if(rows.length===0){
      return res.status(404).json({message:`Comment with id ${commentId} not found!`})
    }
    if(rows[0].author_id!==req.session.userId){
      return res.status(403).json({message:"¡No puedes eliminar un elemento que no es tuyo!"})
      }
      await connection.query("DELETE FROM comments WHERE id = ?", [commentId]);
      return res.status(200).json({message: "¡Comentario borrado con éxito!"})
  } catch(err){
    console.error(err);
    return res.status(500).json({message: "Internal server error"});
  } finally {
    if(connection){connection.release();}
  }
}
module.exports= {getComments, postComment, deleteComment};