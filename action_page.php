<?php 

$contract = $_GET["contract"];
$contract = trim($contract);
// $contract = str_replace(' ', '', $contract);

/*
$file = fopen("secteal-string.txt", "w") or die("Unable to open file!");
fwrite($file, $contract);
fclose($file);
*/

// Use ls command to shell_exec 
// function 
$command = "javac -verbose prova.java 2>&1";
$result = passthru($command);

// Display the list of all file 
// and directory
echo $result;

?>