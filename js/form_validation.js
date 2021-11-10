function addErr(a) {
    const elem = document.createElement('p');
    elem.innerText = 'Invalid input';
    elem.className = "errtext";
    a.parentNode.insertBefore(elem, a);
}

document.getElementById("serveBTN").addEventListener("click", function(event) {
    event.preventDefault();

    let err = document.getElementsByClassName("errtext");
    for (var i = 0; i < err.length*3; i++) {
        if (i % err.length == 0) {
            i = 0;
        }
        let parent = err[i].parentNode.getElementsByClassName("errtext");
        for (var i = 0; i < parent.length; i++) {
            parent[i].remove();
        }
    }


    var check = [];
    var valid = true;

    let inps = document.getElementsByTagName("input");
    for (var i = 0; i < inps.length; i++) {
        check.push(inps[i]);
    }
    // Det er bare en select og så lenge den ikke er -1 er den good
    let sel = document.getElementsByTagName("select")[0];
    if (sel.value == "") {
        valid = false;

        addErr(sel);
    }

    let txt = document.getElementsByTagName("textarea");
    for (var i = 0; i < txt.length; i++) {
        check.push(txt[i]);
    }

    for (var i = 0; i < check.length; i++) {
        if (check[i].checkValidity() != true && check[i].hasAttribute('required') == true) {
            valid = false;

            addErr(check[i]);
        }
    }

    if (valid) {
        alert('Form has been successfully sent');
        location.reload();
    }
});
