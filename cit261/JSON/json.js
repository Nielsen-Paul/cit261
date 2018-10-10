


function createPlayer() {

    var player = { name: 'Tom Brady', team: 'Patriots', number: 12 };

    var playerObjToString = JSON.stringify(player);

    document.getElementById('printPlayer').innerHTML = playerObjToString;

}

