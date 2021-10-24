const dateObj = (day,month,year) => ({day: day, month: month, year: year});

const d = new Date();
const currentDate = dateObj(d.getDate(), d.getMonth()+1, d.getFullYear())

let firstDisplayedDate = dateObj(27,9,2021); //Gets set to current month's first displayed date.

const events = [
  {
    id: "1",
    name: "Training", 
    date: dateObj(1,10,2021),
    color: "green",
    info: "14:00-16:00\nNormal training session", 
    buttonText: "I'll be there."
  },
  {
    id: "2",
    name: "Training",
    date: dateObj(8,10,2021),
    color: "green",
    info: "14:00-14:30\nShort session before match.", 
    buttonText: "I'll be there."
  },
  {
   id: "3",
   name: "Match",
   date: dateObj(8,10,2021),
   color: "orange",
   info: "14:45-16:00\nMatch: Sander vs Ole.", 
   buttonText: "Ok"
  },
  {
   id: "4",
   name: "Match",
   date: dateObj(5,10,2021),
   color: "orange",
   info: "14:00-15:15\nMatch: Magnus vs Li.", 
   buttonText: "Ok"
  },
  {
   id: "5",
   name: "Tournament",
   date: dateObj(6,11,2021),
   color: "purple",
   info: "09:00-15:00\nTournament held in ...", 
   buttonText: "Sign up"
  },
];

const months = (year = 2021) => [
  {name: "January", days: 31}, {name: "February", days: isLeapYear(year) ? 29 : 28},
  {name: "March", days: 31}, {name: "April", days: 30},
  {name: "May", days: 31}, {name: "June", days: 30},
  {name: "July", days: 31}, {name: "August", days: 31},
  {name: "September", days: 30}, {name: "October", days: 31},
  {name: "November", days: 30}, {name: "December", days: 31}
];

const isLeapYear = year =>
  year % 400 === 0 ? true  :
  year % 100 === 0 ? false :
  year % 4   === 0 ? true  :
                     false;

const dateAfterDays = (date, days) => {
  let day = date.day;
  let month = date.month;
  let year = date.year;
  const inc = days < 0 ? -1 : 1;
  for (let i = 0; i < days*inc; i++) {
    day += inc;
    if (day > months(year)[month-1].days) {
      month++;
      day = 1;
      if (month > 12) {
        year++;
        month = 1;
      }
    }
    else if (day < 1) {
      month--;
      if (month < 1) {
        year--;
        month = 12;
      }
      day = months(year)[month-1].days;
    }
  }
  return dateObj(day,month,year);
}

//Based on the last date on the first row
const displayedMonth = () => dateAfterDays(firstDisplayedDate, 6).month;
const displayedMonthName = () => months()[displayedMonth() - 1].name;
const displayedYear = () => dateAfterDays(firstDisplayedDate, 6).year;
const displayedMonthYear = () => ({month: displayedMonth(), year: displayedYear()});

//Weekday elements
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const htmlCalendarWeekday = weekday => `
  <div class="calendarWeekday">
    ${weekday}
  </div>`;

const htmlCalendarWeekdays = () => weekdays
  .map(htmlCalendarWeekday)
  .join("");

//Date elements
const color = date => date.month === displayedMonth() ?
  "var(--white)" : "var(--lightgray)";

const htmlDay = date => `<div class="calendarDayNum">${date.day}</div>`;

const htmlEvent = evt => `
  <div onclick="renderModalContent('${evt.id}')" class="calendarEvent" style="background-color:${evt.color};">
    ${evt.name}
  </div>`;

const isSameDate = (date1, date2) =>
  date1.day === date2.day &&
  date1.month === date2.month &&
  date1.year === date2.year;

const htmlEvents = date => events
  .filter(evt => isSameDate(evt.date, date))
  .map(htmlEvent)
  .join("");

const htmlCalendarDay = (date, i) => `
  <div class="calendarDay" style="order: ${i + 1}; background-color: ${color(date)};">
    ${htmlDay(date)}
    ${htmlEvents(date)}
  </div>`;

const calendarDatesFrom = (from, days) => 
  days === 1 ? [from] : [...calendarDatesFrom(from, days-1), dateAfterDays(from, days-1)];

const htmlCalendarDays = (from, days) => calendarDatesFrom(from, days)
  .map(htmlCalendarDay)
  .join("");

const daysRenderedInMonth = from => {
  let i = 1;
  while (dateAfterDays(from, i*7).month === displayedMonth())
    i++;

  return i*7;
}

//Monthly view: renderCalendar(daysRenderedInMonth(firstDisplayedDate))
//Weekly view:  renderCalendar(7)
const renderCalendar = days => {
  const calendarEl = document.getElementById("calendar");
  calendarEl.innerHTML =
    htmlCalendarWeekdays() +
    htmlCalendarDays(firstDisplayedDate, days);

  const monthYearEl = document.getElementById("monthYear");
  const monthYear = displayedMonthName() + " " + displayedYear();
  monthYearEl.innerHTML = monthYear;
}


const increaseWeeks = (inc = 1, render = false) => {
  firstDisplayedDate = dateAfterDays(firstDisplayedDate, 7*inc);
  if (render)
    renderCalendar(7);
}

//Next month:     increaseMonth(positive number)
//Previous month: increaseMonth(negative number)
const increaseMonth = (inc = 1, render = false) => {
  if (inc < 0)
    firstDisplayedDate = dateAfterDays(firstDisplayedDate, -7 * 7);

  const oldMonth = displayedMonth();
  while (oldMonth === displayedMonth())
    increaseWeeks();

  if (render)
    renderCalendar(daysRenderedInMonth(firstDisplayedDate));
}

const isMonthAfter = (date1, date2) => {
  if (date1.year === date2.year)
    return date1.month > date2.month;
  
  return date1.year > date2.year;
}

const isMonthSame = (date1, date2) => 
  date1.year === date2.year &&
  date1.month === date2.month;

const setFirstDisplayedDate = () => {
  const inc = isMonthAfter(currentDate, displayedMonthYear()) ? 1 : -1;

  while (!isMonthSame(currentDate, displayedMonthYear()))
    increaseMonth(inc);
}
setFirstDisplayedDate();

//Modal
const modalbgEl = document.getElementById("modalbg");
const modalEl = document.getElementById("modal");

let isModalDisplayed = false;

const toggleModalDisplay = () => {
  isModalDisplayed = !isModalDisplayed;
  modalbgEl.style.display = isModalDisplayed ? "block" : "none";
  modalEl.style.display = isModalDisplayed ? "block" : "none"; }

const modalContent = eventModal => `
  <h1>${eventModal.name}</h1>
  <p>${eventModal.info}</p>
  <div class="split">
    <button onclick="toggleModalDisplay()">
      ${eventModal.buttonText}
    </button>
    <button onclick="toggleModalDisplay()">
      Back
    </button>`;

const renderModalContent = id => {
  toggleModalDisplay();
  const modalEvent = events.find(evt => evt.id === id);
  modalEl.innerHTML = modalContent(modalEvent);
}


