
var nameBttn = document.querySelector('name');

function printName() {
    localStorage.setItem('name', 'Paul');
    document.getElementById('printName').innerHTML = localStorage.getItem('name');
}

nameBttn.addEventListener('click', printName);