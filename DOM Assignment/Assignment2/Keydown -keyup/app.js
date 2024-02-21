let container = document.getElementById("container");
let display = document.getElementById("display");

document.addEventListener("keydown", (e) => {
  display.style.color = "red";
  display.innerText = e.key + " is keyDown";
});

document.addEventListener("keyup", (e) => {
  display.style.color = "green";
  display.innerText = e.key + " is keyUp";
});
