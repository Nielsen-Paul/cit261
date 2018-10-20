
var nameBttn = document.getElementById('name');

function printName() {
    localStorage.setItem('name', 'Paul');
    document.getElementById('printName').innerHTML = localStorage.getItem('name');
}

function printBirthMonth() {
    var birthMonth = getElementById('birthMonth');
    localStorage.setItem('birthMonth', birthMonth.value);
    document.getElementById('printBirthMonth').innerHTML = localStorage.getItem('birthMonth');
}

nameBttn.addEventListener('click', printName);