bod = document.body.children;
menu = document.getElementById("dd-menu");
dd = document.getElementById("dropdown");

function hide() {
    dd.style.display = "none";
    menu.children[0].innerHTML = "menu";
    menu.style.backgroundColor = "";
    return 1
}

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

for (i=0; i<bod.length; i++) {
    if (bod[i] == document.getElementsByTagName("nav")[0]) {
        // console.log("foudnNav")
        continue;
    }
    bod[i].addEventListener("click", function () {
        hide();
    });
    // console.log(bod[i])
}

menu.addEventListener("click", e => {
    toggleDD();
});
