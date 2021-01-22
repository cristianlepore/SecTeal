<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SecTeal</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/topnav.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/copyright.css">
    <link rel="stylesheet" href="css/editor.css">
    <link rel="stylesheet" href="css/evaluator.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/jquery-linedtextarea.css">

    <script type="text/javascript" src="javascript/jquery.min.js"></script>
    <script type="text/javascript" src="javascript/bootstrap.min.js"></script>
    <script type="text/javascript" src="javascript/editor.js"></script>
    <script type="text/javascript" src="javascript/evaluator.js"></script>
    <script type="text/javascript" src="javascript/jquery-linedtextarea.js"></script>
    <script type="text/javascript" src="javascript/parser/index.js"></script>

</head>

<body class="main">
<header>
        <div id="topnav">
            <div class="thirty">
                <a href="index.html" id="name"><i class="fa fa-code" aria-hidden="true"></i> SecTeal </a>
                <a href="index.html" id="responsiveName">&#10095;_</a>
            </div>
            <!--
            <div class="items" id="myTopnav">
                <a href="index.html" class="item">Editor</a>
                <a href="#evaluation" class="item">Evaluation</a>
                <a href="#aboutUs" class="item">About us</a>
            </div>
            <button class="btn btn-info" data-toggle="collapse" data-target="#menu" aria-expanded="false"
                aria-controls="home experience projects contact">
                <i class="fa fa-bars"></i>
            </button>
            -->
        </div>
        <!--
        <div class="collapse" id="menu">
            <a href="#editor" class="btn" id="home">
                <p>Editor</p>
            </a>
            <a href="#evaluation" class="btn">
                <p>Evaluation</p>
            </a>
            <a href="#aboutUs" class="btn">
                <p>About us</p>
            </a>
        </div>
        -->
    </header>

<div class="layout">
        <div id="editor" class="separator-odd">
            <div class="container" style="background-color: rgb(236, 236, 236);">
                <div class="thirtyfive" id="profile">
                <div id="portrait-title">
                        <p style="font-size: 12px;">
                            <span style="color: red; font-size: 12px;">SecTeal (Secure Teal)</span>
                            is the programming language for <a href="https://www.algorand.com/"
                                target="_blank"><u>Algorand</u></a> stateless <a
                                href="https://developer.algorand.org/docs/features/asc1/stateless/"
                                target="_blank"><u>smart
                                    contracts</u></a>
                            (stateless ASC1) derived from the formal model of Algorand presented in [OMITTED]. The model abstracts stateless smart contracts by means
                            of a <i>language of expressions</i> that evaluate to true or false.
                        </p>
                        <p style="font-size: 12px;">
                            Such an interpretation enables a natural interpretation of the semantics of a smart contract
                            in Algorand, whose evaluation reverts to true or false, consequently authorising or refusing
                            a transaction in the Algorand blockchain.
                        </p>
                        <p style="font-size: 12px;">
                            Such abstract approach lends itself to both express contracts' intended behaviour in a
                            simple, logical way, and support formal verification of contracts' properties.
                        </p>
                        <p style="font-size: 12px;">
                            This page provides a compiler from SecTeal to Teal, the native, layer-one, smart contract
                            language of Algorand.
                        </p>
                        <p style="font-size: 12px;">
                            This is part of an ongoing research effort aiming to develop general formal verification of
                            smart contracts, with Algorand as a case study.
                        </p>
                    </div>
                    
                    <hr style="height:1px;border-width:0;color:gray;background-color:gray">

                    <p class="vertical_space-one"></p>

                    <div>
                        <div id="portrait-title">
                            <p style="font-size: 12px;">
                                <span style="color: red; font-size: 12px;">SecTeal language (grammar)</span>. This is an
                                experimental prototype that works on strict syntactic rules dictating how you need to
                                write your smart contracts. The following grammar defines the expression accepted by the
                                compiler (spaces must be respected):
                            </p>
                            <i style="font-size: 10px;">exp ::= val &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                a value
                                <br>
                                &emsp; | (exp ◦ exp) &nbsp;&emsp;&emsp;&emsp; ◦∈{+,−,<,=,>,∗,/,%,and,or}
                                    <br>
                                    &emsp; | not (exp) &emsp;&emsp;&emsp;&emsp; negation<br>
                                    &emsp; | txlen &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp; number of
                                    tx in the atomic group <br>
                                    &emsp; | txpos &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp; index of
                                    current tx in the
                                    atomic group <br>
                                    &emsp; | txid(INT) &emsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; identifier ofn-th
                                    tx
                                    in the
                                    atomic group <br>
                                    &emsp; | tx(INT).FIELD &nbsp;&nbsp;&nbsp;&emsp; value of n-th tx's
                                    field <br>
                                    &emsp; | arglen &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp; number of arguments
                                    of
                                    the
                                    current tx <br>
                                    &emsp; | arg(INT) &emsp;&emsp;&emsp;&emsp;&nbsp; n-th argument of the
                                    current
                                    tx <br>
                                    &emsp; | H(exp) &emsp;&emsp;&emsp;&emsp;&emsp; Hash <br>
                                    &emsp; | versig(exp1, exp2, exp3) &emsp;&nbsp;&emsp;&nbsp;&nbsp; signature
                                    verification <br>
                                    <br>
                                    val :: = byte base64 BYTE <br>
                                    &emsp; | int BYTE <br>
                                    &emsp; | addr BYTE <br>
                                    <br>
                                    BYTE :: = [a-z0-9]+ &nbsp;&emsp;&emsp;&emsp; any sequence of letters and digits<br>
                                    INT :: = [0-9]+ &emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp; any sequence of
                                    digits<br>
                                    FIELD :: = 'snd' | 'rcv' | 'crcv' | 'val' | 'fv' | 'lv' | 'lx' | 'type' | 'asst' |
                                    'asstval' | 'asstsnd' | 'asstrcv' | 'casstrcv' | 'fee' | 'note' <br>
                            </i>
                        </div>
                    </div>
                    <!--
                    <div id="network-icons">
                        <a class="icons" href="" title="Contact us">
                            <i class="fa fa-envelope"></i>
                        </a>
                        <a class="icons" href="" target="_blank" title="Github Reporitory">
                            <i class="fa fa-github"></i>
                        </a>
                        <a class="icons" href="" target="_blank" title="Documentation">
                            <i class="fa fa-book"></i>
                        </a>
                    </div>
                    -->
                </div>
                <div class="sixtyfive">
                    <div class="thirtyfive">
                        <p id="subtitle">
                            <h4>Result</h4>
                        </p>
                    </div>
                    <div class="sixtyfive">
                        <form action="index.html">
                            <button class="button success"><< Go Back</button>
                        </form>
                    </div>
                    <br><br><br><br>
                    <p style="font-size: 12px;">
                        The compiled code can be used to deploy an Algorand stateless smart contract.
                    </p>
                    <p style="font-size: 12px;">
                        Presented examples properly compile and are accepted by Algorand MainNet, TestNet and BetaNet networks. 
                    </p>

<?php 

$contract = $_GET["contract"];
$example_number = substr($contract, -3);
if(substr($contract, -3, -1) == '&/')
    $contract = substr($contract, 0, -3);
$contract = trim($contract);
echo $contract;

// $contract = str_replace(' ', '', $contract);

// Check if contract start withouth parenthesis. Add a parenthesis in the beginning and at the end of the formula
/*
if(substr($contract, 0, 3) != "int")
    if($contract[0] != '(')
        $contract = "(".$contract.")";

if($contract[0] == '(')
    if(substr($contract, 1, 3) == "int")
        $contract = substr($contract, 1, -1);
*/

// Create the file
$file = fopen("secteal-string.txt", "w") or die("Unable to open file!");
fwrite($file, $contract);
fclose($file);

/*
// Check if file secteal-string-java.txt already exists in memory.
// If file exists, delete the file.
// Create the file
$file = fopen("secteal-string-java.txt", "w") or die("Unable to open file!");
fclose($file);
*/

// Execute tha java parser with Antlr4
exec('java -jar Parser.jar 2>&1', $result);
// Display the result on screen
// print_r($result);


// print the message below only if there is open or close in the code.
$close = strpos($contract, "int close");
$pay = strpos($contract, "int pay");
if($close || $pay)
    echo "<p style='font-size:12px;'><span style='color: red; font-size: 12px;'>Note</span>: the mnemonic codes (open and close) have been replaced by the numeric ones, e.g. <i>int pay</i> becomes <i>int 1</i> (See the whole list of <a style='color:black;' target='_blank' href='https://developer.algorand.org/docs/reference/teal/opcodes/'><u>opcodes</u></a> for more details).</p>";

?>

<!--
<div class="tab">
  <button class="tablinks" onclick="openEditor(event, 'Teal')">Teal</button>
  <button class="tablinks" onclick="openEditor(event, 'SecTeal')">SecTeal</button>
</div>
-->
            <div class="tab">
                <div>
                    <div class="tablinks">Teal</div>
                    <div id="Teal" class="center" style="width: 10%;">
                        <button onclick="copyToClipboard('#box')" style="float: right; width:100%;"><i class="fa fa-copy"></i></button>
                    </div>
                <div id="box" style="background-color: white;">

<?php

// Execute the Python program
$message = exec("python3 ./secteal.py 2>&1");
echo "<div>".$message."</div>";

?>

                        </div>
                    </div>
            </div>
            <br>
            <div class="tab">
                <div class="tablinks">SecTeal</div>
                    <div id="SecTeal" class="center"></div>
                    <div id="box" style="background-color: white;">
<?php
if($example_number == '&/1')
    echo "(tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)";
elseif($example_number == '&/2')
    echo "("."<br>"."&nbsp&nbsp&nbsp&nbsp&nbsp"."(tx(0).fee < int 1000)"."<br>"."&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"."and"."<br>"."&nbsp&nbsp&nbsp&nbsp&nbsp"."("."<br>"."&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"."(tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)"."<br>"."&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"."and"."<br>"."&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"."(tx(0).crcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)"."<br>"."&nbsp&nbsp&nbsp&nbsp&nbsp".")"."<br>".")"."<br>";
elseif($example_number == '&/3')
    echo "versig(arg(0),arg(1),addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)";
elseif($example_number == '&/4')
    echo "(" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp" . "(tx(0).type = int close)" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "and" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp" . "(" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(tx(0).fv > int 3000)" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "and" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(tx(0).crcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . ")" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "or" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(arg(0) = byte base64 bXkgc3RyaW5n)" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "and" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(versig(arg(0),arg(1),addr NKOS3PFXD73DDFSEE6SSQQ6SEZGOQBTE6KQAGEDQZRGOCXSNH3XGCXWGHU) and (tx(0).crcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM))" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . ")" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "or" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(arg(0) = byte base64 bXkgc3RyaW5n)" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "and" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(versig(arg(0),arg(1),addr NKOS3PFXD73DDFSEE6SSQQ6SEZGOQBTE6KQAGEDQZRGOCXSNH3XGCXWGHU) and (tx(0).crcv = addr SOEI4UA72A7ZL5P25GNISSVWW724YABSGZ7GHW5ERV4QKK2XSXLXGXPG5Y))" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . ")" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . ")" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp" . ")" . "<br>" .
    ")" . "<br>";
elseif($example_number == '&/5')
    echo "(" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp" . "(tx(0).type = int close) " . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "and" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp" . "(" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "and" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(H(arg(0)) = byte base64 bXkgc3RyaW5n)" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . ")" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "or" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(tx(0).rcv = addr SOEI4UA72A7ZL5P25GNISSVWW724YABSGZ7GHW5ERV4QKK2XSXLXGXPG5Y)" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "and" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(tx(0).fv > int 3000)" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . ")" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp" . ")" . "<br>" .
    ")" . "<br>";
elseif($example_number == '&/6')
    echo "(" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp" . "(tx(0).type = int pay)" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "and" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp" . "(" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "((tx(0).val = int 10000)" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "and" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "and" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . "(((tx(0).fv % int 2000) = int 0) and ((tx(0).lv < (tx(0).fv . int 1000)) and (tx(0).lx = int 4000)))" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" . ")" . "<br>" .
    "&nbsp&nbsp&nbsp&nbsp&nbsp" . ")" . "<br>" .
    ")" . "<br>";
else
    echo $contract;

?>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--
        <div id="aboutUs" class="separator-even">
            <div class="container">
                <div>
                    <div>
                        <div class="copyright">
                            <p>
                                Copyright <i class="fa fa-copyright"></i> 2020 <br>
                                University
                            </p>
                        </div>
                        <div class="build_and_version">
                            <p>
                                Version: 0.4 (Beta) <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        -->
    </div>
</body>
</html>