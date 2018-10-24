
function deleteMe() {
    var parent = document.getElementById("div1");
    var child = document.getElementById("button1");
    parent.removeChild(child);
}

function createSibling() {
    var button = document.createElement("button");
    var value = document.createTextNode("I'm New")

    button.appendChild(value);
    document.body.appendChild(button);
}

function leaper() {

    var parent2 = document.getElementById("div3");
    var child = document.getElementById("leap");
    parent.removeChild(child);

    //var button = document.createElement("button");
    //var value = document.createTextNode("Leap")

    //button.appendChild(value);
    //document.body.appendChilde(button);
}

function frogger() {

    var parent3 = document.getElementById("div3");
    var child = document.getElementById("frog");
    parent.removeChild(child);

    //var button = document.createElement("button");
    //var value = document.createTextNode("Frog")

    //button.appendChild(value);
    //document.body.appendChild(button);
}