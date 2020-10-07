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
$output = shell_exec('javac My_run.java'); 
$output = shell_exec('java My_run'); 

// Display the list of all file 
// and directory
echo "<pre>$output</pre>"; 

?>