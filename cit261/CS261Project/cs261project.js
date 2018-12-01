
window.onload = function () {
    document.getElementById('printName').innerHTML = "Welcome back " + localStorage.getItem("name");
    document.getElementById('name').value = localStorage.getItem("name");
    document.getElementById('age').value = localStorage.getItem("age");
    document.getElementById('income').value = localStorage.getItem("income");
    document.getElementById('familySize').value = localStorage.getItem("familySize");
    document.getElementById('insuranceEligible').value = localStorage.getItem("insuranceEligible");
    document.getElementById('hiddenTaxDiv').style.display = none;
    document.getElementById('hiddenMedicareDiv').style.display = none;
    document.getElementById('hiddenPocketDiv').style.display = none;
}

function taxQuote() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var income = document.getElementById('income').value;
    var familySize = document.getElementById('familySize').value;
    var insuranceEligible = document.getElementById('insuranceEligible').value;

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("income", income);
    localStorage.setItem("familySize", familySize);
    localStorage.setItem("insuranceEligible", insuranceEligible);
}

