import {userInfoDisplay} from "./helpers.js";
import {showSections} from "../apps/sections.js";
export function signIn (userInp, passInp) {
  if (userInp.value === "Lucas") {
    if (passInp.value === "2026") {
    userInfoDisplay("Bienvenido");
    signInForReal(); 
  } else {
    userInfoDisplay("Contraseña incorrecta");
  }} else {
    userInfoDisplay("Usuario no encontrado");
  }
  
}
                                 

export function signInForReal(form=document.getElementById("signInForm")) {
  form.addEventListener("transitionend", () => {form.remove(); });
  form.classList.add("hide");
  showSections();
}