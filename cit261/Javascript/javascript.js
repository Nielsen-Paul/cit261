function forLoop() {
    var loopString = " ";
    for(var i = 1; i < 11; i++) {
        loopString += i + " ";    
    }
    document.getElementById('forLoop').innerHTML = loopString;
}

function forEachLoop() {
    var loopArray = array[10];
    for(var i = 10; i < 21; i++) {
        loopArray[i] = i;    
    }
    var forEachString = " ";
    loopArray.forEach(function(element) {
        forEachString += i + " ";
    })
    document.getElementById('forEachLoop').innerHTML = forEachString;
}