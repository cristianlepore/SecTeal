<?php 

$contract = $_GET["contract"];
$contract = trim($contract);
// $contract = str_replace(' ', '', $contract);

echo `whoami`;

$myfile = fopen("/var/www/html/newfile.txt", "w") or die("Unable to open file!");
$txt = "John Doe\n";
fwrite($myfile, $txt);
$txt = "Jane Doe\n";
fwrite($myfile, $txt);
fclose($myfile);

?>