
function tryAJAX() {
    const xhr = new MLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                document.getElementById('printAJAX').innerHTML = xhr.responseText;
            }

            if (xhr.status == 404) {
                document.getElementById('printAJAX').innerHTML = "File not found";
            }
        }
    };

    xhr.open('get', 'smallAjax.txt', true);
    xhr.send();
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