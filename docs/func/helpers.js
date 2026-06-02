import {showSections} from "../apps/sections.js";
import {backEndDisplay} from "../apps/back-end-display.js";
//Closing Popup btn
export function closePopUp (event) {
  event.target.parentElement.classList.add("hide");
  setTimeout(button.parentElement.classList.add("destroy"), 1000);
};
export function setUpButtons(){
  document.addEventListener("click",(el)=>{
    if(el.classList.contains("return-home-btn")){
      console.log("hola");
    }
  });
}
//hide and remove
export function hideAndRemoveByClass (className, parent) {
  const elements = document.querySelectorAll(`.${className}`);
   elements.forEach((el) => {
    el.classList.add("hide");
    el.addEventListener("transitionend", () => el.remove());
  });
}
export function userInfoHide (infoDiv) {
  infoDiv.classList.add("hide");
  setTimeout(()=>{infoDiv.remove();}, 1000);
}

export function userInfoDisplay (value, infoDiv=document.getElementById("userInfo"), userInfoDisplayed=document.getElementById("userInfoDisplayed")) {
  infoDiv.classList.remove("destroy");
  infoDiv.classList.remove("hide");
  userInfoDisplayed.innerHTML = `${value}`;
  setTimeout(userInfoHide, 5000);
  
}
export function showInfoToUser(information){
  const div=document.createElement("div");
  
}
export function displayName(userGreetings, userInp=document.getElementById("username")) {
  userGreetings.innerHTML = `¡Bienvenido, ${userInp.value}!`;
};
export function hiding (element) {
  element.classList.add("hide");
  element.addEventListener("transitionend", () => element.remove())
} 
export function discardById(id) {
  if (!(document.getElementById(id)==null)){
  document.getElementById(id).addEventListener("transitionend", () => {document.getElementById(id).remove();});
  document.getElementById(id).classList.add("hide");
  } else { return; }
}
//////Highlight

export function highlightElement(element) {
  
const highlightColors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f'];
let highlightColorsIndex = 0;
  const clickHandler = () => {
  clearInterval(element.highlightColorInterval);
  element.highlightColorInterval=null;
  
  element.style.border=element._originalBorder;
  element.style.backgroundColor=element._originalBackground;
  element.style.color=element._originalColor;
  element.style.boxShadow=element._originalBox;
  element.style.transform="scale(1)";
  element.removeEventListener("click", clickHandler);
  
  setTimeout(() => {
    element.classList.remove("highlighted");
  }, 500);
}

if (!element.classList.contains("highlighted")) {
element._originalBackground = element.style.backgroundColor;
element._originalColor = element.style.color;
element._originalBorder=element.style.border;
element._originalBox=element.style.boxShadow;
element.classList.add("highlighted");

element.style.backgroundColor=highlightColors[highlightColorsIndex];
element.style.boxShadow=`0 0 10px ${highlightColors[highlightColorsIndex]}`;
element.style.transform="scale(1.2)";
element.highlightColorInterval = setInterval(() => {
highlightColorsIndex = (highlightColorsIndex +1) % highlightColors.length;
element.style.background=highlightColors[highlightColorsIndex];
element.style.boxShadow = `0 0 10px ${highlightColors[highlightColorsIndex]}, 0 0 20px ${highlightColors[(highlightColorsIndex+1)%highlightColors.length]}`;
}, 1000);

element.addEventListener("click", clickHandler);
} 

}
export function loadCssFile(href){
  if(document.querySelector(`link[href="${href}"]`)) {
    console.log("CSS file already loaded!");
    return;
    
  }
  const link = document.createElement("link");
  link.rel="stylesheet";
  link.href=href;
  document.head.appendChild(link);
}

const accessFunctions = {
  showSections: ()=>showSections(),
  backEndDisplay: ()=>backEndDisplay()
};

export function renderAccessBtn(interval){
  const main= document.getElementById("main");
  document.querySelectorAll(".acceder-btn").forEach((el)=>{
    el.addEventListener("click",()=>{
      clearInterval(interval);
      
      
      const pos = el.getBoundingClientRect();
      const clone = el.cloneNode(true);
      el.remove();
      clone.classList.add("acceder-btn");
      clone.style.position="fixed";
      clone.style.left=pos.left+"px";
      clone.style.top=pos.top+"px";
      clone.style.zIndex="99999";
      clone.classList.add("acceder-btn-clicked");
      
      document.body.appendChild(clone);
      const info = document.createElement("h1");
      info.style.position="fixed";
      info.style.left=pos.left+"px";
      info.style.top=pos.top+"px";
      info.style.zIndex="9999999";
      main.appendChild(info);
      
      setTimeout(()=>{
        main.innerHTML="";
        

       if(el.dataset.link){
         
         info.innerText="Redirigiendote...";
     document.body.style.backgroundColor="black";
     document.body.style.pointerEvents="none";
         window.location.href=`${el.dataset.link}`
        
      } else if (el.dataset.func) {
        console.log("3500 else if");
        accessFunctions[el.dataset.func]?.();
        
        setTimeout(()=>{
          clone.remove();
          
        },300);
        /*switch(el.dataset.func){
          case "showSections":
            showSections();
            break;
          default:
            console.log("Something went wtomg...");*/
          
        
      } else {
        console.log("Something else went wrong...");
      }
      }, 1950)
    });

  });
}
export function linkAttacher(className){

  function eventListenerCallback(){
    el.removeEventListener("click");
  }
  document.querySelectorAll(className).forEach((el)=>{
    el.addEventListener("click",()=>{
      if(el.dataset.link){
      setTimeout(()=>{
        window.open(el.dataset.link, "_blank");
      },1000);
      }
    });
  });
}

export function renderProjectsByLanguage(parent, array){
  array.forEach((value)=>{
    const language = document.createElement("h4");
    language.innerText=value.name;
    parent.appendChild(language);
    const unorderedList = document.createElement("ul");
  });
}
export function renderItems(type="div", parent, array, className){
  const parentElem=document.getElementById(parent);
  if (!parentElem){
    console.log("No parent selected");
    return;
  } if (!array) {
    console.log("No array selected");
    return;
  } else {
    array.forEach((value)=>{
      const element = document.createElement(type);
      element.innerHTML=value;
      parentElem.appendChild(element);
      if (className){
      element.classList.add(className);
      }
    });
  }};
  //Rendering Slides in the main-homepage
  export function renderObjects(type="div", parentId, array, className, textContainerClass="slide-text-container"){
    const parentElem=document.getElementById(parentId);
    if (!parentElem){
    console.log("No parent selected");
    return;
  } if (!array) {
    console.log("No array selected");
    return;
  } else {
    
    array.forEach((el)=>{
      const slide = document.createElement(type);
      slide.classList.add(className);
      parentElem.appendChild(slide);
      
      const textContainer = document.createElement("div");
    textContainer.classList.add(textContainerClass);
    slide.appendChild(textContainer);
      const element=document.createElement("div");
      element.innerHTML=el.html;
      if(className){
       element.classList.add("hola");
        
      }
      textContainer.appendChild(element);
      slide.style.backgroundImage=`url("./resources/${el.img}")`;
    });
  }
}
export function carrouselMaker(parentId, array, groupClass, itemClass, imgClass) {
  const parent=document.getElementById(parentId);
  if(!parent){
    console.log("Padre no definido");
    return;
  } else if (!array){
    console.log("Array indefinida");
    return;
  }
  const group = document.createElement("div");
  if(groupClass) {
    group.classList.add(groupClass);
    
  } parent.appendChild(group);
  array.forEach((el)=>{
    const element=document.createElement("div");
    element.classList.add(itemClass);
    group.appendChild(element);
    const img = document.createElement("img");
    img.src=`./images/${el.src}`;
    img.classList.add(imgClass);
    element.appendChild(img);
    const text=document.createElement("h1");
    text.innerText=el.name;
    element.appendChild(text);
  });
  array.forEach((el)=>{
    const element=document.createElement("div");
    element.classList.add(itemClass);
    group.appendChild(element);
    const img = document.createElement("img");
    img.src=`./images/${el.src}`;
    img.classList.add(imgClass);
    element.appendChild(img);
    const text=document.createElement("h1");
    text.innerText=el.name;
    element.appendChild(text);
  });
}
export function changeSection(sectionId){
      const activeHomeSections = document.querySelectorAll(".home-sect-expand");
      const currentSection=document.getElementById(sectionId);
      
      if(currentSection.classList.contains("home-sect-expand")){
        currentSection.classList.remove("home-sect-expand");
        return;
      } else if(activeHomeSections.length>0){
        const tracked = document.querySelector(".home-sect-expand");
        function callbackerfunc(){
        tracked.removeEventListener("transitionend", callbackerfunc);
        currentSection.classList.add("home-sect-expand");
      }
          tracked.addEventListener("transitionend", callbackerfunc);
          
        activeHomeSections.forEach((el)=>{
          el.classList.remove("home-sect-expand");
          
        });
        
        
      }  else if(!(currentSection.classList.contains("home-sect-expand"))){
        document.querySelectorAll(".home-sect-expand").forEach((el)=>{el.classList.remove("home-sect-expand");});
        currentSection.classList.add("home-sect-expand");
      }
  
  }
  export function hiperView(className){
    const main = document.getElementById("home-page");
    document.querySelectorAll(className).forEach((el)=>{
      el.addEventListener("click", ()=>{
        const clone = el.cloneNode(true);
        clone.classList.toggle("hiperview")
      main.appendChild(clone);
      });
    });
  }
  export const audioPlayer = {
    playSFX(soundFile){
      const soundEffect = new Audio(`./sounds/${soundFile}`);
      soundEffect.play().catch(()=>{
        console.log("Audio error");
      });
    }
  }