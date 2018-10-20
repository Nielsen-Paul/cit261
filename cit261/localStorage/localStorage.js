
var nameBttn = document.getElementById('name');

function printName() {
    localStorage.setItem('name', 'Paul');
    document.getElementById('printName').innerHTML = localStorage.getItem('name');
}

function printBirthMonth() {
    var birthMonth = document.getElementById('birthMonth').value;
    localStorage.setItem('birthMonth', birthMonth);
    document.getElementById('printBirthMonth').innerHTML = localStorage.getItem('birthMonth');
}

nameBttn.addEventListener('click', printName);

document.getElementById('localName').innerHTML = localStorage.getItem('name');
document.getElementById('localMonth').innerHTML = localStorage.getItem('birthMonth');

function clear() {
    localStorage.removeItem('name');
    localStorage.removeItem('birthMonth');
}