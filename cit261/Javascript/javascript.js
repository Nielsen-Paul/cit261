function forLoop() {
    var nameArray = ["Paul", "Stettsen", "Ryan", "Zack", "Spencer"];

    //var loopString = " ";
    //for(var i = 1; i < 6; i++) {
    //    loopString += nameArray[i] + " ";    
    //}
    document.getElementById('forLoop').innerHTML = nameArray;
}

function forEachLoop() {
    var loopArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var forEachString = " ";
    loopArray.forEach(function(element) {
        forEachString += element.toString() + " ";
    })
    document.getElementById('forEachLoop').innerHTML = forEachString;
}

function conditional() {
    var num = document.getElementById('textBox').value;
    if(num > 20) {
        document.getElementById('conditional').innerHTML = num + " is greater than 20";
    } else if(num == 20) {
        document.getElementById('conditional').innerHTML = num + " is equal to 20";
    } else if(num < 20) {
        document.getElementById('conditional').innerHTML = num + " is less than 20";
    } else {
        document.getElementById('conditional').innerHTML = "Is " + num + " a number?";
    }
}