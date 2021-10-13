//This info should maybe be in the events array so that we could have individualized modal info.
const eventsModal = [
  {name: "Training", paragraph: "Training from 9-5, way to make a living", 
   buttonText: "Ait ill be there."},
  {name: "Match", paragraph: "Match versus NTNUI quidditch, this should be an easy win", 
   buttonText: "Bet"},
  {name: "Tournament", paragraph: "NTNUI Tournament vs Online and Abakus bordtennis teams",
   buttonText: "okay, thanks"},
];

const modalbgEl = document.getElementById("modalbg");
const modalEl = document.getElementById("modal");

let isModalDisplayed = false;

const toggleModalDisplay = () => {
  isModalDisplayed = !isModalDisplayed;
  modalbgEl.style.display = isModalDisplayed ? "block" : "none";
  modalEl.style.display = isModalDisplayed ? "block" : "none";
}

const modalContent = eventModal => `
  <h1>${eventModal.name}</h1>
  <p>${eventModal.paragraph}</p>
  <div class="split">
    <button onclick="toggleModalDisplay()">
      ${eventModal.buttonText}
    </button>
    <button onclick="toggleModalDisplay()">
      fuck, go back
    </button>`;

const renderModalContent = name => {
  toggleModalDisplay();
  const eventModal = eventsModal.find(Event => Event.name === name);
  modalEl.innerHTML = modalContent(eventModal);
}
