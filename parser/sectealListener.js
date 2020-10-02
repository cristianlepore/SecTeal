// Generated from secteal.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by sectealParser.
function sectealListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

sectealListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
sectealListener.prototype.constructor = sectealListener;

// Enter a parse tree produced by sectealParser#prog.
sectealListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by sectealParser#prog.
sectealListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by sectealParser#expr.
sectealListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by sectealParser#expr.
sectealListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by sectealParser#val.
sectealListener.prototype.enterVal = function(ctx) {
};

// Exit a parse tree produced by sectealParser#val.
sectealListener.prototype.exitVal = function(ctx) {
};


// Enter a parse tree produced by sectealParser#op.
sectealListener.prototype.enterOp = function(ctx) {
};

// Exit a parse tree produced by sectealParser#op.
sectealListener.prototype.exitOp = function(ctx) {
};



exports.sectealListener = sectealListener;