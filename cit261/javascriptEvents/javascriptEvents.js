function buttonChange(id) {
    id.innerHTML = "Done!";
}

function changeAgain(id) {
    id.innerHTML = "Again?!";
}

var box = document.getElementById("spinningBox");
box.addEventListener("click", spinDiv);

function spinDiv() {
    var box = document.getElementById("spinningBox");
    box.style.transition = "2s";
	box.style.transform = "rotate(90deg)";
}