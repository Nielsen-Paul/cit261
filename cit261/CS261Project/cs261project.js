
window.onload = function () {
    document.getElementById('printName').innerHTML = "Welcome back " + localStorage.getItem("name");

    document.getElementById('name').value = localStorage.getItem("name");
    document.getElementById('age').value = localStorage.getItem("age");
    document.getElementById('income').value = localStorage.getItem("income");
    document.getElementById('familySize').value = localStorage.getItem("familySize");

    document.getElementById('pocketName').value = localStorage.getItem("name");
    document.getElementById('pocketAge').value = localStorage.getItem("age");
    document.getElementById('pocketIncome').value = localStorage.getItem("income");
    document.getElementById('pocketFamilySize').value = localStorage.getItem("familySize");

    document.getElementById('medicareName').value = localStorage.getItem("name");
    document.getElementById('medicareAge').value = localStorage.getItem("age");
}

function taxForm() {
    document.getElementById('taxDiv').style.display = none;
    document.getElementById('hiddenTaxDiv').style.display = block;
}

function medicareForm() {
    document.getElementById('medicareDiv').style.display = none;
    document.getElementById('hiddenMedicareDiv').style.display = block;
}

function pocketForm() {
    document.getElementById('medicareDiv').style.display = none;
    document.getElementById('hiddenMedicareDiv').style.display = block;
}

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

