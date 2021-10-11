const dateObj = (day,month,year) => ({day: day, month: month, year: year});

const events = [
  {name: "Training", date: dateObj(1,10,2021), color: "green"},
  {name: "Training", date: dateObj(8,10,2021), color: "green"},
  {name: "Match", date: dateObj(8,10,2021), color: "orange"},
  {name: "Match", date: dateObj(5,10,2021), color: "orange"},
];

const months = year => [
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

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const htmlCalendarWeekday = weekday =>
  "<div class='calendarWeekday'>" +
    weekday +
  "</div>";

const htmlCalendarWeekdays = () => weekdays
  .map(htmlCalendarWeekday)
  .join("");

const color = date => date.month === displayedMonth() ?
  "var(--white)" : "var(--lightgray)";

const htmlDay = date => "<div class='calendarDayNum'>" + date.day + "</div>";

const isEventDate = (Event, date) =>
  Event.date.day === date.day &&
  Event.date.month === date.month &&
  Event.date.year === date.year;

const htmlEvent = Event => 
  "<div class='calendarEvent' style='background-color:" + Event.color + ";'>" +
    Event.name +
  "</div>";

const htmlEvents = date => events
  .filter(Event => isEventDate(Event, date))
  .map(htmlEvent)
  .join("");

const htmlCalendarDay = date =>
  "<div class='calendarDay' style='background-color:" + color(date) + ";'>" + 
    htmlDay(date) +
    htmlEvents(date) +
  "</div>";

let firstDisplayedDate = dateObj(27,9,2021);
const displayedMonth = () => dateAfterDays(firstDisplayedDate, 6).month;

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

const calendarDatesFrom = (from, days) => {
  const result = []
  for (let i = 0; i < days; i++) {
    result.push(dateAfterDays(from, i));
  }
  return result;
}

const htmlCalendarDays = (from, days) => calendarDatesFrom(from, days)
  .map(htmlCalendarDay)
  .join("");

const renderCalendar = days => {
  calendar = document.getElementById("calendar");
  calendar.innerHTML = 
    htmlCalendarWeekdays() +
    htmlCalendarDays(firstDisplayedDate, days);

  const month = document.getElementById("month");
  month.innerHTML = months(2021)[displayedMonth() - 1].name;
}

const increaseWeeks = (render = false) => {
  firstDisplayedDate = dateAfterDays(firstDisplayedDate, 7);
  if (render) renderCalendar(7);
}

const nextMonth = (inc = 1, render = false) => {
  firstDisplayedDate = 
    inc < 0 ? dateAfterDays(firstDisplayedDate, -7 * 7) :
              firstDisplayedDate;

  const oldMonth = displayedMonth();
  while (oldMonth === displayedMonth()) increaseWeeks();
  if (render) {
    daysRendered = dateAfterDays(firstDisplayedDate, 35).month === displayedMonth() ? 42 : 35;
    renderCalendar(daysRendered);
  }
}


