
function createPlayer() {

    var player = { name: 'Tom Brady', team: 'Patriots', number: 12 };

    var playerObjToString = JSON.stringify(player);

    document.getElementById('printPlayer').innerHTML = playerObjToString;

}

function stringToJSON() {
    var userString = document.getElementById('input').value;

    var jsonObj = JSON.parse(userString);

    document.getElementById('printPerson').innerHTML = 
        jsonObj.firstName + " " + jsonObj.lastName + " is " + jsonObj.age + " years old."
}

