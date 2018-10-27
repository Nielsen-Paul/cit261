
function deleteMe() {
    var parent = document.getElementById("div1");
    var child = document.getElementById("button1");
    parent.removeChild(child);
}

function createSibling() {
    var parent = document.getElementById("div2");
    var button = document.createElement("button");
    var value = document.createTextNode("I'm New");
    var button2 = document.getElementById("button2");

    button.appendChild(value);
    parent.insertBefore(button, button2);
}

function leaper() {

    var parent2 = document.getElementById("div3");
    var child = document.getElementById("leap");
    parent2.removeChild(child);

    var button2 = document.createElement("button");
    var value2 = document.createTextNode("Leap");

    button2.appendChild(value2);
    document.body.appendChild(button2);

}

function frogger() {

    var parent3 = document.getElementById("div3");
    var child = document.getElementById("frog");
    parent3.removeChild(child);

    var button = document.createElement("button");
    var value = document.createTextNode("Frog")

    button.appendChild(value);
    document.body.appendChild(button);
}

function replaceMe() {
    var parent = document.getElementById("div4");
    var button = document.createElement("button");
    var value = document.createTextNode("I'm New");
    var button2 = document.getElementById("button4");

    button.appendChild(value);
    parent.replaceChild(button, button4);
}