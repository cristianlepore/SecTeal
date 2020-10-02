<?php 

$contract = $_GET["contract"];
$contract = trim($contract);
$new_str = str_replace(' ', '', $contract);
echo $contract;

?>