
var nameForm = document.querySelector('nameForm');
var name = document.getElementById('name');
var data = localStorage.getItem('name');

nameForm.addEventListener('click', function () {

    localStorage.setItem('name', name.value);
    document.getElementById('printName') = localStorage.getItem('name');
    
});

button.addEventListener('click', function () {
    localStorage.clear();
});