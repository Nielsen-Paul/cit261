function forLoop() {
    var loopString = " ";
    for(var i = 1; i < 11; i++) {
        loopString += i + " ";    
    }
    document.getElementById('forLoop').innerHTML = loopString;
}

function forEachLoop() {
    var loopArray;
    for(var i = 0; i < 10; i++) {
        loopArray[i] = i + 11;    
    }
    var forEachString = " ";
    loopArray.forEach(function(element) {
        forEachString += i + " ";
    })
    document.getElementById('forEachLoop').innerHTML = forEachString;
}