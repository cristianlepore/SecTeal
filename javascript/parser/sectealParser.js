// Generated from secteal.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var sectealListener = require('./sectealListener').sectealListener;
var grammarFileName = "secteal.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\"M\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0003\u0002\u0007\u0002\f\n\u0002\f\u0002\u000e",
    "\u0002\u000f\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003)\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003/\n\u0003\f\u0003\u000e\u00032\u000b",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004I\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0002\u0003\u0004\u0006\u0002\u0004\u0006",
    "\b\u0002\u0003\u0003\u0002\u0015 \u0002X\u0002\r\u0003\u0002\u0002\u0002",
    "\u0004(\u0003\u0002\u0002\u0002\u0006H\u0003\u0002\u0002\u0002\bJ\u0003",
    "\u0002\u0002\u0002\n\f\u0005\u0004\u0003\u0002\u000b\n\u0003\u0002\u0002",
    "\u0002\f\u000f\u0003\u0002\u0002\u0002\r\u000b\u0003\u0002\u0002\u0002",
    "\r\u000e\u0003\u0002\u0002\u0002\u000e\u0003\u0003\u0002\u0002\u0002",
    "\u000f\r\u0003\u0002\u0002\u0002\u0010\u0011\b\u0003\u0001\u0002\u0011",
    ")\u0005\u0006\u0004\u0002\u0012\u0013\u0007\u0003\u0002\u0002\u0013",
    "\u0014\u0005\u0004\u0003\u0002\u0014\u0015\u0007\u0004\u0002\u0002\u0015",
    ")\u0003\u0002\u0002\u0002\u0016\u0017\u0007\u0005\u0002\u0002\u0017",
    ")\u0005\u0004\u0003\u0006\u0018\u0019\u0007\u0006\u0002\u0002\u0019",
    "\u001a\u0005\u0004\u0003\u0002\u001a\u001b\u0007\u0004\u0002\u0002\u001b",
    ")\u0003\u0002\u0002\u0002\u001c\u001d\u0007\u0007\u0002\u0002\u001d",
    "\u001e\u0005\u0004\u0003\u0002\u001e\u001f\u0007\u0004\u0002\u0002\u001f",
    ")\u0003\u0002\u0002\u0002 !\u0007\b\u0002\u0002!\"\u0005\u0004\u0003",
    "\u0002\"#\u0007\t\u0002\u0002#$\u0005\u0004\u0003\u0002$%\u0007\t\u0002",
    "\u0002%&\u0005\u0004\u0003\u0002&\'\u0007\u0004\u0002\u0002\')\u0003",
    "\u0002\u0002\u0002(\u0010\u0003\u0002\u0002\u0002(\u0012\u0003\u0002",
    "\u0002\u0002(\u0016\u0003\u0002\u0002\u0002(\u0018\u0003\u0002\u0002",
    "\u0002(\u001c\u0003\u0002\u0002\u0002( \u0003\u0002\u0002\u0002)0\u0003",
    "\u0002\u0002\u0002*+\f\b\u0002\u0002+,\u0005\b\u0005\u0002,-\u0005\u0004",
    "\u0003\t-/\u0003\u0002\u0002\u0002.*\u0003\u0002\u0002\u0002/2\u0003",
    "\u0002\u0002\u00020.\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u0002",
    "1\u0005\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000234\u0007\n",
    "\u0002\u00024I\u0007\"\u0002\u000256\u0007\u000b\u0002\u00026I\u0007",
    "\"\u0002\u000278\u0007\f\u0002\u00028I\u0007\"\u0002\u00029:\u0007\r",
    "\u0002\u0002:I\u0007\"\u0002\u0002;<\u0007\u000e\u0002\u0002<=\u0007",
    "\"\u0002\u0002=>\u0007\u000f\u0002\u0002>I\u0007!\u0002\u0002?@\u0007",
    "\u0010\u0002\u0002@A\u0007\"\u0002\u0002AI\u0007\u0004\u0002\u0002B",
    "C\u0007\u0011\u0002\u0002CD\u0007\"\u0002\u0002DI\u0007\u0004\u0002",
    "\u0002EI\u0007\u0012\u0002\u0002FI\u0007\u0013\u0002\u0002GI\u0007\u0014",
    "\u0002\u0002H3\u0003\u0002\u0002\u0002H5\u0003\u0002\u0002\u0002H7\u0003",
    "\u0002\u0002\u0002H9\u0003\u0002\u0002\u0002H;\u0003\u0002\u0002\u0002",
    "H?\u0003\u0002\u0002\u0002HB\u0003\u0002\u0002\u0002HE\u0003\u0002\u0002",
    "\u0002HF\u0003\u0002\u0002\u0002HG\u0003\u0002\u0002\u0002I\u0007\u0003",
    "\u0002\u0002\u0002JK\t\u0002\u0002\u0002K\t\u0003\u0002\u0002\u0002",
    "\u0006\r(0H"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'not'", "'not('", "'H('", "'versig('", 
                     "','", "'byte-base64 '", "'int '", "'addr '", "'addr('", 
                     "'tx('", "').'", "'txid('", "'arg('", "'txlen'", "'txpos'", 
                     "'arglen'", "'+'", "'\u2212'", "'<'", "'\u2264'", "'='", 
                     "'\u2265'", "'>'", "'\u2217'", "'/'", "'%'", "'and'", 
                     "'or'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "FIELD", "VALUE" ];

var ruleNames =  [ "prog", "expr", "val", "op" ];

function sectealParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

sectealParser.prototype = Object.create(antlr4.Parser.prototype);
sectealParser.prototype.constructor = sectealParser;

Object.defineProperty(sectealParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

sectealParser.EOF = antlr4.Token.EOF;
sectealParser.T__0 = 1;
sectealParser.T__1 = 2;
sectealParser.T__2 = 3;
sectealParser.T__3 = 4;
sectealParser.T__4 = 5;
sectealParser.T__5 = 6;
sectealParser.T__6 = 7;
sectealParser.T__7 = 8;
sectealParser.T__8 = 9;
sectealParser.T__9 = 10;
sectealParser.T__10 = 11;
sectealParser.T__11 = 12;
sectealParser.T__12 = 13;
sectealParser.T__13 = 14;
sectealParser.T__14 = 15;
sectealParser.T__15 = 16;
sectealParser.T__16 = 17;
sectealParser.T__17 = 18;
sectealParser.T__18 = 19;
sectealParser.T__19 = 20;
sectealParser.T__20 = 21;
sectealParser.T__21 = 22;
sectealParser.T__22 = 23;
sectealParser.T__23 = 24;
sectealParser.T__24 = 25;
sectealParser.T__25 = 26;
sectealParser.T__26 = 27;
sectealParser.T__27 = 28;
sectealParser.T__28 = 29;
sectealParser.T__29 = 30;
sectealParser.FIELD = 31;
sectealParser.VALUE = 32;

sectealParser.RULE_prog = 0;
sectealParser.RULE_expr = 1;
sectealParser.RULE_val = 2;
sectealParser.RULE_op = 3;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sectealParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof sectealListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof sectealListener ) {
        listener.exitProg(this);
	}
};




sectealParser.ProgContext = ProgContext;

sectealParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, sectealParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 11;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sectealParser.T__0) | (1 << sectealParser.T__2) | (1 << sectealParser.T__3) | (1 << sectealParser.T__4) | (1 << sectealParser.T__5) | (1 << sectealParser.T__7) | (1 << sectealParser.T__8) | (1 << sectealParser.T__9) | (1 << sectealParser.T__10) | (1 << sectealParser.T__11) | (1 << sectealParser.T__13) | (1 << sectealParser.T__14) | (1 << sectealParser.T__15) | (1 << sectealParser.T__16) | (1 << sectealParser.T__17))) !== 0)) {
            this.state = 8;
            this.expr(0);
            this.state = 13;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sectealParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.val = function() {
    return this.getTypedRuleContext(ValContext,0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.op = function() {
    return this.getTypedRuleContext(OpContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sectealListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sectealListener ) {
        listener.exitExpr(this);
	}
};



sectealParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, sectealParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sectealParser.T__7:
        case sectealParser.T__8:
        case sectealParser.T__9:
        case sectealParser.T__10:
        case sectealParser.T__11:
        case sectealParser.T__13:
        case sectealParser.T__14:
        case sectealParser.T__15:
        case sectealParser.T__16:
        case sectealParser.T__17:
            this.state = 15;
            this.val();
            break;
        case sectealParser.T__0:
            this.state = 16;
            this.match(sectealParser.T__0);
            this.state = 17;
            this.expr(0);
            this.state = 18;
            this.match(sectealParser.T__1);
            break;
        case sectealParser.T__2:
            this.state = 20;
            this.match(sectealParser.T__2);
            this.state = 21;
            this.expr(4);
            break;
        case sectealParser.T__3:
            this.state = 22;
            this.match(sectealParser.T__3);
            this.state = 23;
            this.expr(0);
            this.state = 24;
            this.match(sectealParser.T__1);
            break;
        case sectealParser.T__4:
            this.state = 26;
            this.match(sectealParser.T__4);
            this.state = 27;
            this.expr(0);
            this.state = 28;
            this.match(sectealParser.T__1);
            break;
        case sectealParser.T__5:
            this.state = 30;
            this.match(sectealParser.T__5);
            this.state = 31;
            this.expr(0);
            this.state = 32;
            this.match(sectealParser.T__6);
            this.state = 33;
            this.expr(0);
            this.state = 34;
            this.match(sectealParser.T__6);
            this.state = 35;
            this.expr(0);
            this.state = 36;
            this.match(sectealParser.T__1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 46;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExprContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, sectealParser.RULE_expr);
                this.state = 40;
                if (!( this.precpred(this._ctx, 6))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                }
                this.state = 41;
                this.op();
                this.state = 42;
                this.expr(7); 
            }
            this.state = 48;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ValContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sectealParser.RULE_val;
    return this;
}

ValContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValContext.prototype.constructor = ValContext;

ValContext.prototype.VALUE = function() {
    return this.getToken(sectealParser.VALUE, 0);
};

ValContext.prototype.FIELD = function() {
    return this.getToken(sectealParser.FIELD, 0);
};

ValContext.prototype.enterRule = function(listener) {
    if(listener instanceof sectealListener ) {
        listener.enterVal(this);
	}
};

ValContext.prototype.exitRule = function(listener) {
    if(listener instanceof sectealListener ) {
        listener.exitVal(this);
	}
};




sectealParser.ValContext = ValContext;

sectealParser.prototype.val = function() {

    var localctx = new ValContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, sectealParser.RULE_val);
    try {
        this.state = 70;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sectealParser.T__7:
            this.enterOuterAlt(localctx, 1);
            this.state = 49;
            this.match(sectealParser.T__7);
            this.state = 50;
            this.match(sectealParser.VALUE);
            break;
        case sectealParser.T__8:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.match(sectealParser.T__8);
            this.state = 52;
            this.match(sectealParser.VALUE);
            break;
        case sectealParser.T__9:
            this.enterOuterAlt(localctx, 3);
            this.state = 53;
            this.match(sectealParser.T__9);
            this.state = 54;
            this.match(sectealParser.VALUE);
            break;
        case sectealParser.T__10:
            this.enterOuterAlt(localctx, 4);
            this.state = 55;
            this.match(sectealParser.T__10);
            this.state = 56;
            this.match(sectealParser.VALUE);
            break;
        case sectealParser.T__11:
            this.enterOuterAlt(localctx, 5);
            this.state = 57;
            this.match(sectealParser.T__11);
            this.state = 58;
            this.match(sectealParser.VALUE);
            this.state = 59;
            this.match(sectealParser.T__12);
            this.state = 60;
            this.match(sectealParser.FIELD);
            break;
        case sectealParser.T__13:
            this.enterOuterAlt(localctx, 6);
            this.state = 61;
            this.match(sectealParser.T__13);
            this.state = 62;
            this.match(sectealParser.VALUE);
            this.state = 63;
            this.match(sectealParser.T__1);
            break;
        case sectealParser.T__14:
            this.enterOuterAlt(localctx, 7);
            this.state = 64;
            this.match(sectealParser.T__14);
            this.state = 65;
            this.match(sectealParser.VALUE);
            this.state = 66;
            this.match(sectealParser.T__1);
            break;
        case sectealParser.T__15:
            this.enterOuterAlt(localctx, 8);
            this.state = 67;
            this.match(sectealParser.T__15);
            break;
        case sectealParser.T__16:
            this.enterOuterAlt(localctx, 9);
            this.state = 68;
            this.match(sectealParser.T__16);
            break;
        case sectealParser.T__17:
            this.enterOuterAlt(localctx, 10);
            this.state = 69;
            this.match(sectealParser.T__17);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sectealParser.RULE_op;
    return this;
}

OpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OpContext.prototype.constructor = OpContext;


OpContext.prototype.enterRule = function(listener) {
    if(listener instanceof sectealListener ) {
        listener.enterOp(this);
	}
};

OpContext.prototype.exitRule = function(listener) {
    if(listener instanceof sectealListener ) {
        listener.exitOp(this);
	}
};




sectealParser.OpContext = OpContext;

sectealParser.prototype.op = function() {

    var localctx = new OpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, sectealParser.RULE_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sectealParser.T__18) | (1 << sectealParser.T__19) | (1 << sectealParser.T__20) | (1 << sectealParser.T__21) | (1 << sectealParser.T__22) | (1 << sectealParser.T__23) | (1 << sectealParser.T__24) | (1 << sectealParser.T__25) | (1 << sectealParser.T__26) | (1 << sectealParser.T__27) | (1 << sectealParser.T__28) | (1 << sectealParser.T__29))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


sectealParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

sectealParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.sectealParser = sectealParser;
