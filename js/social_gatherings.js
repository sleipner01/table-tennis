// Year Control
const previousYear = document.getElementById('previousYear');
previousYear.addEventListener('click', yearChange);
const nextYear = document.getElementById('nextYear');
nextYear.addEventListener('click', yearChange);
var currentYear = document.getElementById('currentYear');
currentYear.innerText = new Date().getFullYear();

function yearChange(e) {
    if(e.target.id == 'nextYear') {
        currentYear.innerText = Number(currentYear.innerText, 10) + 1;
    }
    else if(e.target.id == 'previousYear') {
        currentYear.innerText = Number(currentYear.innerText) - 1;
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