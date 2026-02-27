
import {userInfoHide, closePopUp, hideAndRemoveByClass, displayName, userInfoDisplay, hiding, discardById} from "./func/helpers.js";



///////////////////
import {showSections, createSection} from "./apps/sections.js";
//////////////////
import {signIn, signInForReal} from "./func/userAuth.js";

////////////////////
import { openNotesApp } from "./apps/notesApp.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";

// Si querés usar base de datos:
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwtqh74fSwBsp5urJSgl9yY1K5TT_HGx4",
  authDomain: "lucmax-website.firebaseapp.com",
  projectId: "lucmax-website",
  storageBucket: "lucmax-website.firebasestorage.app",
  messagingSenderId: "1019163392062",
  appId: "1:1019163392062:web:7b540e2bb2f9f3c0a6b96f",
  measurementId: "G-M9ZE8CQSCL"
};

// Inicializá Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // si usás Firestore


const main = document.getElementById("main");
const pss = "2026";
const uss = "Lucas";
const infoDiv = document.getElementById("userInfo");
const userInfoDisplayed = document.getElementById("userInfoDisplayed");
const form = document.getElementById("signInForm");
const buttonSubmit = document.getElementById("submit");

let userInp = document.getElementById("username");

let passInp = document.getElementById("password");
const userGreetings = document.getElementById("greetings");
const closeUserInfoBut = document.getElementById("userInfoClose");
buttonSubmit.addEventListener("click", ()=> {signIn(userInp, passInp)});

document.getElementById("signInButtonClick").addEventListener("click", ()=>{signInForReal(document.getElementById("signInForm"));
signInState = true;
clearInterval(colorInterval);
document.getElementById("signInButtonClick").style.backgroundColor="white";
document.getElementById("signInButtonClick").style.transform="scale(1)";
});
userInp.addEventListener("input", ()=> {displayName(userGreetings, userInp)});
document.querySelectorAll(".closeButton").forEach(closeBut => closeBut.addEventListener("click", closePopUp));




 //Inicio de sesion y eso
//











const preludeSong = new Audio("prelude.mp3");
document.getElementById("musicButton").addEventListener("click", () => {
  preludeSong.play();
});



document.addEventListener("click", (event) => {
  if (event.target.classList.contains("returnHomeBtn")) {
    hiding(event.target.parentElement);
    showSections();
  }
})
let signInState = false;
const colorsforbutton = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f'];
let colorsIndex = 0;
let colorInterval;
setTimeout(()=> {
if (!signInState) {
userInfoDisplay(`Tip: Presione el botón "Inicio rápido" o ingrese
Usuario: Lucas, Contraseña: 2026`);
document.getElementById("signInButtonClick").style.transform="scale(1.1)";
colorInterval = setInterval(() => {
  colorsIndex = (colorsIndex +1) % colorsforbutton.length;
  document.getElementById("signInButtonClick").style.background=colorsforbutton[colorsIndex]
}, 1000);
  }}, 2500);
