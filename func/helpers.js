
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