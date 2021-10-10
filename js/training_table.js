const events = [
  {name: "Training", date: "1/10/2021", color: "green"},
  {name: "Training", date: "8/10/2021", color: "green"},
  {name: "Match", date: "5/10/2021", color: "orange"},
  {name: "Training", date: "15/10/2021", color: "green"},
  {name: "Match", date: "5/20/2021", color: "orange"},
  {name: "Training", date: "22/10/2021", color: "green"},
  {name: "Training", date: "29/10/2021", color: "green"},
  {name: "Tournament", date: "30/10/2021", color: "purple"},
  {name: "Training", date: "5/11/2021", color: "green"},
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

const dateStrToArr = str => str.split("/",3);
const dateArrToObj = arr => ({day: arr[0], month: arr[1], year: arr[2]});
const dateStrToObj = str => dateArrToObj(dateStrToArr(str));
const dateObjToStr = obj => obj.day + "/" + obj.month + "/" + obj.year;

let displayedMonth = "/10/2021";

const color = date => date.month === dateStrToObj(displayedMonth).month ?
  "var(--white)" : "var(--lightgray)";

const htmlDay = date => "<div class='calendarDayNum'>" + date.day + "</div>";

const isEventDate = (Event, dateObj) => Event.date === dateObjToStr(dateObj);

const htmlEvent = Event => 
  "<div class='calendarEvent' style='background-color:" + Event.color + ";'>" +
    Event.name +
  "</div>";

const htmlEvents = dateObj => events
  .filter(Event => isEventDate(Event, dateObj))
  .map(htmlEvent)
  .join("");

const htmlCalendarDay = dateObj =>
  "<div class='calendarDay' style='background-color:" + color(dateObj) + ";'>" + 
    htmlDay(dateObj) +
    htmlEvents(dateObj) +
  "</div>";

let firstDisplayedDate = "27/9/2021"

const dateAfterDays = (dateObj, days) => {
  let day = parseInt(dateObj.day); 
  let month = parseInt(dateObj.month); 
  let year = parseInt(dateObj.year); 
  for (let i = 0; i < days; i++) {
    day++
    if (day > months(year)[month-1].days) {
      month++;
      day = 1;
    }
    if (month > 12) {
      year++;
      month = 1;
    }
  }
  return {day: String(day), month: String(month), year: String(year)};
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
  const firstDisplayedDateObj = dateStrToObj(firstDisplayedDate);
  calendar.innerHTML = 
    htmlCalendarWeekdays() +
    htmlCalendarDays(firstDisplayedDateObj, days);

  const month = document.getElementById("month");
  month.innerHTML = months(2021)[parseInt(dateStrToObj(displayedMonth).month)-1].name;
  
}
