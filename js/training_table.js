const dateObj = (day,month,year) => ({day: day, month: month, year: year});

let firstDisplayedDate = dateObj(27,9,2021);

const events = [
  {name: "Training", date: dateObj(1,10,2021), color: "green"},
  {name: "Training", date: dateObj(8,10,2021), color: "green"},
  {name: "Match", date: dateObj(8,10,2021), color: "orange"},
  {name: "Match", date: dateObj(5,10,2021), color: "orange"},
  {name: "Tournament", date: dateObj(6,11,2021), color: "purple"},

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

const htmlEvent = Event => `
  <div onclick="renderModalContent('${Event.name}')" class="calendarEvent" style="background-color:${Event.color};">
    ${Event.name}
  </div>`;

const isSameDate = (Event, date) =>
  Event.day === date.day &&
  Event.month === date.month &&
  Event.year === date.year;

const htmlEvents = date => events
  .filter(Event => isSameDate(Event.date, date))
  .map(htmlEvent)
  .join("");

const htmlCalendarDay = (date, i) => `
  <div class="calendarDay" style="order: ${i + 1}; background-color: ${color(date)};">
    ${htmlDay(date)}
    ${htmlEvents(date)}
  </div>`;

const calendarDatesFrom = (from, days) => 
  days === 0 ? [from] : [...calendarDatesFrom(from, days-1), dateAfterDays(from, days)];

const htmlCalendarDays = (from, days) => calendarDatesFrom(from, days)
  .map(htmlCalendarDay)
  .join("");

const daysRenderedInMonth = from => {
  let i = 1;
  while (dateAfterDays(from, i*7).month === displayedMonth())
    i++;

  return i*7;
}

//Monthly view: renderCalendar(daysRenderedInMonth(firstDisplayedDate)
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
