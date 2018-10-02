function forLoop() {
    var loopString = " ";
    for(var i = 1; i < 11; i++) {
        loopString += i + " ";    
    }
    document.getElementById('forLoop').innerHTML = loopString;
}

function forEachLoop() {
    var loopArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var forEachString = " ";
    loopArray.forEach(function(element) {
        forEachString += element.toString() + " ";
    })
    document.getElementById('forEachLoop').innerHTML = forEachString;
}