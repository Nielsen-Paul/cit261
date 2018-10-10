
function tryAJAX() {
    const xhr = new MLHttpRequest();

    xhr.onreadystatechange = function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById('printAJAX').innerHTML = this.responseText;
          }
        };
    
        xhttp.open('GET', 'smallAjax.txt', true);
        xhttp.send();
}

function tryAJAX2() {
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
        out += array[i].firstName + " " + array[i].lastName + " is " + array[i].age + " years old.<br>";
    }
    document.getElementById('printAJAX2').innerHTML = out;
}