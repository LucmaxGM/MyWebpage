import {hiding} from "../../func/helpers.js";
import {backEndDisplay} from "../back-end-display.js";
export function createAccount(){
  
  const main = document.getElementById("main");
  
  const signInPage = document.createElement("div");
  signInPage.id="sign-in-page";
  signInPage.style.backgroundColor="blue";
  main.appendChild(signInPage);
  const h3 =document.createElement("h3");
  h3.innerText="Crear cuenta";
  signInPage.appendChild(h3);
  const h4 = document.createElement("h4");
  signInPage.appendChild(h4);
  const returnBtn = document.createElement("button");
  returnBtn.classList.add("return-btn");
  signInPage.appendChild(returnBtn);
  returnBtn.addEventListener("click", ()=>{
    hiding(signInPage);
    backEndDisplay();
  });
  const greeting = document.createElement("h3");
greeting.innerText="¡Bienvenido!";
signInPage.appendChild(greeting);
const labelName = document.createElement("label");
labelName.htmlFor="username";
labelName.innerText="Usuario:";signInPage.appendChild(labelName);
const nameInput=document.createElement("input");
nameInput.id="username";
nameInput.addEventListener("input",()=>{
  greeting.innerText=`¡Bienvenido, ${nameInput.value}!`;
});
signInPage.appendChild(nameInput);
const break1 = document.createElement("br");
signInPage.appendChild(break1);
const labelPassword=document.createElement("label");
labelPassword.htmlFor="password";
labelPassword.innerText="Contraseña:";
signInPage.appendChild(labelPassword);
const passwordInput=document.createElement("input");
passwordInput.id="password";
passwordInput.type="password";
signInPage.appendChild(passwordInput);
const break2=document.createElement("br");
signInPage.appendChild(break2);
const submitBtn=document.createElement("button");
submitBtn.id="submit";
submitBtn.innerText="Ingresar";
signInPage.appendChild(submitBtn);
submitBtn.type="button";
submitBtn.addEventListener("click", ()=>{
  if(nameInput.value=="" || passwordInput.value==""){
    return;
  }
  if(nameInput.value.length<5){
    return;
  }
  fetch("back-end/userauth/signIn", {
    method: "post",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      username: nameInput.value,
      password: passwordInput.value
    })
  }).then((response)=>{
    if(!response.ok){
      h4.innerText=`${response.status}: ${response.message}`;
      console.log("error");
    }
  }).catch((err)=>{
    h4.innerText="error";
    console.error(err);
  });
});
}