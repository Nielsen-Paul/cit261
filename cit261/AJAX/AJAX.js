
function tryAJAX() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("printAJAX").innerHTML =
        this.responseText;
      }
    };
    
    xhr.open('GET', 'AJAX.txt', true);
    xhr.send();
}