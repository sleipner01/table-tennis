//The relative paths differ for each html file
const nav = relativePath => `
  <div>
    <a href="${relativePath}bordtennis/">
      <img src="${relativePath}bordtennis/media/logo.png" alt="Table-tennis logo">
    </a>
  </div>
  <div id="dd-menu">
    <span class="material-icons">menu</span>
  </div>
  <div id="dropdown" style="display: none;">
    <a href="${relativePath}bordtennis/intro-to-table-tennis/">Intro to table tennis</a>
    <a href="${relativePath}bordtennis/regular-training/">Regular training</a>
    <a href="${relativePath}bordtennis/social-gatherings/">Social gatherings</a>
    <a href="${relativePath}bordtennis/contact/">Contact</a>
  </div>`;

const footer = relativePath => `
  <div class="width">
    <div class="split">
      <div>
        <a href="${relativePath}bordtennis/intro-to-table-tennis/">Intro to table tennis</a>
        <a href="${relativePath}bordtennis/regular-training/">Regular training</a>
        <a href="${relativePath}bordtennis/social-gatherings/">Social gatherings</a>
        <p>
          &copy; NTNUI Table-tennis gang
        </p>
      </div>
      <button onclick="toggleDarkMode()" id="darkModeBtn" class="material-icons">dark_mode</button>
      <div>
        <a href="${relativePath}bordtennis/contact/">Contact</a>
        <a href="mailto:bordtennis@ntnui.no">E-mail: NTNUI Table tennis</a>
        <a href="mailto:magnueb@stud.ntnu.no">E-mail: Magnus (website host)</a>
        <a href="tel:+47116123">Phone nr.: 116 123</a>
      </div>
    </div>
  </div>`;

function renderElements(relativePath) {
  const navEl = document.getElementById("nav");
  navEl.innerHTML = nav(relativePath);

  const footerEl = document.getElementById("footer");
  footerEl.innerHTML = footer(relativePath);
}
