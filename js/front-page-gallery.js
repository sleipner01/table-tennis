const galleryEl = document.getElementById('gallery');



// Make picture scroll slower than the rest of the screen
document.getElementsByTagName('body')[0].onscroll = function slowScroll() {  
    const factor = 0.5;
    const xValue = 'center';
    var scrollToTop = document.scrollingElement.scrollTop;
    var yValue = scrollToTop * factor;
    galleryEl.style.backgroundPosition = xValue + " " + yValue + "px";
}



// Change home page picture every other second
const pictures = ['equipment.jpg', 'equipment2.jpg', 'man1-cropped.jpg', 'tabletennis_table_cropped.jpg'];
const path = '../bordtennis/media/home-images/';
const interval = 10; // Interval in seconds
var index = 0;
galleryEl.style.backgroundImage = 'url(' + path + pictures[0] + ')';



function changePicture() {

    galleryEl.style.backgroundImage = 'url(' + path + pictures[index] + ')';

    if(index == pictures.length - 1) {
        index = 0;
    }
    else {
        index++
    }

    preloadNextImage(path + pictures[index]);
}

function preloadNextImage(path) {
    let img=new Image();
    img.src=path;
}

window.onload = setInterval(changePicture, interval * 1000);