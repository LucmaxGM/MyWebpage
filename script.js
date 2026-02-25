
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


const hola = "si se actualizó";
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

function closePopUp (event) {
  event.target.parentElement.classList.add("hide");
  setTimeout(button.parentElement.classList.add("destroy"), 1000);
};
document.querySelectorAll(".closeButton").forEach(closeBut => closeBut.addEventListener("click", closePopUp));

//hide and remove
function hideAndRemoveByClass (className, parent) {
  const elements = document.querySelectorAll(`.${className}`);
   elements.forEach((el) => {
    el.classList.add("hide");
    el.addEventListener("transitionend", () => el.remove())
  })
}
  function userInfoHide () {
  infoDiv.classList.add("hide");
  setTimeout(infoDiv.classlist.add("destroy"), 1000);
}
function userInfoDisplay (value) {
  infoDiv.classList.remove("destroy");
  infoDiv.classList.remove("hide");
  userInfoDisplayed.innerHTML = `${value}`;
  setTimeout(userInfoHide, 5000);
  
}
document.getElementById("signInButtonClick").addEventListener("click", signInForReal)
function signInForReal() {
  form.addEventListener("transitionend", () => {form.remove(); });
  form.classList.add("hide");
  showSections();
  
}
function signIn () {
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
                                 
buttonSubmit.addEventListener("click", signIn);
function displayName() {
  userGreetings.innerHTML = `¡Bienvenido, ${userInp.value}!`;
};
userInp.addEventListener("input", displayName)
 //Inicio de sesion y eso
//

function openAboutMe () {
  console.log("about me")
}
//AbrirCalc
function openCalcApp () {
  console.log("hola");
  discardById("sections");
  
  
}
function openStatisticApp () {
  discardById("sections");
  const statsApp = document.createElement("div");
  statsApp.id="statsApp";
  main.appendChild(statsApp);
  /////
  const closeBtn = document.createElement("button");
  statsApp.appendChild(closeBtn);
  closeBtn.classList.add("returnHomeBtn");
  /////
  const textArea = document.createElement("textarea");
  textArea.addEventListener("input", () => {calcularStats(textArea.value)});
  textArea.placeholder="Escriba su lista de valores separados por espacios o comas. Ej: 12,13,15 o 12 13 15";
  statsApp.appendChild(textArea);
  /////
  const percInput = document.createElement("input");
  percInput.value=0;
  percInput.placeholder="Percentil: 1 al 100";
  percInput.id="percInput";
  percInput.addEventListener("input", () => {
    calcularStats(textArea.value);
  })
  statsApp.appendChild(percInput);
  
  /////
  const sheet = document.createElement("div");
  sheet.id="sheet";
  statsApp.appendChild(sheet);
  /////
  const ordenada = document.createElement("p");
  ordenada.id="statsOrdenada";
  ordenada.innerText="Ordenada: ";
  statsApp.appendChild(ordenada);
  /////
  const moda = document.createElement("p");
  moda.innerText="Moda(s): ";
  moda.id="statsModa";
  sheet.appendChild(moda);
  ////
  const mediana = document.createElement("p");
  mediana.innerText="Mediana: ";
  mediana.id="statsMediana";
  sheet.appendChild(mediana);
  ////
  const promedio = document.createElement("p");
  promedio.innerText="Promedio/media: ";
  promedio.id="statsPromedio";
  sheet.appendChild(promedio);
  ////
  const decil = document.createElement("p");
  decil.id="statsDecil";
  decil.innerText="Custom decil: ";
  sheet.appendChild(decil);
  ////
  const percentil = document.createElement("p");
  percentil.id="statsPercentil";
  percentil.innerText="Custom percentil: ";
  sheet.appendChild(percentil);
  /////
  const frecuencyGraph = document.createElement("div");
  frecuencyGraph.id="frecuencyGraph";
  statsApp.appendChild(frecuencyGraph);
  /////
  const graphContainer = document.createElement("div");
  graphContainer.id="graphContainer";
  statsApp.appendChild(graphContainer);
}

const divsheet = document.getElementById("sheet");
function addToSheet (p) {
  const paragraph = document.createElement("p");
  paragraph.innerText=`${p}`;
  divsheet.appendChild(paragraph);
}
function maxValue (array) {
  const conteo = {};
  for (const n of array) {
    conteo[n]= (conteo[n] || 0) + 1;
  }
  let maxRepetitions = Math.max(...Object.values(conteo));
  if (Object.values(conteo).every(v => v === maxRepetitions)) return "No existe";
  const modas = Object.keys(conteo).filter(n => conteo[n] === maxRepetitions).map(Number);
  return modas;
  
}
console.log(maxValue([3, 5, 7, 7, 8, 9, 9]));
function calcularPercentil (array, percInput) {
  const position = percInput * ((array.length +1) / 100);
  const lowerIndex= Math.floor(position) -1;
  const upperIndex= lowerIndex +1;
  if (lowerIndex < 0) return array[0];
  if (upperIndex > array.length) return array[array.length - 1];
  const lowerValue = array[lowerIndex];
  const upperValue = array[upperIndex];
  const fraction = position - Math.floor(position);
  const result = lowerValue + (upperValue - lowerValue) * fraction;
  
  return result;
}
function calcularPromedio (array) {
  let total = 0;
  for (const value of array) {
    total = total + value;
  }
  return total / array.length;
}
function calcularStats (value) {
  const array = value.split(/[\s,]+/).map(n => Number(n)).filter(n => !isNaN(n)).sort((a, b) => a-b);
  const percInput = document.getElementById("percInput").value;
  document.getElementById("statsOrdenada").innerText=`Array ordenada: ${array}`
  document.getElementById("statsModa").innerText= `Moda(s): ${maxValue(array)}`;
  document.getElementById("statsPromedio").innerText=`Promedio: ${calcularPromedio(array)}`;
  document.getElementById("statsPercentil").innerText=`Percentil N°${document.getElementById("percInput").value}: ${calcularPercentil(array, percInput)}`;
  document.getElementById("statsMediana").innerText=`Mediana: ${calcularPercentil(array, 50)}`;
  document. getElementById("statsDecil").innerText=`Decil N°${Math.floor(percInput/10)}: ${calcularPercentil(array, Math.floor(percInput/10))}`;
  graficadoraDeFrecuencyArray(array);
  graficadorDeArray(array);
}
function graficadoraDeFrecuencyArray(array) {
  const frecuencyGraph = document.getElementById("frecuencyGraph");
  frecuencyGraph.innerHTML="";
  if (array.length === 0) return;
  const conteo = {};
  for (const v of array) {
    conteo[v]=(conteo[v] || 0)+1;
  }
  const values = Object.keys(conteo).map(Number);
  const frecuencies = Object.values(conteo);
  const maxFrecuency=Math.max(...frecuencies);
  if (values.length < 20) {
  for (const val of values) {
    const bar = document.createElement("div");
    frecuencyGraph.appendChild(bar);
    bar.classList.add("graphicBar");
    bar.style.height=`${(conteo[val]/maxFrecuency)*100}%`;
    bar.style.width=`${100/values.length}%`;
    bar.innerText=`${conteo[val]}`;
    const label = document.createElement("h3");
   label.classList.add("barLavel");
   label.textContent=`${val}`;
   bar.appendChild(label);
  }} else {
    for (const val of values) {
    const bar = document.createElement("div");
    frecuencyGraph.appendChild(bar);
    bar.classList.add("graphicBar");
    bar.style.height=`${(conteo[val]/maxFrecuency)*100}%`;
    bar.style.width=`auto`;
    const label = document.createElement("h3");
   label.classList.add("barLavel");
   label.textContent=`${val}`;
   bar.appendChild(label);
  }}
  
}
function graficadorDeArray (array) {
  const graphContainer = document.getElementById("graphContainer");
  graphContainer.innerHTML="";
  const maxValue = Math.max(...array);
  /////
  if (array.length < 20) {
  for (const e of array) {
    const bar = document.createElement("div");
    graphContainer.appendChild(bar);
    bar.classList.add("graphicBar");
    bar.style.width=`${100/array.length}%`;
    bar.style.height=`${e / maxValue*100}%`;
    bar.innerText=`${e}`;
  }} else {
    for (const e of array) {
    const bar = document.createElement("div");
    graphContainer.appendChild(bar);
    bar.classList.add("graphicBar");
    bar.style.width=`20px`;
    bar.style.height=`${e / maxValue*100}%`;
    bar.innerText=`${e}`;
  }}
}
//abrirNoteapp
function openNotesApp () {
  console.log("appnoteopened");
  discardById("sections");
  const noteApp = document.createElement("div");
  noteApp.id = "noteApp";
  main.appendChild(noteApp);
  /////
  const closeBtn = document.createElement("button");
  noteApp.appendChild(closeBtn);
  closeBtn.classList.add("returnHomeBtn");
  /////
  const noteInput = document.createElement("textarea");
  noteInput.id = "noteInput";
  noteApp.appendChild(noteInput);
  const addNoteButton = document.createElement("button");
  addNoteButton.id="addNoteButton";
  addNoteButton.innerText="+";
  addNoteButton.addEventListener("click", addNote);
  noteApp.appendChild(addNoteButton);
  ///////////
  const deleteButton = document.createElement("button");
  deleteButton.id="deleteNotesButton";
  deleteButton.innerText="Vaciar";
  deleteButton.addEventListener("click", deleteNotes);
  noteApp.appendChild(deleteButton);
}
function addNote() {
  const noteInput = document.getElementById("noteInput");
  const addNoteButton = document.getElementById("addNoteButton");
  const noteApp = document.getElementById("noteApp");
  /////////
  const note = document.createElement("div");
  note.classList.add("note");
  noteApp.appendChild(note);
  /////////
  const noteText = document.createElement("h3");
  noteText.classList.add("noteText");
  noteText.innerHTML = noteInput.value;
  note.appendChild(noteText);
  /////////
  const doneButton = document.createElement("button");
  doneButton.innerText=""
  doneButton.classList.add("doneButton");
  doneButton.addEventListener("click", taskDone);
  note.appendChild(doneButton);
  noteInput.value="";
}
function taskDone(event) {
  if (!event.target.previousElementSibling.classList.contains("tachado")) {
    event.target.parentElement.classList.add("doneTask");
  event.target.innerText="✓";
  event.target.previousElementSibling.classList.add("tachado");
} else {
  event.target.parentElement.classList.remove("doneTask");
  event.target.innerText="";
  event.target.previousElementSibling.classList.remove("tachado");
}}
///////////
function deleteNotes () {
  hideAndRemoveByClass("doneTask");
}
//sections
class App {
  constructor(name, enter, imgSrc, finished) {
    this.name = name;
    this.enter = enter;
    this.imgSrc = imgSrc;
    this.finished = finished;
  }
}
let sections = [
  new App ("Notas", openNotesApp, "note.jpg", true),
  new App ("Calculadora", openCalcApp, "calc.jpg", false),
  new App ("Statistics", openStatisticApp, "calc2.jpg", true),
  new App ("Sobre Mi", openAboutMe, "hola.jpg", "i"),
  new App ("Jueguito", openJueguito, "holaxd.jpg", false),
  new App("Reproductor de música", openSongPlayer, "disco.jpg", true)
  ];
function openJueguito () {
  console.log("Hola")
};
  ////forMusic
  let songIndex = 0;
  let reproduciendo= false;
  let audio = new Audio();
  let lastSongTime = 0;
  ////
function updatePlayButton() {
  const playBtn = document.getElementById("playButton");
  if (playBtn) playBtn.innerText = reproduciendo ? "Pause" : "Play";
}
function openSongPlayer () {
  discardById("sections");
  ////
  if (audio.paused) {
    audio.src=`${location.origin}/sounds/${canciones[songIndex]}.mp3`;
    audio.currentTime=lastSongTime;
  }
  ////
  const songPlayer = document.createElement("div");
  songPlayer.id = "songPlayer";
  songPlayer.classList.add("app");
  main.appendChild(songPlayer);
  ////
  const closeBtn = document.createElement("button");
  songPlayer.appendChild(closeBtn);
  closeBtn.classList.add("returnHomeBtn");
  
  
  ////
  const songPlayerHeader = document.createElement("div");
  songPlayerHeader.id="songPlayerHeader";
  songPlayer.appendChild(songPlayerHeader);
  ////
  const songName = document.createElement("h2");
  songName.id="songName";
  songName.innerText=canciones[songIndex];
  songPlayerHeader.appendChild(songName);
  ////
  const songControls = document.createElement("div");
  songControls.id="songControls";
  songPlayerHeader.appendChild(songControls);
  ////
  const progressBar = document.createElement("input");
  progressBar.type="range";
  progressBar.min=0;
  progressBar.max=100;
  progressBar.value=0;
  progressBar.id="progressBar";
  songControls.appendChild(progressBar);
  audio.addEventListener("timeupdate", () => {
    lastSongTime = audio.currentTime;
    if (!audio.duration) return;
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  });
  progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  });
  const breakerForBar = document.createElement("br");
  songControls.appendChild(breakerForBar);
  ////
  const lastSongBtn = document.createElement("button");
  lastSongBtn.innerText="Previous";
  lastSongBtn.classList.add("songButtons");
  songControls.appendChild(lastSongBtn);
  lastSongBtn.addEventListener("click", () => {
    songIndex = (songIndex - 1 + canciones.length) % canciones.length;
    audio.src=`sounds/${canciones[songIndex]}.mp3`;
    songName.innerText=canciones[songIndex];
    reproduciendo=true;
    audio.play();
    updatePlayButton();
  })
  ////
  const playButton = document.createElement("button");
  playButton.innerText ="Play";
  playButton.id="playButton";
  playButton.classList.add("songButtons");
  playButton.addEventListener("click", () => {
    if (!reproduciendo) {
      audio.play();
      reproduciendo = true;
      updatePlayButton();
    } else {
      audio.pause();
      reproduciendo = false;
      updatePlayButton();
    }
  })
  songControls.appendChild(playButton);
  ////
  const nextSongBtn = document.createElement("button");
  nextSongBtn.innerText="Next";
  nextSongBtn.classList.add("songButtons");
  nextSongBtn.addEventListener("click", () => {
    songIndex = (songIndex + 1) % canciones.length;
    audio.src = `sounds/${canciones[songIndex]}.mp3`;
    songName.innerText=canciones[songIndex];
    reproduciendo=true;
    audio.play();
    updatePlayButton();
  })
  songControls.appendChild(nextSongBtn);
  ////
  const songTimer = document.createElement("h3");
  songTimer.id="songTimer";
  songTimer.innerText=`${formatTime(audio.currentTime)}/${formatTime(audio.duration)}`;
  audio.addEventListener("timeupdate", () => {
    songTimer.innerText=`${formatTime(audio.currentTime)}/${formatTime(audio.duration)}`;
  })
  songPlayerHeader.appendChild(songTimer);
  ////
  ////
  const songList = document.createElement("div");
  songList.id="songList";
  songPlayer.appendChild(songList);
  ////
  canciones.forEach((c, i) => {
    const songSection = document.createElement("div");
    songSection.classList.add("songSection");
    songSection.addEventListener("click", () => {playSong(i)});
    songList.appendChild(songSection);
    ////
    const songSectionTitle = document.createElement("h3");
    songSectionTitle.classList.add("songSectionTitle");
    songSectionTitle.innerText = c;
    songSection.appendChild(songSectionTitle);
    ////
  })
}
async function loadingSong () {
  if (audio.readyState >= 3) return;
  await new Promise(resolve => {
    audio.addEventListener("canplay", resolve, {once:true});
  })
}
async function playSong(index) {
  songIndex = index;
  audio.src = `sounds/${canciones[songIndex]}.mp3`;
  
  await loadingSong();
  reproduciendo = true;
  
  document.getElementById("songName").innerText=`${canciones[songIndex]}`;
  updatePlayButton();
  audio.play();
}
function createSection (name, enter, imgSrc, finished) {
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
    button.addEventListener("click", enter);
    container.classList.add("completed");
    stateText.innerText = "Completed";
    stateText.style.color="lime";
  } else if (finished === "i") {
    button.addEventListener("click", enter);
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
function showSections() {
sections.forEach(s => {createSection(s.name, s.enter, s.imgSrc, s.finished)});
}
function discardById(id) {
  document.getElementById(id).addEventListener("transitionend", () => {document.getElementById(id).remove();});
  document.getElementById(id).classList.add("hide");
  
}

const preludeSong = new Audio("prelude.mp3");
document.getElementById("musicButton").addEventListener("click", () => {
  preludeSong.play();
});
const canciones = ["Prelude", "Back One Day", "Hiding In The Blue"];
function allSongs() {
  canciones.forEach(c => {
  const audio = new Audio(`sounds/${c}.mp3`);
  const button = document.createElement("button");
  button.innerHTML = c;
  main.appendChild(button);
  button.addEventListener("click", () => {
    audio.play();
  })
  })
}
function formatTime (sec) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}


document.addEventListener("click", (event) => {
  if (event.target.classList.contains("returnHomeBtn")) {
    hiding(event.target.parentElement);
    showSections();
  }
})
function hiding (element) {
  element.classList.add("hide");
  element.addEventListener("transitionend", () => element.remove())
}