
var nameForm = document.getElementById('nameForm');
var name = document.getElementById('name');

nameForm.onsubmit = function () {

    localStorage.setItem('name', name.value);
    document.getElementById('printName') = localStorage.getItem('name');
    
}