function buttonChange(id) {
    id.innerHTML = "Done!";
}

function changeAgain(id) {
    id.innerHTML = "Again?!";
}

document.getElementById("spinningBox").addEventListener("touchstart", spinDiv);

function spinDiv() {
    var box = document.getElementById("spinningBox");
    box.style.transition = "2s";
	box.style.transform = "rotate(90deg)";
}