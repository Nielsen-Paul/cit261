
function tryAJAX() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ajaxArray = JSON.parse(this.responseText);
        print(ajaxArray);
      }
    };

    xhttp.open('GET', 'AJAX.txt', true);
    xhttp.send();
}

function print(array) {
    var out = "";
    var i;
    for(i = 0; i < array.length; i++) {
        out += array[i].firstName + " " + array[i].lastName + " is " + array[i].age + " years old.";
    }
    document.getElementById('printAJAX').innerHTML = out;
}