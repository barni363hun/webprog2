<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    // collect value of input field
    $model = $_POST['CARMODELL'];
    $price = $_POST['PRICE'];
    $doors = $_POST['DOORS'];
 
    // echo $doors;
    // echo $price;
    // echo $model;


    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "oi24o2";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "INSERT INTO `auto` (`CARMODELL`, `DOORS`, `PRICE`) VALUES ('".$model."', '".$doors."', '".$price."');";

    if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
    } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);

}
?>