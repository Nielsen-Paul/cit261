
window.onload = function () {
    document.getElementById('campbells').style.display = none;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("campbells");
    ctx.drawImage(img, 10, 10);

    var canvas = document.getElementById('boxCanvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'blue';
    ctx.fillRect(100, 100, 100, 100);
};

