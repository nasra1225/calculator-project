const display = document.getElementById("display");
const modeBtn = document.getElementById("modeBtn");

function append(value) {
  display.value += value;
}

function clearAll() {
  display.value = "";
}

function deleteOne() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Dark mode toggle
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
