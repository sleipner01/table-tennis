function hideModal() {
    // console.log("hidden")
    modalbg.style.display = "none";
    modal.style.display = "none";
}

function showModal(title="Training info", paragraph="lorem ipsum motherfucker dolor amet.", buttonText="cancel") {
    // console.log("shown")
    modal.style.display = "block";
    modalbg.style.display = "block";
    modal.getElementsByTagName("h1")[0].innerHTML = title;
    modal.getElementsByTagName("p")[0].innerHTML = paragraph;
    modal.getElementsByTagName("button")[0].innerHTML = buttonText;
}


modalbg = document.getElementById("modalbg");
modal = document.getElementById("modal");

modalbg.addEventListener("click", hideModal);
// showModal()

function updateEventModals() {
    // arr = Array.prototype.slice.call( document.getElementsByClassName("calendarEvent") );
    arr = document.getElementsByClassName("calendarEvent");

    // arr.forEach((i) => {
    for (i = 0; i < arr.length; i++) {
        // console.log("found event")
        title = arr[i].innerHTML;
        if (title == "Training") {
            arr[i].addEventListener("click", function() { showModal(title, "Training from 9-5, way to make a living", "Ait ill be there.");});
        } else if (title == "Match") {
            arr[i].addEventListener("click", function() { showModal(title, "Match versus NTNUI quidditch, this should be an easy win", "Bet");});
        } else if (title == "Tournament") {
            arr[i].addEventListener("click", function() { showModal(title, "NTNUI Tournament vs Online and Abakus bordtennis teams", "okay, thanks");});
        }
    }
}
