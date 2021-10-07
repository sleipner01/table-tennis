const events = [
  {name: "Training", date: "1/10/2021", color: "green"},
  {name: "Match", date: "3/10/2021", color: "orange"},
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

const range = (start, end) =>
  start === end ? [start] : [start, ...range(start+1, end)];

const dateStrToArr = str => str.split("/",3);
const dateArrToObj = arr => ({day: arr[0], month: arr[1], year: arr[2]});
const dateStrToObj = str => dateArrToObj(dateStrToArr(str));

let displayedMonth = "/11/2021";

