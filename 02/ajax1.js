function loadDoc(url) {
    var httpKeres = new XMLHttpRequest();
    httpKeres.onreadystatechange = function () {
        if (httpKeres.readyState == 4 &&
            httpKeres.status == 200) { alert(httpKeres.responseText); }
        }
    httpKeres.open("GET", url, true);
    httpKeres.send();
} 