//Usage:
//toggleDarkMode() to toggle mode.
//A button with id="darkModeBtn" can display current mode.

const colors = [
  {property: "--red", lightMode: "#A8000F", darkMode: "#A8000F"},
  {property: "--darkred", lightMode: "#8A000E", darkMode: "#8A000E"},
  {property: "--lightgray", lightMode: "#E5E5E5", darkMode: "#121212"},
  {property: "--lightergray", lightMode: "#F0F0F0", darkMode: "#121212"},
  {property: "--transparentlightgray", lightMode: "rgba(255, 158, 158, 0.2)", darkMode: "rgba(255, 255, 255, 0.2)"},
  {property: "--darkgray", lightMode: "#828387", darkMode: "#111111"},
  {property: "--darkergray", lightMode: "#626367", darkMode: "#010101"},
  {property: "--white", lightMode: "#FEFEFE", darkMode: "#181818"},
  {property: "--black", lightMode: "#111", darkMode: "#FEFEFE"},
  {property: "--logoFilter", lightMode: "", darkMode: "grayscale(1) invert(1)"}
];

const root = document.querySelector(":root");

const setColor = (color, mode) => root
  .style
  .setProperty(color.property, color[mode]);

const setColors = mode => colors
  .forEach(color => setColor(color, mode));

let isDarkMode = false;

const localStorage = window.localStorage;

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('mode', isDarkMode ? "dark" : "light");

  isDarkMode ? setColors("darkMode") : setColors("lightMode");

  darkModeBtnEl = document.getElementById("darkModeBtn");
  darkModeBtnEl.innerHTML = isDarkMode ? "light_mode" : "dark_mode";
}

function checkLocalStorage() {
  if (localStorage.getItem('mode') === "dark") {
    toggleDarkMode();
  }
}
checkLocalStorage();
