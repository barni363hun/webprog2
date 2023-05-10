<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "oi24o2";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM auto";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<tr>
    <th>neve</th>
    <th>model</th>
    <th>átvétel</th>
    <th>visszavétel</th>
    <th>fizetendő</th></tr>";
    echo "<tr>";
    echo "<td> ";
    echo $row["RENTERNAME"];
    echo "</td>";
    echo "<td> ";
    echo $row["CARMODELL"];
    echo "</td>";
    echo "<td> ";
    echo $row["PICKUPDATE"];
    echo "</td>";
    echo "<td> ";
    echo $row["DROPOFFDATE"];
    echo "</td>";
    echo "<td> ";
    echo $row["PRICE"];
    echo "</td>";
    echo "</tr>";

  }
} else {
  echo "0 results";
}
$conn->close();
$hint = "";
?>