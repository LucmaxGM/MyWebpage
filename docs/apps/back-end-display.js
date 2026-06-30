import {openHomePage} from "../apps/homepage.js";
import {socket, userInfoDisplay, confirmationComponent} from "../func/helpers.js";
import {createAccount} from "./back-end-sections/createAccount.js";
import {openLogIn} from "./back-end-sections/openLogIn.js";
import {openPublicComments} from "./back-end-sections/publicComments.js";
import {openPrivateChats} from "./back-end-sections/private-chats.js";
import {createSection} from "./sections.js";
class AppBackEnd {
  constructor(name, enter, imgSrc, finished) {
    this.name = name;
    this.enter = enter;
    this.imgSrc = imgSrc;
    this.finished = finished;
  }
}
const backEndApps = [
  new AppBackEnd("Sign in", createAccount, "img.jgp", true),
  new AppBackEnd("Log In", openLogIn, "img.jpg", true),
  new AppBackEnd("Comments", openPublicComments, "img2.jpg", true),
  new AppBackEnd("Message System", openPrivateChats, "img3.jgp", true)
  ];
export async function backEndDisplay(){
  const main = document.getElementById("main");
  main.innerHTML="";
  console.log(`${socket.connected}`);

  try {
  const connectionResponse = await fetch("/test/connection");
    
    if(!connectionResponse.ok){
      throw new Error("Back end unavailable");
    } 
    //const data = await response.json();
    try {
    const logInResponse = await fetch("/test/signedInUser");
      if(logInResponse.ok && !socket.connected) {
        socket.connect();
        userInfoDisplay(`socket`);
      } else {
      userInfoDisplay("Couldn't connect to the socket or something");
    }
    } catch (err){
      console.error("Couldnt check log in status", err);
      userInfoDisplay("Unable to check");
    }
    
    } catch (err) {
      console.error(err);
      confirmationComponent(`No se pudo acceder al servidor. Si usted se encuentra en la web hosteada por Github ("https://lucmaxgm.github.io/MyWebpage/"): esta sección no funcionará debido a que Github no hostea back-end. Contacteme a través del medio que desee para que hostee este sitio y pueda probar todas las funcionalidades que he desarrollado.`, ()=>{
    window.location.href=`https://www.linkedin.com/in/lucas-blasco-g`;
  }, "Contacto Linkedin");
    };
  
  
  const backEndPage=document.createElement("div");
  backEndPage.id="back-end-page";
  main.appendChild(backEndPage);
  const returnHomeBtn=document.createElement("button");
  returnHomeBtn.classList.add("return-home-btn");
  returnHomeBtn.addEventListener("click",()=>{
    backEndPage.remove();
    openHomePage();
  });
  backEndPage.appendChild(returnHomeBtn);
  const header=document.createElement("h1");
  header.innerText="Back End Showcase";
  backEndPage.appendChild(header);
  backEndApps.forEach((a)=>{
    createSection(a.name, a.enter, a.imgSrc, a.finished, "back-end-page");
  });
}