var myArr;

window.onload = function () {
    if (localStorage.getItem("name")) {
        document.getElementById('printName').innerHTML = "Welcome back " + localStorage.getItem("name");
    }

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

    document.getElementById('hiddenTaxEligible').style.display = "none";
    document.getElementById('hiddenMedicareEligible').style.display = "none";

    if (!localStorage.getItem("quoteFile")) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                myArr = JSON.parse(this.responseText);
                localStorage.setItem("quoteFile", myArr);
            }
        };
        xmlhttp.open("GET", "payments.txt", true);
        xmlhttp.send();
    }

    if (localStorage.getItem("quoteFile")) {
        quoteJSON = localStorage.getItem("quoteFile");
    
        document.getElementById('hiddenQuote').style.display = "block";
    
        var bronze = quoteJSON.medal[0] * quoteJSON.amounts[age] + quoteJSON.family[familySize - 1];
        var silver = quoteJSON.medal[1] * quoteJSON.amounts[age] + quoteJSON.family[familySize - 1];
        var gold = quoteJSON.medal[2] * quoteJSON.amounts[age] + quoteJSON.family[familySize - 1];
        document.getElementById("ajaxTest").innerHTML =
            "At " + quoteJSON.ages[age] + " years old and with a family size of " +
            familySize + " here are the monthly payment options: <br>" +
            "Bronze: " + bronze + " Silver: " + silver + " Gold: " + gold;
    }
}

function taxForm() {
    document.getElementById('taxDiv').style.display = "none";
    document.getElementById('hiddenTaxDiv').style.display = "block";

    document.getElementById("taxCredit").style.WebkitTransition = "all 2s";
    document.getElementById("taxCredit").style.transition = "all 2s";

    document.getElementById('taxCredit').style.height = "0px";
    document.getElementById('taxCredit').style.width = "0px";
}

function medicareForm() {
    document.getElementById('medicareDiv').style.display = "none";
    document.getElementById('hiddenMedicareDiv').style.display = "block";

    document.getElementById("medicare").style.WebkitTransition = "all 2s";
    document.getElementById("medicare").style.transition = "all 2s";

    document.getElementById('medicare').style.height = "0px";
    document.getElementById('medicare').style.width = "0px";
}

function pocketForm() {
    document.getElementById('pocketDiv').style.display = "none";
    document.getElementById('hiddenPocketDiv').style.display = "block";

    document.getElementById("outOfPocket").style.WebkitTransition = "all 2s";
    document.getElementById("outOfPocket").style.transition = "all 2s";

    document.getElementById('outOfPocket').style.height = "0px";
    document.getElementById('outOfPocket').style.width = "0px";
}

function taxQuote() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value - 20;
    var income = document.getElementById('income').value;
    var familySize = document.getElementById('familySize').value;

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("income", income);
    localStorage.setItem("familySize", familySize);

    document.getElementById('hiddenQuote').style.display = "block";

    var bronze = myArr.medal[0] * myArr.amounts[age] + myArr.family[familySize - 1];
    var silver = myArr.medal[1] * myArr.amounts[age] + myArr.family[familySize - 1];
    var gold = myArr.medal[2] * myArr.amounts[age] + myArr.family[familySize - 1];
    document.getElementById("ajaxTest").innerHTML =
        "At " + myArr.ages[age] + " years old and with a family size of " +
        familySize + " here are the monthly payment options: <br>" +
        "Bronze: " + bronze + " Silver: " + silver + " Gold: " + gold;
}

function medicareQuote() {
    var name = document.getElementById('medicareName').value;
    var age = document.getElementById('medicareAge').value;

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    document.getElementById('hiddenQuote').style.display = "block";

    var bronze = myArr.medal[0] * myArr.amounts[age] + myArr.family[familySize - 1];
    var silver = myArr.medal[1] * myArr.amounts[age] + myArr.family[familySize - 1];
    var gold = myArr.medal[2] * myArr.amounts[age] + myArr.family[familySize - 1];
    document.getElementById("ajaxTest").innerHTML =
        "At " + myArr.ages[age] + " here are the monthly payment options: <br>" +
        "Bronze: " + bronze + " Silver: " + silver + " Gold: " + gold;
}

function pocketQuote() {
    var name = document.getElementById('pocketName').value;
    var age = document.getElementById('pocketAge').value;
    var income = document.getElementById('pocketIncome').value;
    var familySize = document.getElementById('pocketFamilySize').value;

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("income", income);
    localStorage.setItem("familySize", familySize);

    document.getElementById('hiddenQuote').style.display = "block";

    var bronze = myArr.medal[0] * myArr.amounts[age] + myArr.family[familySize - 1];
    var silver = myArr.medal[1] * myArr.amounts[age] + myArr.family[familySize - 1];
    var gold = myArr.medal[2] * myArr.amounts[age] + myArr.family[familySize - 1];
    document.getElementById("ajaxTest").innerHTML =
        "At " + myArr.ages[age] + " years old and with a family size of " +
        familySize + " here are the monthly payment options: <br>" +
        "Bronze: " + bronze + " Silver: " + silver + " Gold: " + gold;
}

function taxAnswer() {
    document.getElementById('taxEligible').style.display = "none";
    document.getElementById('hiddenTaxEligible').style.display = "block";
}

function medicareAnswer() {
    document.getElementById('medicareEligible').style.display = "none";
    document.getElementById('hiddenMedicareEligible').style.display = "block";
}

