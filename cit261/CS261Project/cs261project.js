
function taxQuote() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var income = document.getElementById('income').value;
    var familySize = document.getElementById('familySize').value;

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("income", income);
    localStorage.setItem("familySize", familySize);
}

function printStorage() {
    document.getElementById('printName').innerHTML = "Welcome back " + localStorage.getItem('name') + "!";
}