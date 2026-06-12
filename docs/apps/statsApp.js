import {discardById, hiding} from "../func/helpers.js";
import {showSections} from "./sections.js";
export function openStatisticApp () {
  discardById("sections");
  const statsApp = document.createElement("div");
  statsApp.id="statsApp";
  main.appendChild(statsApp);
  /////
  const closeBtn = document.createElement("button");
  statsApp.appendChild(closeBtn);
  closeBtn.classList.add("return-btn");
  closeBtn.addEventListener("click", (event)=>{
    hiding(event.target.parentElement);
    showSections();
  });
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
  //// No
  //const decil = document.createElement("p");
  //decil.id="statsDecil";
  //decil.innerText="Custom decil: ";
  //sheet.appendChild(decil);
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
  const frecuencyGraphLabel = document.createElement("h3");
  frecuencyGraphLabel.innerText="Gráfico de frecuencias";
  frecuencyGraphLabel.classList.add("label");
  frecuencyGraph.appendChild(frecuencyGraphLabel);
  const graphContainer = document.createElement("div");
  graphContainer.id="graphContainer";
  statsApp.appendChild(graphContainer);
  const graphContainerLabel = document.createElement("h3");
  graphContainerLabel.innerText="Gráfico de elementos";
  graphContainerLabel.classList.add("label");
  graphContainer.appendChild(graphContainerLabel);
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
  //document. getElementById("statsDecil").innerText=`Decil N°${Math.floor(percInput/10)}: ${calcularPercentil(array, Math.floor(percInput/10))}`;
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