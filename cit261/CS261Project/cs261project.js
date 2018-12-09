
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

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            var age = localStorage.getItem("age") - 20;
            var family = localStorage.getItem("familySize");
            var bronze = myArr.medal[0] * myArr.ages[age];
            var silver = myArr.medal[1] * myArr.ages[age];
            var gold = myArr.medal[2] * myArr.ages[age];
            document.getElementById("ajaxTest").innerHTML = 
            "At " + myArr.ages[age] + " years old and with a family size of " +
            family + " here are the monthly payment options: <br>" + 
            "Bronze: " + bronze + " Silver: " + silver + " Gold: " + gold;
        }
    };
    xmlhttp.open("GET", "payments.txt", true);
    xmlhttp.send();

}

function taxForm() {
    document.getElementById('taxDiv').style.display = "none";
    document.getElementById('hiddenTaxDiv').style.display = "block";
}

function medicareForm() {
    document.getElementById('medicareDiv').style.display = "none";
    document.getElementById('hiddenMedicareDiv').style.display = "block";
}

function pocketForm() {
    document.getElementById('pocketDiv').style.display = "none";
    document.getElementById('hiddenPocketDiv').style.display = "block";
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

