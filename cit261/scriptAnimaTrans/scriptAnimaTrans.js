
function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (random == 200) {
            clearInterval(id);
        } else {
            var min = 0;
            var max = 250;
            var random = Math.floor(Math.random() * (+max - +min)) + +min;

            var min2 = 0;
            var max2 = 250;
            var random2 = Math.floor(Math.random() * (+max2 - +min2)) + +min2;

            elem.style.top = random + 'px';
            elem.style.left = random2 + 'px';
        }
    }
}

function transition() {
    document.getElementById("shapeDiv").style.WebkitTransition = "all 2s";
    document.getElementById("shapeDiv").style.transition = "all 2s";
}