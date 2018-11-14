function buttonChange(id) {
    id.innerHTML = "Done!";
}

function changeAgain(id) {
    id.innerHTML = "Again?!";
}

document.getElementById("spinningBox").addEventListener("touchstart", spinDiv);

function spinDiv() {
    alert("Hello");
}