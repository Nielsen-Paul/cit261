
function deleteMe() {
    var parent = document.getElementById("div1");
    var child = document.getElementById("button1");
    parent.removeChild(child);
}

function createSibling() {
    var button = document.createElement("button");
    var value = document.createTextNode("I'm New")

    button.appendChild(value);
    document.body.insertBefore(button);
}