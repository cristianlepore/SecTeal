// Generated from /var/www/html/parser/secteal.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class sectealParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, FIELD=31, 
		VALUE=32;
	public static final int
		RULE_prog = 0, RULE_expr = 1, RULE_val = 2, RULE_op = 3;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "expr", "val", "op"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'not'", "'not('", "'H('", "'versig('", "','", "'byte-base64 '", 
			"'int '", "'addr '", "'addr('", "'tx('", "').'", "'txid('", "'arg('", 
			"'txlen'", "'txpos'", "'arglen'", "'+'", "'\u2212'", "'<'", "'\u2264'", 
			"'='", "'\u2265'", "'>'", "'\u2217'", "'/'", "'%'", "'and'", "'or'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, "FIELD", "VALUE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "secteal.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public sectealParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(11);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__13) | (1L << T__14) | (1L << T__15) | (1L << T__16) | (1L << T__17))) != 0)) {
				{
				{
				setState(8);
				expr(0);
				}
				}
				setState(13);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public ValContext val() {
			return getRuleContext(ValContext.class,0);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public OpContext op() {
			return getRuleContext(OpContext.class,0);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
			case T__8:
			case T__9:
			case T__10:
			case T__11:
			case T__13:
			case T__14:
			case T__15:
			case T__16:
			case T__17:
				{
				setState(15);
				val();
				}
				break;
			case T__0:
				{
				setState(16);
				match(T__0);
				setState(17);
				expr(0);
				setState(18);
				match(T__1);
				}
				break;
			case T__2:
				{
				setState(20);
				match(T__2);
				setState(21);
				expr(4);
				}
				break;
			case T__3:
				{
				setState(22);
				match(T__3);
				setState(23);
				expr(0);
				setState(24);
				match(T__1);
				}
				break;
			case T__4:
				{
				setState(26);
				match(T__4);
				setState(27);
				expr(0);
				setState(28);
				match(T__1);
				}
				break;
			case T__5:
				{
				setState(30);
				match(T__5);
				setState(31);
				expr(0);
				setState(32);
				match(T__6);
				setState(33);
				expr(0);
				setState(34);
				match(T__6);
				setState(35);
				expr(0);
				setState(36);
				match(T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(46);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExprContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_expr);
					setState(40);
					if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
					setState(41);
					op();
					setState(42);
					expr(7);
					}
					} 
				}
				setState(48);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ValContext extends ParserRuleContext {
		public TerminalNode VALUE() { return getToken(sectealParser.VALUE, 0); }
		public TerminalNode FIELD() { return getToken(sectealParser.FIELD, 0); }
		public ValContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_val; }
	}

	public final ValContext val() throws RecognitionException {
		ValContext _localctx = new ValContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_val);
		try {
			setState(70);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
				enterOuterAlt(_localctx, 1);
				{
				setState(49);
				match(T__7);
				setState(50);
				match(VALUE);
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 2);
				{
				setState(51);
				match(T__8);
				setState(52);
				match(VALUE);
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 3);
				{
				setState(53);
				match(T__9);
				setState(54);
				match(VALUE);
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 4);
				{
				setState(55);
				match(T__10);
				setState(56);
				match(VALUE);
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 5);
				{
				setState(57);
				match(T__11);
				setState(58);
				match(VALUE);
				setState(59);
				match(T__12);
				setState(60);
				match(FIELD);
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 6);
				{
				setState(61);
				match(T__13);
				setState(62);
				match(VALUE);
				setState(63);
				match(T__1);
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 7);
				{
				setState(64);
				match(T__14);
				setState(65);
				match(VALUE);
				setState(66);
				match(T__1);
				}
				break;
			case T__15:
				enterOuterAlt(_localctx, 8);
				{
				setState(67);
				match(T__15);
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 9);
				{
				setState(68);
				match(T__16);
				}
				break;
			case T__17:
				enterOuterAlt(_localctx, 10);
				{
				setState(69);
				match(T__17);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OpContext extends ParserRuleContext {
		public OpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_op; }
	}

	public final OpContext op() throws RecognitionException {
		OpContext _localctx = new OpContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_op);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__18) | (1L << T__19) | (1L << T__20) | (1L << T__21) | (1L << T__22) | (1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__26) | (1L << T__27) | (1L << T__28) | (1L << T__29))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 6);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\"M\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\3\2\7\2\f\n\2\f\2\16\2\17\13\2\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\5\3)\n\3\3\3\3\3\3\3\3\3\7\3/\n\3\f\3\16\3\62\13\3\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\5\4I\n\4\3\5\3\5\3\5\2\3\4\6\2\4\6\b\2\3\3\2\25 \2X\2\r\3\2\2\2\4("+
		"\3\2\2\2\6H\3\2\2\2\bJ\3\2\2\2\n\f\5\4\3\2\13\n\3\2\2\2\f\17\3\2\2\2\r"+
		"\13\3\2\2\2\r\16\3\2\2\2\16\3\3\2\2\2\17\r\3\2\2\2\20\21\b\3\1\2\21)\5"+
		"\6\4\2\22\23\7\3\2\2\23\24\5\4\3\2\24\25\7\4\2\2\25)\3\2\2\2\26\27\7\5"+
		"\2\2\27)\5\4\3\6\30\31\7\6\2\2\31\32\5\4\3\2\32\33\7\4\2\2\33)\3\2\2\2"+
		"\34\35\7\7\2\2\35\36\5\4\3\2\36\37\7\4\2\2\37)\3\2\2\2 !\7\b\2\2!\"\5"+
		"\4\3\2\"#\7\t\2\2#$\5\4\3\2$%\7\t\2\2%&\5\4\3\2&\'\7\4\2\2\')\3\2\2\2"+
		"(\20\3\2\2\2(\22\3\2\2\2(\26\3\2\2\2(\30\3\2\2\2(\34\3\2\2\2( \3\2\2\2"+
		")\60\3\2\2\2*+\f\b\2\2+,\5\b\5\2,-\5\4\3\t-/\3\2\2\2.*\3\2\2\2/\62\3\2"+
		"\2\2\60.\3\2\2\2\60\61\3\2\2\2\61\5\3\2\2\2\62\60\3\2\2\2\63\64\7\n\2"+
		"\2\64I\7\"\2\2\65\66\7\13\2\2\66I\7\"\2\2\678\7\f\2\28I\7\"\2\29:\7\r"+
		"\2\2:I\7\"\2\2;<\7\16\2\2<=\7\"\2\2=>\7\17\2\2>I\7!\2\2?@\7\20\2\2@A\7"+
		"\"\2\2AI\7\4\2\2BC\7\21\2\2CD\7\"\2\2DI\7\4\2\2EI\7\22\2\2FI\7\23\2\2"+
		"GI\7\24\2\2H\63\3\2\2\2H\65\3\2\2\2H\67\3\2\2\2H9\3\2\2\2H;\3\2\2\2H?"+
		"\3\2\2\2HB\3\2\2\2HE\3\2\2\2HF\3\2\2\2HG\3\2\2\2I\7\3\2\2\2JK\t\2\2\2"+
		"K\t\3\2\2\2\6\r(\60H";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}