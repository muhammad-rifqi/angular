<?php
require_once 'koneksi.php';
$data = json_decode(file_get_contents("php://input"));
$username = mysqli_real_escape_string($con, $data->username);
$first_name = mysqli_real_escape_string($con, $data->firstname);
$last_name = mysqli_real_escape_string($con, $data->lastname);
$email = mysqli_real_escape_string($con, $data->email);
$birthdate = mysqli_real_escape_string($con, $data->birthdate);
$basicsalary = mysqli_real_escape_string($con, $data->basicsalary);
$status = mysqli_real_escape_string($con, $data->status);
$group = mysqli_real_escape_string($con, $data->group);
$id = mysqli_real_escape_string($con, $data->id);
$query = "UPDATE employee SET username = '$username', firstname = '$first_name',lastname = '$lastname', email = '$email', birthdate = '$birthdate',birthdate = '$birthdate', basicsalary = '$basicsalary', status = '$status', groups = '$group' WHERE id = '$id'";
mysqli_query($con, $query);
echo true;
?>
