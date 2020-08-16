<?php ob_start();

if(isset($_POST['submit'])){
    echo "Mail Sent";
$to="saarth.shah28@gmail.com";
$message=$_POST['message'];
$name=$_POST['name'];
$email=$_POST['email'];
$headers="From: " .$email;

mail($to,$message,$name,$headers);
header("Loction: sindex.html");
}


?>