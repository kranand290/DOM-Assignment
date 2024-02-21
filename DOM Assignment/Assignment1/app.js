const increMent = document.querySelector("#incbtn");
const decreMent = document.getElementById("decbtn");
const resetBtn = document.getElementById("resbtn");
const displayValue = document.getElementById("dvalue");

decreMent.addEventListener("click", decrement);

function decrement() {
  const count = Number(displayValue.innerText);
  displayValue.innerText = count + 1;
}

increMent.addEventListener("click", increment);

function increment() {
  const count = Number(displayValue.innerText);
  displayValue.innerText = count + 1;
}

resetBtn.addEventListener("click", reset);

function reset() {
  displayValue.innerText = 0;
}
