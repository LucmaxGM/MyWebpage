
//Closing Popup btn
export function closePopUp (event) {
  event.target.parentElement.classList.add("hide");
  setTimeout(button.parentElement.classList.add("destroy"), 1000);
};

//hide and remove
export function hideAndRemoveByClass (className, parent) {
  const elements = document.querySelectorAll(`.${className}`);
   elements.forEach((el) => {
    el.classList.add("hide");
    el.addEventListener("transitionend", () => el.remove())
  })
}
export function userInfoHide (infoDiv) {
  infoDiv.classList.add("hide");
  setTimeout(infoDiv.classList.add("destroy"), 1000);
}

export function userInfoDisplay (value, infoDiv=document.getElementById("userInfo"), userInfoDisplayed=document.getElementById("userInfoDisplayed")) {
  infoDiv.classList.remove("destroy");
  infoDiv.classList.remove("hide");
  userInfoDisplayed.innerHTML = `${value}`;
  setTimeout(userInfoHide, 5000);
  
}

export function displayName(userGreetings, userInp=document.getElementById("username")) {
  userGreetings.innerHTML = `¡Bienvenido, ${userInp.value}!`;
};
export function hiding (element) {
  element.classList.add("hide");
  element.addEventListener("transitionend", () => element.remove())
}
export function discardById(id) {
  document.getElementById(id).addEventListener("transitionend", () => {document.getElementById(id).remove();});
  document.getElementById(id).classList.add("hide");
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