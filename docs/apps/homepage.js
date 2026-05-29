
import {discardById, loadCssFile, renderItems, renderObjects, carrouselMaker, hiperView, audioPlayer, renderAccessBtn} from "../func/helpers.js";
import {homePageSections, carrousel} from "../resources/homepagesections.js";
import {certificados, desplegarCertificados} from "../apps/home.despliegue/homecertificates.js";
import {reviews, desplegarReviews} from "../apps/home.despliegue/homereviews.js"
loadCssFile("../apps/home.despliegue/homecertif.css");
const main = document.getElementById("main");

export function openHomePage() {
  discardById("sections");
  const homePageWrapper=document.createElement("div");
  homePageWrapper.id="home-page-wrapper";
  main.appendChild(homePageWrapper);
  const home = document.createElement("div");
  home.id="home-page";
  homePageWrapper.appendChild(home);
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
   </div>
     <button id="prevSlideBtn" class="arrow-btn"><img src="./images/arrow.png"></button>
  <button id="nextSlideBtn" class="arrow-btn"><img src="./images/arrow.png"></button>
  </div>
  <div id="home-certificates"><img src="./resources/certificates.png"></div><div id="home-reviews"><img src="./resources/reviews.png"></div>
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
  const certificatesBtn=document.getElementById("home-certificates");
  certificatesBtn.addEventListener("click", ()=>{
    console.log("hola");
  })
  //////// logic
  navBtn.addEventListener("click", ()=>{
    navExtra.classList.toggle("expand")
  });
  ///////
  
  ////
  let currentSlide = 0;
  
  renderObjects("section", "tracker", homePageSections, "slide");
  const totalSlides = document.querySelectorAll(".slide").length;
  function updateSlide(){
    tracker.style.transform=`translateX(-${currentSlide*100}%)`;
  }
  let carruselInterval = setInterval(()=>{
    currentSlide=(currentSlide +1)%totalSlides;
    updateSlide();
    console.log("interval");
  }, 2000);
  prevSlideBtn.addEventListener("click",()=>{
    if(currentSlide==0){
      currentSlide=totalSlides -1;
    } else {
      currentSlide=(currentSlide -1);
    } updateSlide();
      clearInterval(carruselInterval);
  });
  nextSlideBtn.addEventListener("click",()=>{
    currentSlide= (currentSlide +1)%totalSlides;
    updateSlide();
    clearInterval(carruselInterval);
  });
  tracker.addEventListener("pointerdown",()=>{
    clearInterval(carruselInterval);
    console.log("interval stopped");
  });
  carrouselMaker("home-footer",carrousel, "carrousel-group", "carrousel-item", "carrousel-img");
  desplegarCertificados();
  desplegarReviews();
  document.querySelectorAll(".cert-img-item").forEach((el)=>{el.addEventListener("click", ()=>{
    
    audioPlayer.playSFX("paper-slide.mp3");
    el.classList.toggle("hiperview");
  })});
  document.querySelectorAll(".review-item").forEach((el)=>{el.addEventListener("click", ()=>{
    audioPlayer.playSFX("paper-slide.mp3");
    el.classList.toggle("hiperview");
    
  })});
  renderAccessBtn(carruselInterval);
}
