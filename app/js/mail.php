<?php

$recepient = "admin@mail.com";
$sitename = "site";

$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$text = "Email: $email \n Description: $message \n ";

$pagetitle = "New message from site \"$sitename\"";

mail($recepient, $pagetitle, $text, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


 ?>
