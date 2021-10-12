// Make picture scroll slower than the rest of the screen
document.getElementsByTagName('body')[0].onscroll = function slowScroll() {  
    const target = document.getElementById('gallery');
    const factor = 0.5;
    const xValue = 'center';
    var scrollToTop = document.scrollingElement.scrollTop;
    var yValue = scrollToTop * factor;
    target.style.backgroundPosition = xValue + " " + yValue + "px";
  }