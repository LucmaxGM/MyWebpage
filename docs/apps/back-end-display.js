import {openHomePage} from "../apps/homepage.js";
import {userInfoDisplay} from "../func/helpers.js";



export function backEndDisplay(){
  userInfoDisplay(`Si usted se encuentra en la web hosteada por Github (Si el link es "https://lucmaxgm.github.io/MyWebpage/") esta sección no funcionará debido a que Github no hostea back-end. Vuelva con el boton que tiene la casita. Disculpe las molestias.`);
  const main = document.getElementById("main");
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
  
}