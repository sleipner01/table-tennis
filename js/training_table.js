const events = [
  {name: "Training", date: "1/10/2021", color: "green"},
  {name: "Match", date: "3/10/2021", color: "orange"},
  {name: "Training", date: "3/10/2021", color: "green"},
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

const dateStrToArr = str => str.split("/",3);
const dateArrToObj = arr => ({day: arr[0], month: arr[1], year: arr[2]});
const dateStrToObj = str => dateArrToObj(dateStrToArr(str));
const dateObjToStr = obj => obj.day + "/" + obj.month + "/" + obj.year;

let displayedMonth = "/10/2021";

const color = date => date.month === dateStrToObj(displayedMonth).month ?
  "var(--white)" : "var(--lightgray)";

const htmlDay = date => "<div class='calendarDay'>" + date.day + "</div>";

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
  "<td style='background-color:" + color(dateObj) + ";'>" + 
    htmlDay(dateObj) +
    htmlEvents(dateObj) +
  "</td>";

const renderCalendar = () => {
  calendar = document.getElementById("calendar");
  calendar.innerHTML = "<tr>" + htmlCalendarDay(dateStrToObj("3/10/2021")) + "</tr>";
}
