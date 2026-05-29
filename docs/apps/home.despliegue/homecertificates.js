import {changeSection} from "../../func/helpers.js";
class Cert {
  constructor(nombre, entidadEmisora, src){
    this.nombre=nombre;
    this.entidadEmisora=entidadEmisora;
    this.src=src;
  }
}
export const certificados = [
  new Cert("Python Developer","SoloLearn", "cert-python.png"),
  new Cert("C++ Intermedio", "SoloLearn", "cert-cpp.png"),
  new Cert("C Intermedio", "SoloLearn","cert-c-language.png"),
  new Cert("SQL Intermedio", "SoloLearn","cert-sql.png"),
  new Cert("Campeón Nacional", "Formando Emprendedores", "cert-formandoLucasB2023.png"), new Cert("Introduction to Data Science", "Cisco", "cert-datascience.png")
  
  ]


export function desplegarCertificados(){
  const main = document.getElementById("home-page-wrapper");
  const certificates=document.getElementById("home-certificates");
  
  const certificateZone=document.createElement("div");
  certificateZone.id="certificate-zone";
  certificateZone.classList.add("certificate-zone");
  certificateZone.classList.add("home-sect");
  main.appendChild(certificateZone);
  certificates.addEventListener("click", ()=>{
    
  changeSection("certificate-zone");
    
  });
    certificados.forEach((cert)=>{
      
      const item = document.createElement("div");
      item.classList.add("cert-item");
      certificateZone.appendChild(item);
      const img=document.createElement("img");
      img.src=`./apps/home.despliegue/certificates/${cert.src}`;
      img.classList.add("cert-img-item");
      item.appendChild(img);
      const textContainer=document.createElement("div");
      textContainer.classList.add("cert-text-container")
      item.appendChild(textContainer);
      const title=document.createElement("h2");
      title.innerText=cert.nombre;
      textContainer.appendChild(title);
      const link=document.createElement("a");
      switch(cert.entidadEmisora){
        case "SoloLearn":
          link.href="https://www.sololearn.com/profile/36382950/?ref=app";
          break;
        case "Mimo":
          link.href="";
          break;
        case "Cisco":
          link.href="https://www.credly.com/users/lucas-benjamin-blasco-gustafson/badges#credly";
          break;
        default:
          link.href="";
          break;
      
      } link.innerText=cert.entidadEmisora;
      textContainer.appendChild(link);
  });
  
  
}