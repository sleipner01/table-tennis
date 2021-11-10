document.getElementById("serveBTN").addEventListener("click", function(event) {
    event.preventDefault();

    let err = document.getElementsByClassName("errtext")
    for (var i = 0; i < err.length; i++) {
        // console.log(err[i])
        // err[i].remove()
        let parent = err[i].parentNode.getElementsByClassName("errtext");
        for (var i = 0; i < parent.length; i++) {
            parent[i].removeChild(parent[i])
        }
    }

    var check = new Array();
    var valid = true

    let inps = document.getElementsByTagName("input")
    for (var i = 0; i < inps.length; i++) {
        check.push(inps[i]);
    }
    // Det er bare en select og så lenge den ikke er -1 er den good
    let sel = document.getElementsByTagName("select")[0]
    if (sel.value == -1) {
        valid = false
    }

    let txt = document.getElementsByTagName("textarea")
    for (var i = 0; i < txt.length; i++) {
        check.push(txt[i]);
    }

    for (var i = 0; i < check.length; i++) {
        if (check[i].checkValidity() != true && check[i].hasAttribute('required') == true) {
            valid = false

            const elem = document.createElement('p');
            elem.innerText = 'Invalid input';
            elem.className = "errtext"
            check[i].parentNode.parentNode.insertBefore(elem, check[i].parentNode);
        }
        // console.log(check[i])
    }

    if (valid == true) {
        // console.log(check)
        alert('Form has been successfully sent');
        location.reload();
    }
});
