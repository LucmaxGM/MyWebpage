import {hiding, loadCssFile, confirmationComponent} from "../../func/helpers.js";
import {backEndDisplay} from "../back-end-display.js";
loadCssFile("./styles/public-comments.css");


export function openPublicComments(){
  
  const main = document.getElementById("main");
  const publicCommentsPage = document.createElement("div");
  publicCommentsPage.id="public-comments-page";
  main.appendChild(publicCommentsPage);
  const returnBtn = document.createElement("button");
  returnBtn.classList.add("return-btn");
  publicCommentsPage.appendChild(returnBtn);
  returnBtn.addEventListener("click", ()=>{
    console.log("boton return");
    hiding(publicCommentsPage);
    backEndDisplay();
  });
  const menuContainer = document.createElement("div");
  publicCommentsPage.appendChild(menuContainer);
  const textArea = document.createElement("textarea");
  textArea.placeholder="¡Agregue un comentario público!";
  menuContainer.appendChild(textArea);
  const addBtn = document.createElement("button");
  addBtn.classList.add("add-btn");
  menuContainer.appendChild(addBtn);
  addBtn.addEventListener("click", ()=>{
    if(!textArea.value){
      return;
    }
    fetch("/back-end/comments", {
      method: "post",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        content: textArea.value
      })
    }).then( async (response)=>{
      const data = await response.json();
      if(!response.ok){
        infoElement.innerText=`Error: ${response.status} (${data.message})`;
        return;
      }
      infoElement.innerText=`${response.status}: ${data.message}`;
    }).catch((err)=>{
      infoElement.innerText=err.message;
    });
  });
  
  const infoElement=document.createElement("h2");
  menuContainer.appendChild(infoElement);
  const commentsContainer = document.createElement("div");
  commentsContainer.id="comments-container";
  publicCommentsPage.appendChild(commentsContainer);
  
  
  const refreshBtn = document.createElement("button");
  refreshBtn.classList.add("refresh-btn");
  menuContainer.appendChild(refreshBtn);
  refreshBtn.addEventListener("click",()=>{
    commentsContainer.innerHTML="";
    fetch("/back-end/comments").then(
      async (response)=>{
        const data = await response.json();
        if(!response.ok){
          infoElement.innerText=`Error: ${response.status}: ${data.message}`;
          return;
        }
        data.rows.forEach(object=>{
          const comment =document.createElement("div");
          comment.classList.add("public-comment");
          commentsContainer.appendChild(comment);
          const author = document.createElement("h4");
          author.innerText=`${object.username}:`;
          comment.appendChild(author);
          const content = document.createElement("p");
          content.innerText=`${object.content}`;
          comment.appendChild(content);
          if(object.isAuthor){
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete-btn");
            comment.appendChild(deleteBtn);
            deleteBtn.addEventListener("click",()=>{
              confirmationComponent("¿Desea eliminar su comentario?", deleteComment(object.id), "Eliminar");
                
              });
            };
          });
      }).catch((err)=>{
        infoElement.innerText="Error";
      });
  });
  function deleteComment(commentId){
    return async ()=>{
      try{
    const response = await fetch(`/back-end/comments/${commentId}`, {method: "DELETE"});
    const data = await response.json();
    if(!response.ok){
      infoElement.innerText=`Error: ${response.status}, ${data.message}`;
      return;
    }
    
    infoElement.innerText=data.message;
    } catch(err){
    infoElement.innerText=err.message;
  }
  }}
      
}