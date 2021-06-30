# Content

This description refers to the SecTeal project. Description goes in alphabetic ordering for folders and files.

## CSS folder

This folder contains the layout files.

## icons folder

This folder contains the icons set and the fontawesome icons downloaded for free at: https://fontawesome.com/

This is a package by itself. No need to modify it.

## Javascript folder

This folder contains javascript and Jquery functions for the website. Main files are:

- Boostrp.min.js: set of functions that runs when the webpage is load.
- drop-down-menu.js: implements the samples (HTLC, Oracle, etc..) of the drop-down menu.
- editor.js: features of the editor.
- topnav_script.js: methods of the top nav

The folder has two subfolders: 1)codemirros and 2)parser.

### 1. Codemirror subfolder

Contains the functions to display the text editor and the numbers on the left hand side of the editor.

### 2. Parser subfolder

This embeds the Antlr libraries to parse the string on the web browser. By default this set of libraries do not run on the tool.

## Plugins folder

This is a set of libraries to run the text editor. 

We used CodeMirror editor. It is the text editor implemented in JavaScript for the browser. It comes with a number of language modes and addons.

The subset of folders contain the APIs and a CSS theming system for customizing CodeMirror. By using these libraries, you can set up all your preferences for the text editor.

## Index.html file

The index.html page is the most common name used for the default page shown on a website if no other page is specified when a visitor requests the site. In other words, index.html is the name used for the homepage of the website.

## Parser.jar

The main file is located in src/parser/myRun.java
This is the main file that reads from index.html and write on secteal-string-java.txt
This embeds antlr 4.7.1 complete. No need to add any other library nor dependency.

## result.php

This is the second page of html that shows the results of the tool.

## secteal-string-java.txt

This file contains the string passed from the index.html file.

## secteal-string.txt

The final string after parsing is written on this file.

## secteal.py

Implements the grammar rules to parse the string coming from the secteal-string-java.txt
