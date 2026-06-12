import {hiding} from "../../func/helpers.js";
import {backEndDisplay} from "../back-end-display.js";
export function openLogIn(){
  
  const main = document.getElementById("main");
  
  const logInPage = document.createElement("div");
  logInPage.id="log-in-page";
  logInPage.style.backgroundColor="blue";
  main.appendChild(logInPage);
  const h3 =document.createElement("h3");
  h3.innerText="Iniciar sesión";
  logInPage.appendChild(h3);
  const h4 = document.createElement("h4");
  h4.innerText="Test";
  logInPage.appendChild(h4);
  const returnBtn = document.createElement("button");
  returnBtn.classList.add("return-btn");
  logInPage.appendChild(returnBtn);
  returnBtn.addEventListener("click", ()=>{
    hiding(logInPage);
    backEndDisplay();
  });
  const greeting = document.createElement("h3");
greeting.innerText="¡Bienvenido!";
logInPage.appendChild(greeting);
const labelName = document.createElement("label");
labelName.htmlFor="username";
labelName.innerText="Usuario:";logInPage.appendChild(labelName);
const nameInput=document.createElement("input");
nameInput.id="username";
nameInput.addEventListener("input",()=>{
  greeting.innerText=`¡Bienvenido, ${nameInput.value}!`;
});
logInPage.appendChild(nameInput);
const break1 = document.createElement("br");
logInPage.appendChild(break1);
const labelPassword=document.createElement("label");
labelPassword.htmlFor="password";
labelPassword.innerText="Contraseña:";
logInPage.appendChild(labelPassword);
const passwordInput=document.createElement("input");
passwordInput.id="password";
passwordInput.type="password";
logInPage.appendChild(passwordInput);
const break2=document.createElement("br");
logInPage.appendChild(break2);
const submitBtn=document.createElement("button");
submitBtn.id="submit";
submitBtn.innerText="Ingresar";
logInPage.appendChild(submitBtn);
submitBtn.type="button";
submitBtn.addEventListener("click", ()=>{
  if(nameInput.value=="" || passwordInput.value==""){
    h4.innerText="User and password are required";
    return;
  }
  if(nameInput.value.length<4||nameInput.value.length>50){
    h4.innerText="Username can't be less than 4 or more than 50 characters long."
    return;
  }
  fetch("/back-end/userauth/logIn", {
    method: "post",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      username: nameInput.value,
      password: passwordInput.value
    })
  }).then(async (response)=>{
    const data = await response.json();
    if(!response.ok){
      h4.innerText=`Error=>${response.status}: ${data.message}`;
      console.log("error");
      return;
    };
    h4.innerText=`Success: ${data.message}`;
  }).catch((err)=>{
    h4.innerText="Error while connecting to the server";
    console.error(err);
    return;
  });
});
}