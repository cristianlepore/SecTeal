<?php 

$contract = $_GET["contract"];
$contract = trim($contract);
// $contract = str_replace(' ', '', $contract);

/*
$file = fopen("secteal-string.txt", "w") or die("Unable to open file!");
fwrite($file, $contract);
fclose($file);
*/

$cmd = "export CLASSPATH='.:/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH'";
$result = passthru($cmd);
$cmd = "alias antlr4='java -Xmx500M -cp '/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH' org.antlr.v4.Tool'";
$result = passthru($cmd);
$cmd = "alias grun='java -Xmx500M -cp '/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH' org.antlr.v4.gui.TestRig'";
$result = passthru($cmd);


// Execute tha java parser with Antlr4
exec('java -jar Parser.jar 2>&1', $result);
// Display the result on screen
print_r($result);

?>