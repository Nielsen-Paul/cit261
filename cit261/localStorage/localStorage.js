
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const submit = document.querySelector('submit');
const clear = document.querySelector('clear');
const input = document.getElementById('name');
let itemsArray = localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : [];

localStorage.setItem('name', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('name'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

submit.addEventListener('click', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('name', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

clear.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});