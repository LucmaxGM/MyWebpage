import {openNotesApp} from "./notesApp.js";
import {openCalcApp} from "./calcApp.js";
import {openGame} from "./videogameApp.js";
import {openStatisticApp} from "./statsApp.js";
import {openAuthDemo} from "./authdemo.js";
import {discardById, userInfoDisplay} from "../func/helpers.js";
import {openSongPlayer} from "./musicPlayerApp.js";
import {openAboutMe} from "./aboutMe.js";
import {glowingNeon} from "../func/visuals.js"
import {openHomePage} from "./homepage.js";
class App {
  constructor(name, enter, imgSrc, finished) {
    this.name = name;
    this.enter = enter;
    this.imgSrc = imgSrc;
    this.finished = finished;
  }
}
const sections = [
  new App ("Notas", openNotesApp, "note.jpg", true),
  new App ("Estadistica", openStatisticApp, "calc2.jpg", true),
  new App("Reproductor de música", openSongPlayer, "disco.jpg", true),
  new App ("Authentication Demo", openAuthDemo, "xd.jpg", true),
  new App ("Sobre Mi", openAboutMe, "hola.jpg", "i"),
  new App ("Calculadora", openCalcApp, "calc.jpg", false),
  new App ("Videojuego", openGame, "holaxd.jpg", false)
  
  ];
  
export function createSection (name, enter, imgSrc, finished) {
  if (document.getElementById("sections") === null) {
    const appSections = document.createElement("div");
    appSections.id= "sections";
    document.getElementById("main").appendChild(appSections);
  }
  const appSections = document.getElementById("sections");
  const container = document.createElement("div");
  
  appSections.appendChild(container);
  const img = document.createElement("img");
  const title = document.createElement("h2");
  const button = document.createElement("button");
  button.innerText = "Proceder";
  container.classList.add("sectionContainer");
  img.src = imgSrc;
  title.innerHTML = name;
  container.appendChild(img);
  container.appendChild(title);
  container.appendChild(button);
  img.classList.add("sectionImg");
  title.classList.add("sectionTitle");
  button.classList.add("sectionButton");
  const state = document.createElement("div");
  const stateText = document.createElement("h3");
  container.appendChild(state);
  state.appendChild(stateText);
  state.classList.add("stateOfSection");
  stateText.classList.add("completedState");
  if (finished === true) {
    container.addEventListener("click", ()=>{
      document.querySelectorAll(".return-home-btn").forEach((el)=>{el.remove();});
      enter();

    });
    button.addEventListener("click", ()=>{
      console.log("Congrats on clicking the button!")
    });
    container.classList.add("completed");
    stateText.innerText = "Completed";
    stateText.style.color="lime";
  } else if (finished === "i") {
    container.addEventListener("click",()=>{
      document.querySelectorAll(".return-home-btn").forEach((el)=>{el.remove();});
      enter();
    });
    button.addEventListener("click",  ()=>{
      console.log("Congrats on clicking the button!")
    });
    
    container.classList.add("sectionInfo");
    stateText.innerText = "More info";
    stateText.style.color= "white";
  }
  else {
    button.addEventListener("click", () => {
      userInfoDisplay("Esta funcion no ha sido terminada aun.");
    }
    );
    stateText.innerText = "Soon...";
    stateText.style.color= "red";
    button.style.color="grey";
    
  }
}
export function showSections() {
  
  if(!document.querySelector(".return-home-btn")){
  const button = document.createElement("button");
  button.classList.add("return-home-btn");
  button.addEventListener("click", ()=>{
    main.innerHTML="";
    openHomePage();
    button.remove();
  });
  document.getElementById("main").appendChild(button);
}
sections.forEach(s => {createSection(s.name, s.enter, s.imgSrc, s.finished)});
}