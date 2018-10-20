
var nameBttn = document.getElementById('name');
var clear = document.getElementById('clear');

function printName() {
    localStorage.setItem('name', 'Paul');
    document.getElementById('printName').innerHTML = localStorage.getItem('name');
}

function printBirthMonth() {
    var birthMonth = document.getElementById('birthMonth').value;
    localStorage.setItem('birthMonth', birthMonth);
    document.getElementById('printBirthMonth').innerHTML = localStorage.getItem('birthMonth');
}

document.getElementById('localName').innerHTML = localStorage.getItem('name');
document.getElementById('localMonth').innerHTML = localStorage.getItem('birthMonth');

function stringToJSON() {
    var userString = document.getElementById('input').value;

    var jsonObj = JSON.parse(userString);

    localStorage.setItem('jsonName', jsonObj.name);
    localStorage.setItem('jsonBirthMonth', jsonObj.birthMonth);
    localStorage.setItem('jsonColor', jsonObj.color);

    document.getElementById('printInfo').innerHTML = 
        localStorage.getItem('jsonName') + "'s birth month is " + localStorage.getItem('jsonBirthMonth') 
        + " and favorite color is " + localStorage.getItem('jsonColor')  + ".";
}
    
nameBttn.addEventListener('click', printName);
