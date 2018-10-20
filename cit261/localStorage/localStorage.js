
var nameForm = document.getElementById('nameForm');
var name = document.getElementById('name');

nameForm.onclick = function () {

    localStorage.setItem('name', name.value);
    document.getElementById('printName') = localStorage.getItem('name');
    
};