import {discardById} from "../func/helpers.js";
////forMusic
const canciones = ["Prelude", "Back One Day", "Hiding In The Blue"];
  let songIndex = 0;
  let reproduciendo= false;
  let audio = new Audio();
  let lastSongTime = 0;
  audio.src=`sounds/${canciones[songIndex]}.mp3`;
  ////
function updatePlayButton() {
  const playBtn = document.getElementById("playButton");
  if (playBtn) playBtn.innerText = reproduciendo ? "Pause" : "Play";
}
export function openSongPlayer () {
  discardById("sections");
  ////
  if (document.getElementById("songPlayer")) {
    console.log("hola");
  } else {
  
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
    playSong(songIndex - 1);
  })
  ////
  const playButton = document.createElement("button");
  playButton.innerText ="Play";
  playButton.id="playButton";
  playButton.classList.add("songButtons");
  playButton.addEventListener("click", () => {
    if (!reproduciendo) {
      playSong(songIndex);
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
    playSong(songIndex + 1);
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
}}
async function loadingSong () {
  if (audio.readyState >= 3) return;
  await new Promise(resolve => {
    audio.addEventListener("canplay", resolve, {once:true});
  })
}
async function playSong(index) {
  if (songIndex !== index) {
    audio.pause();
    reproduciendo=false;
    updatePlayButton();
    songIndex = index % canciones.length;
    audio.src = `sounds/${canciones[songIndex]}.mp3`;
  await loadingSong();
  }
  reproduciendo = true;
  
  document.getElementById("songName").innerText=`${canciones[songIndex]}`;
  updatePlayButton();
  audio.play();
}

function allSongs() {
  canciones.forEach(c => {
  const audio = new Audio(`./sounds/${c}.mp3`);
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