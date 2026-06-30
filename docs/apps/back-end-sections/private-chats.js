import {socket, hiding, loadCssFile} from "../../func/helpers.js";
import {backEndDisplay} from "../back-end-display.js";
import {openPrivateConversation} from "./private-conversation.js";
loadCssFile("./styles/private-chats.css");
export function openPrivateChats(){
  socket.off("active-users");
  const main = document.getElementById("main");
  main.innerHTML="";
  const privateChatsApp = document.createElement("div");
  privateChatsApp.id="private-chats-app";
  main.appendChild(privateChatsApp);
  const returnBtn = document.createElement("button");
  returnBtn.classList.add("return-btn");
  privateChatsApp.appendChild(returnBtn);
  returnBtn.addEventListener("click", ()=>{
    hiding(privateChatsApp);
    backEndDisplay();
  });
  const chatsContainer = document.createElement("div");
  privateChatsApp.appendChild(chatsContainer);
  const createChats = (users) => {
    users.forEach((user)=>{
      const userElement= document.createElement("div");
      userElement.classList.add("user-chat");
      userElement.dataset.userId=user.id;
      chatsContainer.appendChild(userElement);
      userElement.addEventListener("click", ()=>{
        hiding(privateChatsApp);
        openPrivateConversation(user.id);
      });
      const username = document.createElement("h3");
      username.innerText=user.username;
      userElement.appendChild(username);
    });
  };
  
  console.log("Hello");
  
  socket.emit("get-active-users");
  socket.on("active-users", (users)=>{
    createChats(users);
  });
}