
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

