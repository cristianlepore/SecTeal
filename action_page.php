<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Secteal</title>

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
                <a href="index.html" id="name"><i class="fa fa-code" aria-hidden="true"></i> Secteal </a>
                <a href="index.html" id="responsiveName">&#10095;_</a>
            </div>
            <div class="items" id="myTopnav">
                <a href="index.html" class="item">Editor</a>
                <!--
                <a href="#evaluation" class="item">Evaluation</a>
                -->
                <a href="#aboutUs" class="item">About us</a>
            </div>
            <button class="btn btn-info" data-toggle="collapse" data-target="#menu" aria-expanded="false"
                aria-controls="home experience projects contact">
                <i class="fa fa-bars"></i>
            </button>
        </div>
        <div class="collapse" id="menu">
            <a href="#editor" class="btn" id="home">
                <p>Editor</p>
            </a>
            <!--
            <a href="#evaluation" class="btn">
                <p>Evaluation</p>
            </a>
            -->
            <a href="#aboutUs" class="btn">
                <p>About us</p>
            </a>
        </div>
    </header>

<div class="layout">
        <div id="editor" class="separator-odd">
            <div class="container">
                <div class="thirtyfive" id="profile">
                    <div id="portrait-title">
                        <h2>Online Editor</h2>
                        <h3><a href="https://www.algorand.com/" target="_blank" title="Algorand Blockchain">
                                <span>Algorand Abstract Language</span>
                            </a>
                        </h3>
                    </div>
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
                </div>

                <div class="sixtyfive">
                    <p id="subtitle">
                        RESULT (TEAL LANGUAGE)
                    </p>
                    <div class="center"><div>
                    <div id="box">

<?php 

$contract = $_GET["contract"];
$contract = trim($contract);

// $contract = str_replace(' ', '', $contract);

// Create the file
$file = fopen("secteal-string.txt", "w") or die("Unable to open file!");
fwrite($file, $contract);
fclose($file);

// Execute tha java parser with Antlr4
exec('java -jar Parser.jar 2>&1', $result);
// Display the result on screen
// print_r($result);


// Execute the Python program
$message = exec("python3 ./secteal.py 2>&1");
echo "<div>".$message."</div>";

?>

</div>
                            <br>
                        <button class="button success" onclick="goBack()">Go Back</button>
                    </div>
                </div>
            </div>
        </div>


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
                                Version: 0.3 (Beta) <br>
                                Built at: <span id="datetime"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>