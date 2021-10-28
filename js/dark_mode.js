//To use:
//<button onclick="toggleDarkMode()"></button>

const colors = [
  {property: "--red",       lightMode: "#A8000F", darkMode: "#A8000F"},
  {property: "--lightgray", lightMode: "#E5E5E5", darkMode: "#828387"},
  {property: "--darkgray",  lightMode: "#828387", darkMode: "#E5E5E5"},
  {property: "--white",     lightMode: "#FEFEFE", darkMode: "#111"},
  // {property: "--white",     lightMode: "#FEFEFE", darkMode: "#010101"},
  {property: "--black",     lightMode: "#111", darkMode: "#FEFEFE"},
  // {property: "--black",     lightMode: "#010101", darkMode: "#FEFEFE"},
  {property: "--logoFilter",lightMode: "", darkMode: "grayscale(1) invert(1)"}
];

const root = document.querySelector(":root");

const setColor = (color, mode) => root
  .style
  .setProperty(color.property, color[mode]);

const setColors = mode => colors
  .forEach(color => setColor(color, mode));

let isDarkMode = false;

const toggleDarkMode = () => {
  isDarkMode = !isDarkMode;
  isDarkMode ? setColors("darkMode") : setColors("lightMode");
  darkModeBtnEl = document.getElementById("darkModeBtn");
  darkModeBtnEl.innerHTML = isDarkMode ? "light_mode" : "dark_mode";
}
