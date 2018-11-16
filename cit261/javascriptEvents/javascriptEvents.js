function buttonChange(id) {
    id.innerHTML = "Done!";
}

function changeAgain(id) {
    id.innerHTML = "Again?!";
}

window.onload=function(){
    var box = document.getElementById("spinningBox");
    box.addEventListener("touchstart", spinBox);
    document.getElementById("doNotMove").ontouchmove = doNotMove;
    var leap = document.getElementById("leap");
    leap.addEventListener("click", leaper);
    var frog = document.getElementById("frog");
    frog.addEventListener("click", frogger);
}

function spinBox() {
    var spinningBox = document.getElementById("spinningBox");
    spinningBox.style.transition = "2s";
    spinningBox.style.transform = "rotate(245deg)";
}

function doNotMove() {
    document.getElementById("doNotMove").innerHTML = "Rebel!!!"
}

function leaper() {
    var parent = document.getElementById("leapFrog");
    var child = document.getElementById("leap");
    parent.removeChild(child);

    var button = document.createElement("button");
    var value = document.createTextNode("Leap");

    button.appendChild(value);
    button.addEventListener("click", leaper);
    parent.appendChild(button);
}

function froger() {
    var parent = document.getElementById("leapFrog");
    var child = document.getElementById("frog");
    parent.removeChild(child);

    var button = document.createElement("button");
    var value = document.createTextNode("Frog");

    button.appendChild(value);
    button.addEventListener("click", froger);
    parent.appendChild(button);
}