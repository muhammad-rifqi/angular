<?php
include "koneksi.php";

// fungsi anti injeksi dari hacker
function anti_injection($data){
  $filter  = stripslashes(strip_tags(htmlspecialchars($data,ENT_QUOTES)));
  return $filter;
}

$username = anti_injection($_POST['username']);
$pass     = anti_injection($_POST['password']);

// pastikan username dan password adalah berupa huruf atau angka.
if (!ctype_alnum($username) OR !ctype_alnum($pass)){
  echo "Maaf anda tidak diperkenankan melakukan ijection.";
}
else{
$login=mysqli_query($con,"SELECT * FROM users
					      WHERE username ='$username'
					      AND password   ='$pass'
					      ");
$ketemu=mysqli_num_rows($login);
//$r=mysqli_fetch_array($login);

	// Apabila username dan password ditemukan
	if ($ketemu > 0){

	    echo "correct";
	}
	else{

	    echo 'wrong';

	}
}
?>
