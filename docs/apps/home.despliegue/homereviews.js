import {changeSection} from "../../func/helpers.js";
class review {
  constructor(author, stars, content, location, link){
    this.author=author;
    this.content=content;
    this.stars=stars;
    this.location=location;
    this.link=link;
  }
}
export const reviews=[
  
  new review("hugowest107", 5, "Very good, fast and efficient i recommend", "France", "Fiverr"),
  
  new review("breatgne_", 5, "This was my first time working with anyone on this app, and I reached out to a few people and ended up working with him, and he was the most understanding, and patient person! He understood exactly what I wanted our video to portray and he also took the time to listen to the song first before proceeding with the project! He really exceeded our expectations and was very quick with responding all the time. He was a pleasure to work with, and I will definitely work with him again in the future, as well as let my friends know to work with him too. I absolutely love my video!", "United States", "Fiverr"),
  new review("outlawtherunu", 5, "At first there was some trial and error with exactly what the final version should look like but communicating back and forth with such haste. A real cinematic masterpiece was made. He understood my needs and my vision and most importantly, he cared about the quality of his work which shows.", "United States, Fiverr"),
  new review("paolo_679", 5, "I paid for what I needed, it's perfect, very good job", "France", "Fiverr"),
  new review("shsjs6", 5, "He's perfect", "Saudi Arabia", "Fiverr"),
  new review("ian_llie", 5, "Completamente satisfecho con su trabajo, me encantó de verdad, muy rápido la contestación, y muy rápido en lo que hizo, lo hizo como yo lo quería e incluso mucho mejor de lo esperado, la verdad está increíble me encantó súper súper recomendado","Mexico", "Fiverr"),
  new review("snyperz", 5, "poggers!!!", "Libia", "Fiverr"),
  new review("christiancar399",5,"I got exactly what I asked for!")
  
  ];
  
  
    
  
  export function desplegarReviews(){
    const main=document.getElementById("home-page-wrapper");
    const clicker = document.getElementById("home-reviews");
    const certificateZone=document.getElementById("certificate-zone");
    const reviewZone=document.createElement("div");
    reviewZone.classList.add("home-sect");
    reviewZone.id="review-zone";
    main.appendChild(reviewZone);
    const homeSections = document.querySelectorAll(".home-sect");
    clicker.addEventListener("click", ()=>{
      changeSection("review-zone");
    })
    reviews.forEach((review)=>{
      const item=document.createElement("div");
      item.classList.add("review-item");
      reviewZone.appendChild(item);
      const calificacion=document.createElement("h2");
      for(let i=0;i<review.stars;i++){
      calificacion.innerText+="★";
      }
      calificacion.innerText+=` (${review.stars} Stars)`;
      calificacion.classList.add("review-stars");
      item.appendChild(calificacion);
      
      const comment=document.createElement("h4");
      comment.innerText=`${review.content}`;
      item.appendChild(comment);
      const author=document.createElement("h3");
      author.innerText=`By: ${review.author}`;
      item.appendChild(author);
      const link = document.createElement("a");
      const linkImg=document.createElement("img");
      if(review.link==="Fiverr"){
        link.href="https://www.fiverr.com/lucmax_gm";
        linkImg.src=`./images/fiverr.png`;
      } else {
        link.href=review.href;
        linkImg.src=review.imgSrc
        } link.classList.add("review-link-src");
        link.appendChild(linkImg);
        item.appendChild(link);
    });
  }
  