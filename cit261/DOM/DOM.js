
function deleteMe() {
    var parent = document.getElementById("div1");
    var child = document.getElementById("button1");
    parent.removeChild(child);
}

function createSibling() {
    var button = document.createElement("button");
    button.value("Change me");

    var element = document.getElementById("div1");
    var child = document.getElementById("button2");
    element.insertBefore(button, child);
}