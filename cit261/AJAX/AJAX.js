
function tryAJAX() {
    const xhr = new HMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                document.getElementById('printAJAX').innerHTML = xhr.responseText;
            }

            if (xhr.status == 404) {
                document.getElementById('printAJAX').innerHTML = "File not found"
            }
        }
    };

    xhr.open('get', 'AJAX.txt', true);
    xhr.send();
}