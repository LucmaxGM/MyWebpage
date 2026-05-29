const main = document.getElementById("main");
const pss = "2026";
const uss = "Lucas";
import {signIn, signInForReal} from "../func/userAuth.js";
import {discardById} from "../func/helpers.js";
export function openAuthDemo(){
  discardById("sections");
const authForm = document.createElement("div");
authForm.id="signInForm";
authForm.classList.add("app");
main.appendChild(authForm);
/////
const closeBtn=document.createElement("button");
closeBtn.type="button";

authForm.appendChild(closeBtn);
closeBtn.classList.add("returnHomeBtn");


////
const greeting = document.createElement("h3");
greeting.innerText="¡Bienvenido!";
authForm.appendChild(greeting);
const labelName = document.createElement("label");
labelName.htmlFor="username";
labelName.innerText="Usuario:";
authForm.appendChild(labelName);
const nameInput=document.createElement("input");
nameInput.id="username";
nameInput.addEventListener("input",()=>{
  greeting.innerText=`¡Bienvenido, ${nameInput.value}!`;
});
authForm.appendChild(nameInput);
const break1 = document.createElement("br");
authForm.appendChild(break1);
const labelPassword=document.createElement("label");
labelPassword.htmlFor="password";
labelPassword.innerText="Contraseña:";
authForm.appendChild(labelPassword);
const passwordInput=document.createElement("input");
passwordInput.id="password";
passwordInput.type="password";
authForm.appendChild(passwordInput);
const break2=document.createElement("br");
authForm.appendChild(break2);
const submitBtn=document.createElement("button");
submitBtn.id="submit";
submitBtn.innerText="Ingresar";
authForm.appendChild(submitBtn);
submitBtn.type="button";
submitBtn.addEventListener("click", ()=> {signIn(nameInput, passwordInput)});

}