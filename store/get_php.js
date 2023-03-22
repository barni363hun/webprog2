
function getPhp() {
    var http = new XMLHttpRequest();
  var q = document.getElementById("in2").value
    http.onreadystatechange = function () {
        if (http.readyState == 4 &&
            http.status == 200) { 
              document.getElementById("phpOut").innerHTML = String(http.responseText)
              // alert(httpKeres.responseText);
            }
        }
    http.open("GET", "http://localhost/dashboard/oi24o2/store/gethint.php?q="+q, true);
    http.send();
  } 