import {userInfoDisplay} from "./helpers.js";
import {showSections} from "../apps/sections.js";
export function signIn (userInp, passInp) {
  if (userInp.value === "Lucas") {
    if (passInp.value === "2026") {
    userInfoDisplay("Bienvenido");
    signInForReal(); 
  } else {
    userInfoDisplay("Contraseña incorrecta");
    document.getElementById("signInForm").classList.add("error");
    setTimeout(()=> {
      document.getElementById("signInForm").classList.remove("error");
    }, 300)
  }} else {
    userInfoDisplay("Usuario no encontrado");
    document.getElementById("signInForm").classList.add("error");
    setTimeout(()=> {
      document.getElementById("signInForm").classList.remove("error");
    }, 300)
  }
  
}
                                 

export function signInForReal(form=document.getElementById("signInForm")) {
  
  form.classList.add("hide");
  form.addEventListener("transitionend", () => {form.remove(); });
  setTimeout((form.remove(), 800));
  showSections();
}