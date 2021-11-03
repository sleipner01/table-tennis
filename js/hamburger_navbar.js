bod = document.body.children;
menu = document.getElementById("dd-menu");
dd = document.getElementById("dropdown");
na = document.getElementsByTagName("nav")[0]


// Hides navbar dropdown
function hide() {
    dd.style.display = "none";
    menu.children[0].innerHTML = "menu";
    menu.style.backgroundColor = "";
    return 1
}

// Toggles navbar dropdown
function toggleDD() {
    if (dd.style.display == "none") {
        dd.style.display = "flex";
        menu.children[0].innerHTML = "close";
        menu.style.backgroundColor = "var(--white)";
    } else {
        hide();
    }
    return 1
}

// Ensures you can click anything other than the navbar, to close the nav dropdown
for (i=0; i<bod.length; i++) {
    if (bod[i] == na) {
        continue;
    }
    bod[i].addEventListener("click", function () {
        hide();
    });
}

menu.addEventListener("click", e => {
    toggleDD();
});

// Makes the navbar and especially the menu very visible on page load.
function menuBlink() {
    na.style.transition = "ease 1s";
    menu.style.transition = "ease 1s";
    na.style.backgroundColor = "var(--white)";
    menu.style.backgroundColor = "var(--white)";

    setTimeout(function() {
        na.style.backgroundColor = "";
    }, 2000);
    setTimeout(function() {
        menu.style.backgroundColor = "";
        na.style.transition = "";
    }, 3000);
    setTimeout(function() {
        menu.style.transition = "";
    }, 4000);
}

menuBlink();
