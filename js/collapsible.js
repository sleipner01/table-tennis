// Script to animate collapsibles dropdown

// Getting collapsibles
var collapsibles = document.getElementsByClassName("collapsible");

// Loop trough all and give them eventlisteners
for(let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.classList.contains('display-none')){
            content.classList.remove('display-none');
        } else {
            content.classList.add('display-none');
        } 
    });
  }