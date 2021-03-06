var myArr;
var finalBronze;
var finalSilver;
var finalGold;

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


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myArr = JSON.parse(this.responseText);
        }
    };
    xmlhttp.open("GET", "payments.txt", true);
    xmlhttp.send();

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
    var age = document.getElementById('age').value;
    var income = document.getElementById('income').value;
    var familySize = document.getElementById('familySize').value;

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("income", income);
    localStorage.setItem("familySize", familySize);

    document.getElementById('hiddenQuote').style.display = "block";
    document.getElementById('finalQuote').style.display = "block";

    var bronze = myArr.medal[0] * myArr.amounts[age - 20] + myArr.family[familySize - 1];
    var silver = myArr.medal[1] * myArr.amounts[age - 20] + myArr.family[familySize - 1];
    var gold = myArr.medal[2] * myArr.amounts[age - 20] + myArr.family[familySize - 1];
    finalBronze = bronze;
    finalSilver = silver;
    finalGold = gold;
    document.getElementById("ajaxTest").innerHTML =
        "At " + myArr.ages[age - 20] + " years old and with a family size of " +
        familySize + ", here are your monthly payment options: <br>" +
        "Bronze: $" + bronze.toFixed(2) + " Silver: $" + silver.toFixed(2) + " Gold: $" + gold.toFixed(2);
}

function medicareQuote() {
    var name = document.getElementById('medicareName').value;
    var age = document.getElementById('medicareAge').value;

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    document.getElementById('hiddenQuote').style.display = "block";
    document.getElementById('finalQuote').style.display = "block";

    var bronze = myArr.medal[0] * myArr.amounts[age - 20];
    var silver = myArr.medal[1] * myArr.amounts[age - 20];
    var gold = myArr.medal[2] * myArr.amounts[age - 20];
    finalBronze = bronze;
    finalSilver = silver;
    finalGold = gold;
    document.getElementById("ajaxTest").innerHTML =
        "At " + myArr.ages[age - 20] + ", here are your monthly payment options: <br>" +
        "Bronze: $" + bronze.toFixed(2) + " Silver: $" + silver.toFixed(2) + " Gold: $" + gold.toFixed(2);
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
    document.getElementById('finalQuote').style.display = "block";

    var bronze = myArr.medal[0] * myArr.amounts[age - 20] + myArr.family[familySize - 1];
    var silver = myArr.medal[1] * myArr.amounts[age - 20] + myArr.family[familySize - 1];
    var gold = myArr.medal[2] * myArr.amounts[age - 20] + myArr.family[familySize - 1];
    finalBronze = bronze;
    finalSilver = silver;
    finalGold = gold;
    document.getElementById("ajaxTest").innerHTML =
        "At " + myArr.ages[age - 20] + " years old and with a family size of " +
        familySize + ", here are your monthly payment options: <br>" +
        "Bronze: $" + bronze.toFixed(2) + " Silver: $" + silver.toFixed(2) + " Gold: $" + gold.toFixed(2);
}

function taxAnswer() {
    document.getElementById('taxEligible').style.display = "none";
    document.getElementById('hiddenTaxEligible').style.display = "block";
}

function medicareAnswer() {
    document.getElementById('medicareEligible').style.display = "none";
    document.getElementById('hiddenMedicareEligible').style.display = "block";
}

function bronzeClick() {
    document.getElementById('finalChoice').innerHTML = "Congratulations, you have chosen your plan!<br>"
        + "Your monthly payment will be $" + finalBronze.toFixed(2);
}

function silverClick() {
    document.getElementById('finalChoice').innerHTML = "Congratulations, you have chosen your plan!<br>"
        + "Your monthly payment will be $" + finalSilver.toFixed(2);
}

function goldClick() {
    document.getElementById('finalChoice').innerHTML = "Congratulations, you have chosen your plan!<br>"
        + "Your monthly payment will be $" + finalGold.toFixed(2);
}

