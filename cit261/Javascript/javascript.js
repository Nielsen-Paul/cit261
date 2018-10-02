function forLoop() {
    var loopString = " ";
    for(var i = 1; i < 11; i++) {
        loopString += i + " ";    
    }
    document.getElementById('forLoop').innerHTML = loopString;
}

function forEachLoop() {
    var loopArray;
    for(var i = 11; i < 21; i++) {
        loopArray.push(i.toString());
    }
    var forEachString = " ";
    loopArray.forEach(function(element) {
        forEachString += element + 11;
    })
    document.getElementById('forEachLoop').innerHTML = forEachString;
}