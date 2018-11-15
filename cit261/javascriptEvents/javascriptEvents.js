function buttonChange(id) {
    id.innerHTML = "Done!";
}

function changeAgain(id) {
    id.innerHTML = "Again?!";
}

window.onload=function(){
    var box = document.getElementById("spinIt");
    box.addEventListener("click", spinBox);
}

function spinBox() {
    alert("Hello");
}