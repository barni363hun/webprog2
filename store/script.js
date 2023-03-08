my_nums = []

function nums() {
  let text;
  let num = Number(prompt("Adj meg egy számot:",0));
  if (num != NaN) {
    my_nums.push(num)
    sum = my_nums.reduce((partialSum, a) => partialSum + a, 0);
    product = my_nums.reduce( (a, b) => a * b )
    average = my_nums.reduce((a, b) => a + b, 0) / my_nums.length;
    // console.log(product)
    text = my_nums.toString()
    text += "<br>összeg: "+String(sum)
    text += "<br>szorzat: "+String(product)
    text += "<br>átlag: "+String(Math.round(average))
    document.getElementById("out").innerHTML = text;
  }
}

function loadDoc(url) {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
      if (http.readyState == 4 &&
          http.status == 200) { 
            // alert(httpKeres.responseText);
            myFunction(this);
          }
      }
  http.open("GET", url, true);
  http.send();
} 

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("mytable").innerHTML = table;
}