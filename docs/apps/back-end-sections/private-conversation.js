import {socket, hiding, loadCssFile} from "../../func/helpers.js";
import {openPrivateChats} from "./private-chats.js";
loadCssFile("./styles/private-conversation.css");
export async function 
  
  openPrivateConversation(receptorId){
    socket.off("private-message");
const main = document.getElementById("main");
main.innerHTML="";
  const privateConversation = document.createElement("div");
  privateConversation.classList.add("private-conversation");
  main.appendChild(privateConversation);
  const returnBtn = document.createElement("button");
  returnBtn.classList.add("return-btn");
  returnBtn.addEventListener("click",()=>{
    hiding(privateConversation);
    openPrivateChats();
  });
    privateConversation.appendChild(returnBtn);
  const header = document.createElement("div");
  header.classList.add("chat-header");
  privateConversation.appendChild(header);
  const pfp = document.createElement("img");
  pfp.src="";
  pfp.classList.add("chat-pfp");
  header.appendChild(pfp);
  const chatUsername = document.createElement("h2");
  header.appendChild(chatUsername);
  const chatBody = document.createElement("div");
  chatBody.classList.add("chat-body");
  privateConversation.appendChild(chatBody);
  const chatCtrls=document.createElement("div");
  chatCtrls.classList.add("chat-ctrls");
  privateConversation.appendChild(chatCtrls);
  const chatInput = document.createElement("textarea");
  const sendBtn=document.createElement("button");
  sendBtn.classList.add("send-btn");
    chatCtrls.appendChild(chatInput);
  chatCtrls.appendChild(sendBtn);
    
  function displayChats(data){
    data.messages.forEach((m)=>{
      const messageElement=document.createElement("div");
      messageElement.classList.add("message-element");
      chatBody.appendChild(messageElement);
      const messageText = document.createElement("p");
      messageText.innerText=m.content;
      messageElement.appendChild(messageText);
    });
  }
  try {
    const chatResponse = await fetch(`/chat/${receptorId}`);
    if(!chatResponse.ok){
      throw new Error("Something went wrong");
    }
    //success
    const data = await chatResponse.json();
    chatUsername.innerText=data.receiverUsername;
    const conversationId=data.conversationId;
    displayChats(data);
    
    //socket!
    socket.on("private-message", (message)=>{
      const messageElement = document.createElement("div");
      messageElement.classList.add("message-element");
      const messageText = document.createElement("p");
      messageText.innerText=message.content;
      messageElement.appendChild(messageText);
      chatBody.appendChild(messageElement);
    });
      sendBtn.addEventListener("click", ()=>{
        const content = chatInput.value.trim();
        if(!content){
          chatInput.placeholder="Text required";
          return;
        }
        
        socket.emit("private-message", {
          conversationId,
          receiverId: receptorId,
          content
        });
        chatInput.value="";
      });


    
  } catch (err) {
    console.error(err);
    chatUsername.innerText=err;
    pfp.src="not-found.jpg";
  }

  
}