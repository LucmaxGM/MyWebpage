import {discardById} from "../func/helpers.js";
const qualities=[{title:"Matemática", desc:"Muy apasionado. Actualmente sigo estudiando y practicando día a día"},{title: "Programación", desc: "Practico y programo todos los días en JavaScript, Python, React, C, HTML, CSS y más por venir."}, {title:"Inglés", desc: "Estudié 10 años el idioma y actualmente puedo hablarlo de forma fluida"}, {title:"Estadistica",desc:"Estoy actualmente estudiando y trabajando habilidades de análisis estadístico"}, {title:"Herramientas",desc:"Actualmente sé manejar Excel, calculadoras, IA, código y estoy aprendiendo a usar Linux y Github, entre otros"}, {title:"Electricidad",desc:"Aprendiendo sobre circuitos y componentes eléctricos"},{title:"Administración", desc:"Formación académica formal en Administración, Economía y Contabilidad como título secundario"},{title:"Video y Media",desc:"Trabajé varios años como editor de video con +10 proyectos completados y evaluación perfecta por cada cliente."}, {title:"Japonés", desc:"Estudiando el idioma desde hace 5 años, manteniendo una buena racha diaria por años."}, {title: "¡Gracias por su tiempo!"}];
export function openAboutMe () {
  discardById("sections");
  console.log("about me");
  const aboutMeApp = document.createElement("div");
  aboutMeApp.id="aboutMeApp";
  document.getElementById("main").appendChild(aboutMeApp);
  ///////
  const closeBtn = document.createElement("button");
  aboutMeApp.appendChild(closeBtn);
  closeBtn.classList.add("returnHomeBtn");
  ///////
  const title=document.createElement("h1");
  title.innerText="Sobre Mi";
  aboutMeApp.appendChild(title);
  ///////
  const information=document.createElement("h3");
  information.innerText="Soy Lucas B. Les doy la bienvenida a mi página web. Uno de mis proyectos de desarrollo en el que estoy trabajando para mostrar mis habilidades como desarrollador: (Por motivos de informacion y privacidad no mostraré demasiado por este medio)"
  aboutMeApp.appendChild(information);
  iterativeCreation("#aboutMeApp", "h3", 300, qualities)
  
}
function iterativeCreation(fatherElement, elementType, time, array) {
  let i =0;
  const container=document.querySelector(fatherElement);
  const interval = setInterval(()=>{
    const element=document.createElement("div");
    const title = document.createElement(elementType);
    title.innerText=`${array[i].title}`;
    element.appendChild(title);
    /////
    if (array[i].desc) {
    const desc=document.createElement("p");
    desc.innerText=`${array[i].desc}`;
    desc.classList.add("description");
    element.appendChild(desc);
    element.addEventListener("click", ()=>{
      desc.classList.toggle("expanded");
    })
    }
    /////
    element.classList.add("fadein");
    container.appendChild(element);
    
    i++;
  }, time)
  setTimeout(()=>{
    clearInterval(interval);
  }, time*array.length)
}