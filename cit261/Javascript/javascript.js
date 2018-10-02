function forLoop() {
    var loopString = " ";
    for(var i = 1; i < 11; i++) {
        loopString += i + " ";    
    }
    document.getElementById('forLoop').innerHTML = loopString;
}