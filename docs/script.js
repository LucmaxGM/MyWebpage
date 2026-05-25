
import {userInfoHide, closePopUp, hideAndRemoveByClass, displayName, userInfoDisplay, hiding, discardById, highlightElement} from "./func/helpers.js";

import {glowingNeon} from "./func/visuals.js";

///////////////////
import {showSections, createSection} from "./apps/sections.js";
//////////////////
import {signIn, signInForReal} from "./func/userAuth.js";

////////////////////
import { openNotesApp } from "./apps/notesApp.js";
import {openHomePage} from "./apps/homepage.js";
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
openHomePage();
document.querySelectorAll(".closeButton").forEach(closeBut =>
  closeBut.addEventListener("click", closePopUp)
);
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("returnHomeBtn")) {
    hiding(event.target.parentElement);
    showSections();
  }
});
 //Inicio de sesion y eso
//






