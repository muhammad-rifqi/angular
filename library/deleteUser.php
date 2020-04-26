<?php
require_once 'koneksi.php';

$data  = json_decode(file_get_contents("php://input"));
$query = "DELETE FROM employee WHERE id = $data->id";
mysqli_query($con, $query);
echo true;
?>
