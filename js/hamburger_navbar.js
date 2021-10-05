menu = document.getElementById("dd-menu");
dd = document.getElementById("dropdown");

menu.addEventListener("click" function() {
    if dd.style.display == "none" {
        dd.style.display = "flex";
        menu.innerHTML = "close";
        menu.style.backgroundColor = "#fefefe";
    } else {
        dd.style.display = "none";
        menu.innerHTML = "menu";
        menu.style.backgroundColor = "";
    }
});
