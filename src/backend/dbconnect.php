<?php

$mysqli = new mysqli('localhost','root','','cloud');

if($mysqli->connect_error)
{
    die('Connect Error ('.$mysqli->connect-errno.')'.$mysqli->connect_error);
}
?>