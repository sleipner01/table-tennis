const lightMode = [
  {prop: "--red",       value:"#A8000F"},
  {prop: "--lightgray", value:"#E5E5E5"},
  {prop: "--darkgray",  value:"#828387"},
  {prop: "--white",     value:"#FEFEFE"},
  {prop: "--black",     value:"#010101"},
]

const darkMode = [
  {prop: "--red",       value:"#A8000F"},
  {prop: "--lightgray", value:"#E5E5E5"},
  {prop: "--darkgray",  value:"#828387"},
  {prop: "--white",     value:"#010101"},
  {prop: "--black",     value:"#FEFEFE"},
]

const root = document.querySelector(":root")

const setColor = color => root
  .style
  .setProperty(color.prop, color.value)

const setMode = mode => mode
  .map(setColor)

let isDarkMode = false

const toggleDarkMode = () => {
  isDarkMode = !isDarkMode
  isDarkMode ? setMode(darkMode) : setMode(lightMode)
}
