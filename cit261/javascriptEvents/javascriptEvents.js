function buttonChange(id) {
    id.innerHTML = "Done!";
}

function changeAgain(id) {
    id.innerHTML = "Again?!";
}

document.getElementById("spinningBox").ontouchstart = spinDiv;

function spinDiv() {
    alert("Hello");
}