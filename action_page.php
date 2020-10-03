<?php 

$contract = $_GET["contract"];
$contract = trim($contract);
// $contract = str_replace(' ', '', $contract);

$file = fopen("secteal-string.txt", "w") or die("Unable to open file!");
fwrite($file, $contract);
fclose($file);

?>