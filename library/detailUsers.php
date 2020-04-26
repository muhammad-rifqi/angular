<?php

require_once 'koneksi.php';


$query = "SELECT * FROM employee ORDER BY id ASC";
$result = mysqli_query($con, $query);
$arr = array();

while($row = mysqli_fetch_assoc($result)) {
	$arr[] = $row;
}

echo $json_jurusan = json_encode($arr);
?>
