
const player = {
    name: 'Tom Brady',
    team: 'Patriots',
    number: 12
}

function createPlayer() {

    const playerObjToString = JSON.stringify(player);

    document.getElementById('printPlayer').innerHTML = myJSON;
    
}

