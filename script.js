// select dom element
const counterEl = document.getElementById("counter");
let incrementEl = document.getElementById("increment");
let decrementEl = document.getElementById("decrement");

// initial state
let count = 0;

// adding event listener
incrementEl.addEventListener("click", () => {
  count++;
  counterEl.innerText = count;
});
decrementEl.addEventListener("click", () => {
  count--;
  counterEl.innerText = count;
});
