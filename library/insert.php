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

	$query = "INSERT INTO employee(username, firstname, lastname, email, birthdate, basicsalary, status, groups) VALUES ('$username','$first_name', '$last_name', '$email', ' $birthdate', '$basicsalary','$status','$group')";
		 if(mysqli_query($con, $query))
		 {
					echo "true";
		 }
		 else
		 {
					echo 'false';
		 }
?>
