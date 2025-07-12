// Catching The Elements
let inputEl = document.getElementById("text");
  let labelEl = document.getElementById("text2");


inputEl.addEventListener("keyup", () => {
  let inputEl = document.getElementById("text");
  let labelEl = document.getElementById("text2");
  labelEl.innerHTML = inputEl.value;
  localStorage.setItem("text", inputEl.value);
});
labelEl.innerHTML = localStorage.getItem("text");
