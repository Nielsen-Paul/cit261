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
}

function spinBox() {
    var spinningBox = document.getElementById("spinningBox");
    spinningBox.style.transition = "2s";
    spinningBox.style.transform = "rotate(245deg)";
}

function doNotMove() {
    document.getElementById("doNotMove").innerHTML = "Rebel!!!"
}