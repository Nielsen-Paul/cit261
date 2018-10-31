
window.onload = function () {
    document.getElementById('campbells').style.display = none;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("campbells");
    ctx.drawImage(img, 10, 10);

};

window.onload = function () {
    var canvas2 = document.getElementById('boxCanvas');
    var ctx2 = canvas2.getContext('2d');

    ctx2.fillStyle = 'blue';
    ctx2.fillRect(100, 100, 100, 100);

};

function moveBox() {
    var parent = document.getElementById("div4");
    var canvas3 = document.createElement("canvas");
    var ctx3 = canvas3.getContext('2d');

    ctx3.fillStyle = 'blue';
    ctx3.fillRect(100, 10, 100, 100);

    var canvas4 = document.getElementById("boxCanvas");

    parent.replaceChild(canvas3, canvas4);
}

