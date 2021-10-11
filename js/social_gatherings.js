// Year and information control
const previousYearEl = document.getElementById('previousYear');
    previousYearEl.addEventListener('click', yearChange);
const nextYearEl = document.getElementById('nextYear');
    nextYearEl.addEventListener('click', yearChange);
var currentYearEl = document.getElementById('currentYear');
    currentYearEl.innerText = new Date().getFullYear();
var galleryEl = document.getElementById('social_gatherings_gallery');


const dateObj = (day,month,year) => ({day: day, month: month, year: year});

const social_events = [
    {eventType: "gathering", date: dateObj(1,10,2021), name: "Field trip to Moskva", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, quisquam ipsum officiis mollitia repellat at sequi, odit magnam, saepe recusandae praesentium repudiandae. Illo nihil et culpa totam consequuntur perferendis.", pictureURL: "../../bordtennis/media/gathering-images/magnus_domination.jpg"},
    {eventType: "tournament", date: dateObj(1,10,2021), name: "Kiev", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, quisquam ipsum officiis mollitia repellat at sequi, odit magnam, saepe recusandae praesentium repudiandae. Illo nihil et culpa totam consequuntur perferendis.", pictureURL: "../../bordtennis/media/gathering-images/equipment.jpg"},
    {eventType: "gathering", date: dateObj(1,10,2021), name: "Pong n' pizza", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, quisquam ipsum officiis mollitia repellat at sequi, odit magnam, saepe recusandae praesentium repudiandae. Illo nihil et culpa totam consequuntur perferendis.", pictureURL: "../../bordtennis/media/gathering-images/tabletennis_table.jpg"},
  ];


function yearChange(e) {
    if(e.target.id == 'nextYear') {
        currentYearEl.innerText = Number(currentYearEl.innerText, 10) + 1;
    }
    else if(e.target.id == 'previousYear') {
        currentYearEl.innerText = Number(currentYearEl.innerText) - 1;
    }
}






// Script to animate collapsibles dropdown
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', () => {
        const collapsibleContent = button.nextElementSibling;

        button.classList.toggle('collapsible-active');

        if(button.classList.contains('collapsible-active')) {
            collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
        }
        else {
            collapsibleContent.style.maxHeight = 0;
        }
    })
});