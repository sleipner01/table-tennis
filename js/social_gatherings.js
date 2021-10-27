// BUG - sometimes, the scrollHeight wont work since the images aren't loaded


// Year and information control
const previousYearEl = document.getElementById('previousYear');
    previousYearEl.addEventListener('click', changeYear);
const nextYearEl = document.getElementById('nextYear');
    nextYearEl.addEventListener('click', changeYear);
const currentYearEl = document.getElementById('currentYear');
    currentYearEl.innerText = new Date().getFullYear();
const galleryEl = document.getElementById('social-gatherings-gallery');
const galleryContainerEl = document.getElementById('social-gatherings-gallery-container');



const dateObj = (day,month,year) => ({day: day, month: month, year: year});
// All social events has to be added here. The imgName attribute should only contain the file name + file type, and not the path
const social_events = [
    {eventType: "gathering", date: dateObj(7,07,2021), name: "Field trip to Moskva", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, quisquam ipsum officiis mollitia repellat at sequi, odit magnam, saepe recusandae praesentium repudiandae. Illo nihil et culpa totam consequuntur perferendis.", imgName: "magnus_domination.jpg"},
    {eventType: "tournament", date: dateObj(1,09,2021), name: "Kiev", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, quisquam ipsum officiis mollitia repellat at sequi, odit magnam, saepe recusandae praesentium repudiandae. Illo nihil et culpa totam consequuntur perferendis.", imgName: "equipment.jpg", opposingTeam: 'Kiev Table Tennis', score: '11,11'},
    {eventType: "gathering", date: dateObj(20,10,2021), name: "Pong n' pizza", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, quisquam ipsum officiis mollitia repellat at sequi, odit magnam, saepe recusandae praesentium repudiandae. Illo nihil et culpa totam consequuntur perferendis.", imgName: "tabletennis_table.jpg"},
    {eventType: "tournament", date: dateObj(20,03,2020), name: "North Korea", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, quisquam ipsum officiis mollitia repellat at sequi, odit magnam, saepe recusandae praesentium repudiandae. Illo nihil et culpa totam consequuntur perferendis.", imgName: "equipment.jpg", opposingTeam: 'NK PlingPong', score: '11,0'},
    {eventType: "gathering", date: dateObj(1,12,2020), name: "Pong n' code", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, quisquam ipsum officiis mollitia repellat at sequi, odit magnam, saepe recusandae praesentium repudiandae. Illo nihil et culpa totam consequuntur perferendis.", imgName: "tabletennis_table.jpg"},
    {eventType: "gathering", date: dateObj(10,05,2021), name: "Magnus beats all of his project partners", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, quisquam ipsum officiis mollitia repellat at sequi, odit magnam, saepe recusandae praesentium repudiandae. Illo nihil et culpa totam consequuntur perferendis.", imgName: "magnus_domination.jpg"}
];



function createCollapsibles() {
    // Check if an notice element is in the container
    if(document.getElementById('notice')) {
        galleryContainerEl.removeChild(document.getElementById('notice'));
    }
    
    for(let i = 0; i < social_events.length; i++) {
        if(social_events[i].date.year == Number(currentYearEl.innerText)) {
            // Create button
            let buttonEl = document.createElement('button');
            buttonEl.classList.add('collapsible');
            buttonEl.innerHTML = social_events[i].name;
            galleryEl.appendChild(buttonEl);


            // Create content wrapper
            let contentEl = document.createElement('div');
            contentEl.classList.add('module', 'collapsible-content');
                // Create element that devides the content wrapper in two, one left side, one right side
                let splitEl = document.createElement('div');
                splitEl.classList.add('split');
            contentEl.appendChild(splitEl);




            // Add stored information
            // Create left side div
            let leftDivEl = document.createElement('div');

                //Add the date
                let dateEl = document.createElement('p');
                dateEl.classList.add('social-gatherings-date');
                dateEl.innerText = 'Date: ' + social_events[i].date.day + '.' + social_events[i].date.month + '.' + social_events[i].date.year;

                // Add a title
                let titleEl = document.createElement('h3');
                titleEl.innerText = social_events[i].name;

                // Add the description
                let textEl = document.createElement('p');
                textEl.innerText = social_events[i].text;

            // Append them to the left div
            leftDivEl.appendChild(dateEl);
            leftDivEl.appendChild(titleEl);
            leftDivEl.appendChild(textEl);

            // Continue with layout if the event is "tournament"
            if(social_events[i].eventType == 'tournament') {
                buttonEl.innerHTML += ' | Tournament';

                let teamName = 'NTNUI';
                
                let resultContainerEl = document.createElement('table');

                let resultTeamsContainerEl = document.createElement('tr');
                let teamEl = document.createElement('td');
                teamEl.innerText = teamName;
                let opposingTeamEl = document.createElement('td');
                opposingTeamEl.innerText = social_events[i].opposingTeam;

                let resultScoresContainerEl = document.createElement('tr');
                let teamResultEl = document.createElement('td');
                teamResultEl.innerText = 'x';
                let dividerEl = document.createElement('td');
                dividerEl.innerHTML = '-';
                let opposingTeamScoreEl = document.createElement('td');
                opposingTeamScoreEl.innerText = 'x'; 

                resultTeamsContainerEl.appendChild(teamEl);
                resultTeamsContainerEl.appendChild(opposingTeamEl);

                resultScoresContainerEl.appendChild(teamResultEl);
                resultScoresContainerEl.appendChild(dividerEl);
                resultScoresContainerEl.appendChild(opposingTeamScoreEl);

                resultContainerEl.appendChild(resultTeamsContainerEl);
                resultContainerEl.appendChild(resultScoresContainerEl);

                leftDivEl.appendChild(resultContainerEl);
            }



            // Create right side div
            let rightDivEl = document.createElement('div');
            rightDivEl.classList.add('img-container');

                // Add an image
                let imgEl = document.createElement('img');
                imgEl.src = '../../bordtennis/media/gathering-images/' + social_events[i].imgName;
                imgEl.alt = 'Event picture';
                rightDivEl.appendChild(imgEl);



            // Add left and right div to divider
            splitEl.appendChild(leftDivEl);
            splitEl.appendChild(rightDivEl);



            // Last of all, add all of the content to the page
            galleryEl.appendChild(contentEl);
        }
    }
    if(document.getElementsByClassName('collapsible').length < 1) {
        notice = document.createElement('p');
        notice.id = 'notice';
        notice.innerText = 'There are no posted events from ' + currentYearEl.innerText;
        galleryContainerEl.appendChild(notice);
    }
}



function addEventListeners() {
    // Script to animate collapsibles dropdown, as well as giving them eventlisteners
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
}




function openFirstCollapsible() {
    // As long as there is a collapsible element, run click() event
    if(document.getElementsByClassName('collapsible')[0] != undefined) {
        document.getElementsByClassName('collapsible')[0].click();
    }
}



// Browse through the years of events
function changeYear(e) {
    if(e.target.id == 'nextYear') {
        currentYearEl.innerText = Number(currentYearEl.innerText, 10) + 1;

    }
    else if(e.target.id == 'previousYear') {
        currentYearEl.innerText = Number(currentYearEl.innerText) - 1;
    }
    galleryEl.innerHTML = '';
    createCollapsibles();
    addEventListeners();
    openFirstCollapsible();
}



// First time script is run, perform functions
// Create collapsibles
createCollapsibles();
//Add Eventlisteners
addEventListeners();
// Open first collapsible once the document is loaded
window.addEventListener('load', openFirstCollapsible);