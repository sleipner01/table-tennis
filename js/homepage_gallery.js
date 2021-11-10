const galleryEl = document.getElementById('gallery');


// Change home page picture every other second
const pictures = ['equipment.jpg', 'equipment2.jpg', 'man1-cropped.jpg', 'tabletennis_table_cropped.jpg'];
const path = '../bordtennis/media/home-images/';
const interval = 10; // Interval in seconds
var index = 1; // Has to be 1 so the interval changes to next picture after set time has passed
galleryEl.style.backgroundImage = 'url(' + path + pictures[0] + ')';


// Hidden div to preload images
var hiddenDiv = document.createElement("div");
hiddenDiv.style.display = "none";
document.body.appendChild(hiddenDiv);

var img = new Image();

function changePicture() {
    galleryEl.style.backgroundImage = 'url(' + path + pictures[index] + ')';

    if(index == pictures.length - 1) {
        index = 0; // Loop and start on first picture
    }
    else {
        index++;
    }

    img = preloadNextImage(path + pictures[index]);
}

// Preloads next image by putting it in a hidden div, this will make for smooth gallery transitions on the first pass of the array
function preloadNextImage(path) {
    hiddenDiv.innerHTML = "";
    let img=new Image();
    img.src=path;
    hiddenDiv.appendChild(img);
}

window.onload = setInterval(changePicture, interval * 1000);
