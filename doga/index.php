<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>autóbérlés</title>
</head>
<script>
    function urit() {
        document.querySelector("#CARMODELL").value = "audi"
        document.querySelector("#DOORS").value = "2"
}       
function adatok() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.querySelector("#table").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", "adatok.php", true);
    xmlhttp.send();
}
var t = false;
var c = false;
function teljes() {
    if(document.querySelector("#f").checked){
        t = true;
    } else{
        t = false;
    }
    arvalt()
}
function cim() {
    console.log()
    const cim = document.querySelector("#cim").value
    if(cim.includes("8200")||cim.includes("Veszprém")){
        c = true;
    } else{
        c = false;
    }
    arvalt()
}
function arvalt(){
var ar = 8000 + (t?2000:0)+ (c?0:2000);
    document.querySelector("#PRICE").value = ar;
    console.log(ar)
    document.querySelector("#szd").innerHTML = (c?0:2000);
}
</script>
<body>
    <h1>Princzes Barnabás - oi24o2</h1>
    <form action="insert.php" method="post">
        fajta:
        <select name="CARMODELL" id="CARMODELL">
            <option value="audi">audi</option>
            <option value="nissan">nissan</option>
            <option value="ferrary">ferrary</option>
            <option value="tesla">tesla</option>
            <option value="lada">lada</option>
        </select>
        <br>
        ajtók száma:
        <select name="DOORS" id="DOORS" name="DOORS">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">4+</option>
        </select>
        <br>
        <input type="number" name="PRICE" id="PRICE" value="8000" hidden>
        <input type="submit" value="Mentés">
    </form>
    <br>
    cím:<input type="text" id="cim" onchange="cim()">
    <br>
    biztosítás:
    standard
    <input type="radio" name="b" id="s" onclick="teljes()">
    full protection
    <input type="radio" name="b" id="f" onclick="teljes()">
    <br>
    szállítási díj:
    <span id="szd">2000</span>
    <br><br>
    <button onclick="urit()">Űrlap ürítése</button>
    <button type="submit" onclick="adatok()">Rendelés adatai</button>
    <table id="table"></table>
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "oi24o2";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password);

    // Check connection
    if (!$conn) {
    die("Connection to server failed: " . mysqli_connect_error());
    }
    echo "Connected to server successfully.";
    echo "<br>";
    // Create db connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check db connection
    if ($conn->connect_error) {
    die("Connection to db failed: " . $conn->connect_error);
    }
    else{
        echo "Connected to database successfully.";
    }
    ?>
</body>
</html>