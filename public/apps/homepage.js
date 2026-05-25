
import {discardById, loadCssFile} from "../func/helpers.js";

const main = document.getElementById("main");

export function openHomePage() {
  discardById("sections");
  const home = document.createElement("div");
  home.id="home-page";
  main.appendChild(home);
  home.innerHTML=`
  <header id="home-header">
  <h1> Web</h1></header>
    <nav id="home-nav">
    <div class="nav-normal">
  <img src="./images/sololearn.png" class="home-nav-img"><img src="./images/linkedin.png" title="My Linkedin Profile" class="home-nav-img"><img src="./images/showmore.png" title="Show More" class="home-nav-img" id="navBtn">
    </div>
    <div id="nav-extra">
    <img src="./images/fiverr.png">
    <img src="./images/duolingo.png">
    <img src="./images/discord.png">
    </div>
  </nav>
  <div id="home-main">
   <div id="tracker">
  <section class="slide">Section1</section>
  <section class="slide">Section2</section>
  <section class="slide">Section3</section>

   </div>
     <button id="prevSlideBtn" class="arrow-btn"><img src="./images/arrow.png"></button>
  <button id="nextSlideBtn" class="arrow-btn"><img src="./images/arrow.png"></button>
  </div>
  <footer id="home-footer">
  </footer>
  `;
  loadCssFile("./styles/homepage.css");
  //////// names 
  const navBtn = document.getElementById("navBtn");
  const navExtra = document.getElementById("nav-extra");
  const nav = document.getElementById("home-nav");
  const homeMain=document.getElementById("home-main");
  const tracker=document.getElementById("tracker");
  const prevSlideBtn=document.getElementById("prevSlideBtn");
  const nextSlideBtn=document.getElementById("nextSlideBtn");
  //////// logic
  navBtn.addEventListener("click", ()=>{
    navExtra.classList.toggle("expand")
  });
  ///////
  
  ////
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll(".slide").length;
  function updateSlide(){
    tracker.style.transform=`translateX(-${currentSlide*100}%)`;
  }
  let carruselInterval = setInterval(()=>{
    currentSlide=(currentSlide +1)%3;
    updateSlide();
    console.log("interval");
  }, 2000);
  prevSlideBtn.addEventListener("click",()=>{
    if(currentSlide==0){
      currentSlide=totalSlides -1;
    } else {
      currentSlide=(currentSlide -1);
    } updateSlide();
  });
  nextSlideBtn.addEventListener("click",()=>{
    currentSlide= (currentSlide +1)%3;
    updateSlide();
  });
}