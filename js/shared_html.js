//The relative paths differ
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
    <a id="intro-to-table-tennis" href="${relativePath}bordtennis/intro-to-table-tennis/">Intro to table tennis</a>
    <a id="regular-training" href="${relativePath}bordtennis/regular-training/">Regular training</a>
    <a id="social-gatherings" href="${relativePath}bordtennis/social-gatherings/">Social gatherings</a>
    <a id="contact" href="${relativePath}bordtennis/contact/">Contact</a>
  </div>`;

const footer = relativePath => `
  <div class="width">
    <div class="split">
      <div>
        <a href="${relativePath}bordtennis/intro-to-table-tennis/" target="_blank">Intro to table tennis</a>
        <a href="${relativePath}bordtennis/regular-training/" target="_blank">Regular training</a>
        <a href="${relativePath}bordtennis/social-gatherings/" target="_blank">Social gatherings</a>
        <p>
          &copy; NTNUI Table-tennis gang
        </p>
      </div>
      <button onclick="toggleDarkMode()" id="darkModeBtn" class="material-icons">dark_mode</button>
      <div>
        <a href="${relativePath}bordtennis/contact/" target="_blank">Contact</a>
        <a href="mailto:bordtennis@ntnui.no" target="_blank">E-mail: NTNUI Table tennis</a>
        <a href="mailto:magnueb@stud.ntnu.no" target="_blank">E-mail: Magnus (website host)</a>
        <a href="tel:+47116123" target="_blank">Phone nr.: 116 123</a>
      </div>
    </div>
  </div>`;

const urlArr = url => url.split('/');

const directoriesAmount = url => urlArr(url).length - urlArr(url).indexOf("bordtennis") - 1;

const relativePath = url => "../".repeat(directoriesAmount(url));

const directoryName = url => urlArr(url)[urlArr(url).length - 2];

function renderElements() {
  const url = window.location.href;

  const navEl = document.getElementById("nav");
  navEl.innerHTML = nav(relativePath(url));

  const footerEl = document.getElementById("footer");
  footerEl.innerHTML = footer(relativePath(url));

  //Sets the active page in drop down menu.
  const active = document.getElementById(directoryName(url));
  if (active) active.className = "active";
}
renderElements();
