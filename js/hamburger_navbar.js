menu = document.getElementById("dd-menu");
dd = document.getElementById("dropdown");

menu.addEventListener("click", function () {
    if (dd.style.display == "none") {
        dd.style.display = "flex";
        menu.children[0].innerHTML = "close";
        menu.style.backgroundColor = "var(--white)";
    } else {
        dd.style.display = "none";
        menu.children[0].innerHTML = "menu";
        menu.style.backgroundColor = "";
    }
});
