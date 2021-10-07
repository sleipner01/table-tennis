const color = (propValue, lightModeValue, darkModeValue) => ({
  prop:      propValue,
  lightMode: lightModeValue,
  darkMode:  darkModeValue
})

const colors = [
  color("--red",       "#A8000F", "#A8000F"),
  color("--lightgray", "#E5E5E5", "#E5E5E5"),
  color("--darkgray",  "#828387", "#828387"),
  color("--white",     "#FEFEFE", "#010101"),
  color("--black",     "#010101", "#FEFEFE"),
]

const root = document.querySelector(":root")

const setColor = (color, mode) => root
  .style
  .setProperty(color.prop, color[mode])

const setColors = mode => colors
  .map(color => setColor(color, mode))

let isDarkMode = false

const toggleDarkMode = () => {
  isDarkMode = !isDarkMode
  isDarkMode ? setColors("darkMode") : setColors("lightMode")
}
