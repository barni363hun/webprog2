var xmlDoc 

function loadDoc(url) {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
      if (http.readyState == 4 &&
          http.status == 200) { 
            document.getElementById("code").innerHTML = String(http.readyState)
            document.getElementById("status").innerHTML = String(http.status)
            document.getElementById("text").innerHTML = String(http.responseText)
            // alert(httpKeres.responseText);
            xmlDoc = this.responseXML;
            myFunction();
          }
      }
  http.open("GET", url, true);
  http.send();
} 

function myFunction() {
  var i;
  var selHTML = "<select>";
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
    selHTML+="<option value='"+x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+"'>"
    +x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+"</option>"
  }
  selHTML+="</select>"
  document.getElementById("myTable").innerHTML = table;
  document.getElementById("sel").innerHTML = selHTML
}

function newTable(){
  var filter = document.getElementById("in").value
  var i;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    if (filter == String(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue)) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
  }
  document.getElementById("newTable").innerHTML = table;

}