import {discardById} from "../func/helpers.js";
import {hideAndRemoveByClass} from  "../func/helpers.js";
//abrirNoteapp
export function openNotesApp () {
  console.log("appnoteopened");
  discardById("sections");
  const noteApp = document.createElement("div");
  noteApp.id = "noteApp";
  main.appendChild(noteApp);
  /////
  const closeBtn = document.createElement("button");
  noteApp.appendChild(closeBtn);
  closeBtn.classList.add("returnHomeBtn");
  /////
  const noteInput = document.createElement("textarea");
  noteInput.id = "noteInput";
  noteApp.appendChild(noteInput);
  const addNoteButton = document.createElement("button");
  addNoteButton.id="addNoteButton";
  addNoteButton.innerText="+";
  addNoteButton.addEventListener("click", addNote);
  noteApp.appendChild(addNoteButton);
  ///////////
  const deleteButton = document.createElement("button");
  deleteButton.id="deleteNotesButton";
  deleteButton.innerText="Vaciar";
  deleteButton.addEventListener("click", deleteNotes);
  noteApp.appendChild(deleteButton);
}
function addNote() {
  const noteInput = document.getElementById("noteInput");
  const addNoteButton = document.getElementById("addNoteButton");
  const noteApp = document.getElementById("noteApp");
  /////////
  const note = document.createElement("div");
  note.classList.add("note");
  noteApp.appendChild(note);
  /////////
  const noteText = document.createElement("h3");
  noteText.classList.add("noteText");
  noteText.innerHTML = noteInput.value;
  note.appendChild(noteText);
  /////////
  const doneButton = document.createElement("button");
  doneButton.innerText=""
  doneButton.classList.add("doneButton");
  doneButton.addEventListener("click", taskDone);
  note.appendChild(doneButton);
  noteInput.value="";
}
function taskDone(event) {
  if (!event.target.previousElementSibling.classList.contains("tachado")) {
    event.target.parentElement.classList.add("doneTask");
  event.target.innerText="✓";
  event.target.previousElementSibling.classList.add("tachado");
} else {
  event.target.parentElement.classList.remove("doneTask");
  event.target.innerText="";
  event.target.previousElementSibling.classList.remove("tachado");
}}
///////////
function deleteNotes () {
  hideAndRemoveByClass("doneTask");
}