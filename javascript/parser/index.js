// This is the code to parse the string

const { ConsoleErrorListener } = require('antlr4/error/ErrorListener');
const { Token } = require('antlr4/index');
const antlr4 = require('antlr4/index');
const { count } = require('console');
const fs = require('fs');
const sectealLexer = require('./sectealLexer');
const sectealParser = require('./sectealParser');
var sectealListener = require('./sectealListener').sectealListener;
var counter = 0;
var myList = [];
var newList = [];
var LIST = false;


sectealFunctionListener = function (res) {
    this.Res = res;
    sectealListener.call(this); // inherit default listener
    return this;
};

// inherit default listener
sectealFunctionListener.prototype = Object.create(sectealListener.prototype);
sectealFunctionListener.prototype.constructor = sectealFunctionListener;


// Override the enter method for prog
sectealFunctionListener.prototype.enterProg = function (ctx) {
    // this.Res.push(ctx.getText());
    // console.log("Enter PROG: " + ctx.getText());
}

// Override the enter method for prog
sectealFunctionListener.prototype.exitProg = function (ctx) {
    // this.Res.push(ctx.getText());
    // console.log("exit PROG: " + ctx.getText());
}


// Override the enter method for expr
sectealFunctionListener.prototype.enterExpr = function (ctx) {
    // this.Res.push(ctx.getText());
    /*
    if (ctx.getText().charAt(0) != '(')
        counter += 1;
    else {
        LIST = true;
    }
    */
    // console.log("Enter EXPR: " + ctx.getText());
}

// Override the exit method for expr
sectealFunctionListener.prototype.exitExpr = function (ctx) {
    // this.Res.push(ctx.getText());
    /*
    var myString = ctx.getText();
    if (myString.charAt(0) != '(') {
        counter -= 1;
        if (counter == 0 || counter % 2 != 0)
            if (counter == 0 && LIST) {
                newList.push(myString);
                LIST = false;
                myList.push(newList);
            } else if (LIST)
                newList.push(myString);
            else if (counter >= 0)
                myList.push(myString);
    }
    */
    // console.log("exit expr: " + myString);
}


// Override the enter method for val
sectealFunctionListener.prototype.enterVal = function (ctx) {
    // this.Res.push(ctx.getText());
    console.log("Enter VAL: " + ctx.getText());
}

// Override the exit method for val
sectealFunctionListener.prototype.exitVal = function (ctx) {
    // this.Res.push(ctx.getText());
    // console.log("exit VAL: " + ctx.getText());
}


// Override the enter method for val
sectealFunctionListener.prototype.enterOp = function (ctx) {
    // this.Res.push(ctx.getText());
    /*
    if (LIST) {
        counter = 0;
        newList.push(ctx.getText());
        newList.splice(-2, 2, newList[newList.length - 1], newList[newList.length - 2]);
        // console.log("Enter OP: " + ctx.getText());
    }
    else {
        counter = 0;
        myList.push(ctx.getText());
        myList.splice(-2, 2, myList[myList.length - 1], myList[myList.length - 2]);
        // console.log("Enter OP: " + ctx.getText());
    }
    */
}

// Override the exit method for val
sectealFunctionListener.prototype.exitOp = function (ctx) {
    // this.Res.push(ctx.getText());
    // console.log("exit OP: " + ctx.getText());
}


exports.sectealFunctionListener = sectealFunctionListener;

//*** Program boot */
function parsing() {
    // var input = fs.readFileSync('./parser/samples.txt').toString();
    var chars = new antlr4.InputStream("int a+int b");
    var lexer = new sectealLexer.sectealLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new sectealParser.sectealParser(tokens);
    var tree = parser.prog();
    var res = [];
    var sectealClass = new sectealFunctionListener(res);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(sectealClass, tree);
}