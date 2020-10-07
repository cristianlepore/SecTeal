// Generated from steal.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class stealParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, BYTE=30, FIGURE=31, 
		FIELD=32, DIGIT=33;
	public static final int
		RULE_exp_noc = 0, RULE_exp_c = 1, RULE_val = 2, RULE_integerz = 3, RULE_op = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"exp_noc", "exp_c", "val", "integerz", "op"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'not ('", "'tx('", "').'", "'txlen'", "'txid('", 
			"'txpos'", "'arg('", "'arglen'", "'H('", "'verisig('", "', '", "','", 
			"'byte base64 '", "'int '", "'addr '", "' + '", "' \u2212 '", "' < '", 
			"' \u2264 '", "' = '", "' \u2265 '", "' > '", "' \u2217 '", "' / '", 
			"' % '", "' and '", "' or '"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "BYTE", "FIGURE", "FIELD", "DIGIT"
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
	public String getGrammarFileName() { return "steal.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public stealParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class Exp_nocContext extends ParserRuleContext {
		public ValContext val() {
			return getRuleContext(ValContext.class,0);
		}
		public List<Exp_cContext> exp_c() {
			return getRuleContexts(Exp_cContext.class);
		}
		public Exp_cContext exp_c(int i) {
			return getRuleContext(Exp_cContext.class,i);
		}
		public OpContext op() {
			return getRuleContext(OpContext.class,0);
		}
		public Exp_nocContext exp_noc() {
			return getRuleContext(Exp_nocContext.class,0);
		}
		public IntegerzContext integerz() {
			return getRuleContext(IntegerzContext.class,0);
		}
		public TerminalNode FIELD() { return getToken(stealParser.FIELD, 0); }
		public Exp_nocContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp_noc; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof stealListener ) ((stealListener)listener).enterExp_noc(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof stealListener ) ((stealListener)listener).exitExp_noc(this);
		}
	}

	public final Exp_nocContext exp_noc() throws RecognitionException {
		Exp_nocContext _localctx = new Exp_nocContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_exp_noc);
		try {
			setState(49);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__14:
			case T__15:
			case T__16:
				enterOuterAlt(_localctx, 1);
				{
				setState(10);
				val();
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 2);
				{
				setState(11);
				match(T__0);
				setState(12);
				exp_c();
				setState(13);
				op();
				setState(14);
				exp_noc();
				setState(15);
				match(T__1);
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 3);
				{
				setState(17);
				match(T__2);
				setState(18);
				exp_noc();
				setState(19);
				match(T__1);
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 4);
				{
				setState(21);
				match(T__3);
				setState(22);
				integerz();
				setState(23);
				match(T__4);
				setState(24);
				match(FIELD);
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 5);
				{
				setState(26);
				match(T__5);
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 6);
				{
				setState(27);
				match(T__6);
				setState(28);
				integerz();
				setState(29);
				match(T__1);
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 7);
				{
				setState(31);
				match(T__7);
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 8);
				{
				setState(32);
				match(T__8);
				setState(33);
				integerz();
				setState(34);
				match(T__1);
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 9);
				{
				setState(36);
				match(T__9);
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 10);
				{
				setState(37);
				match(T__10);
				setState(38);
				exp_noc();
				setState(39);
				match(T__1);
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 11);
				{
				setState(41);
				match(T__11);
				setState(42);
				exp_c();
				setState(43);
				match(T__12);
				setState(44);
				exp_c();
				setState(45);
				match(T__12);
				setState(46);
				exp_noc();
				setState(47);
				match(T__1);
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

	public static class Exp_cContext extends ParserRuleContext {
		public ValContext val() {
			return getRuleContext(ValContext.class,0);
		}
		public List<Exp_cContext> exp_c() {
			return getRuleContexts(Exp_cContext.class);
		}
		public Exp_cContext exp_c(int i) {
			return getRuleContext(Exp_cContext.class,i);
		}
		public OpContext op() {
			return getRuleContext(OpContext.class,0);
		}
		public Exp_nocContext exp_noc() {
			return getRuleContext(Exp_nocContext.class,0);
		}
		public IntegerzContext integerz() {
			return getRuleContext(IntegerzContext.class,0);
		}
		public TerminalNode FIELD() { return getToken(stealParser.FIELD, 0); }
		public Exp_cContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp_c; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof stealListener ) ((stealListener)listener).enterExp_c(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof stealListener ) ((stealListener)listener).exitExp_c(this);
		}
	}

	public final Exp_cContext exp_c() throws RecognitionException {
		Exp_cContext _localctx = new Exp_cContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_exp_c);
		try {
			setState(90);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__14:
			case T__15:
			case T__16:
				enterOuterAlt(_localctx, 1);
				{
				setState(51);
				val();
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 2);
				{
				setState(52);
				match(T__0);
				setState(53);
				exp_c();
				setState(54);
				op();
				setState(55);
				exp_noc();
				setState(56);
				match(T__1);
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 3);
				{
				setState(58);
				match(T__2);
				setState(59);
				exp_noc();
				setState(60);
				match(T__1);
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 4);
				{
				setState(62);
				match(T__3);
				setState(63);
				integerz();
				setState(64);
				match(T__4);
				setState(65);
				match(FIELD);
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 5);
				{
				setState(67);
				match(T__5);
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 6);
				{
				setState(68);
				match(T__6);
				setState(69);
				integerz();
				setState(70);
				match(T__1);
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 7);
				{
				setState(72);
				match(T__7);
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 8);
				{
				setState(73);
				match(T__8);
				setState(74);
				integerz();
				setState(75);
				match(T__1);
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 9);
				{
				setState(77);
				match(T__9);
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 10);
				{
				setState(78);
				match(T__10);
				setState(79);
				exp_noc();
				setState(80);
				match(T__1);
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 11);
				{
				setState(82);
				match(T__11);
				setState(83);
				exp_c();
				setState(84);
				match(T__13);
				setState(85);
				exp_c();
				setState(86);
				match(T__13);
				setState(87);
				exp_noc();
				setState(88);
				match(T__1);
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

	public static class ValContext extends ParserRuleContext {
		public IntegerzContext integerz() {
			return getRuleContext(IntegerzContext.class,0);
		}
		public ValContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_val; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof stealListener ) ((stealListener)listener).enterVal(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof stealListener ) ((stealListener)listener).exitVal(this);
		}
	}

	public final ValContext val() throws RecognitionException {
		ValContext _localctx = new ValContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_val);
		try {
			setState(98);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__14:
				enterOuterAlt(_localctx, 1);
				{
				setState(92);
				match(T__14);
				setState(93);
				integerz();
				}
				break;
			case T__15:
				enterOuterAlt(_localctx, 2);
				{
				setState(94);
				match(T__15);
				setState(95);
				integerz();
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 3);
				{
				setState(96);
				match(T__16);
				setState(97);
				integerz();
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

	public static class IntegerzContext extends ParserRuleContext {
		public List<TerminalNode> FIGURE() { return getTokens(stealParser.FIGURE); }
		public TerminalNode FIGURE(int i) {
			return getToken(stealParser.FIGURE, i);
		}
		public IntegerzContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integerz; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof stealListener ) ((stealListener)listener).enterIntegerz(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof stealListener ) ((stealListener)listener).exitIntegerz(this);
		}
	}

	public final IntegerzContext integerz() throws RecognitionException {
		IntegerzContext _localctx = new IntegerzContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_integerz);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(100);
				match(FIGURE);
				}
				}
				setState(103); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==FIGURE );
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof stealListener ) ((stealListener)listener).enterOp(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof stealListener ) ((stealListener)listener).exitOp(this);
		}
	}

	public final OpContext op() throws RecognitionException {
		OpContext _localctx = new OpContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_op);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__17) | (1L << T__18) | (1L << T__19) | (1L << T__20) | (1L << T__21) | (1L << T__22) | (1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__26) | (1L << T__27) | (1L << T__28))) != 0)) ) {
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

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3#n\4\2\t\2\4\3\t\3"+
		"\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3"+
		"\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\5\2\64\n\2\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5"+
		"\3]\n\3\3\4\3\4\3\4\3\4\3\4\3\4\5\4e\n\4\3\5\6\5h\n\5\r\5\16\5i\3\6\3"+
		"\6\3\6\2\2\7\2\4\6\b\n\2\3\3\2\24\37\2\177\2\63\3\2\2\2\4\\\3\2\2\2\6"+
		"d\3\2\2\2\bg\3\2\2\2\nk\3\2\2\2\f\64\5\6\4\2\r\16\7\3\2\2\16\17\5\4\3"+
		"\2\17\20\5\n\6\2\20\21\5\2\2\2\21\22\7\4\2\2\22\64\3\2\2\2\23\24\7\5\2"+
		"\2\24\25\5\2\2\2\25\26\7\4\2\2\26\64\3\2\2\2\27\30\7\6\2\2\30\31\5\b\5"+
		"\2\31\32\7\7\2\2\32\33\7\"\2\2\33\64\3\2\2\2\34\64\7\b\2\2\35\36\7\t\2"+
		"\2\36\37\5\b\5\2\37 \7\4\2\2 \64\3\2\2\2!\64\7\n\2\2\"#\7\13\2\2#$\5\b"+
		"\5\2$%\7\4\2\2%\64\3\2\2\2&\64\7\f\2\2\'(\7\r\2\2()\5\2\2\2)*\7\4\2\2"+
		"*\64\3\2\2\2+,\7\16\2\2,-\5\4\3\2-.\7\17\2\2./\5\4\3\2/\60\7\17\2\2\60"+
		"\61\5\2\2\2\61\62\7\4\2\2\62\64\3\2\2\2\63\f\3\2\2\2\63\r\3\2\2\2\63\23"+
		"\3\2\2\2\63\27\3\2\2\2\63\34\3\2\2\2\63\35\3\2\2\2\63!\3\2\2\2\63\"\3"+
		"\2\2\2\63&\3\2\2\2\63\'\3\2\2\2\63+\3\2\2\2\64\3\3\2\2\2\65]\5\6\4\2\66"+
		"\67\7\3\2\2\678\5\4\3\289\5\n\6\29:\5\2\2\2:;\7\4\2\2;]\3\2\2\2<=\7\5"+
		"\2\2=>\5\2\2\2>?\7\4\2\2?]\3\2\2\2@A\7\6\2\2AB\5\b\5\2BC\7\7\2\2CD\7\""+
		"\2\2D]\3\2\2\2E]\7\b\2\2FG\7\t\2\2GH\5\b\5\2HI\7\4\2\2I]\3\2\2\2J]\7\n"+
		"\2\2KL\7\13\2\2LM\5\b\5\2MN\7\4\2\2N]\3\2\2\2O]\7\f\2\2PQ\7\r\2\2QR\5"+
		"\2\2\2RS\7\4\2\2S]\3\2\2\2TU\7\16\2\2UV\5\4\3\2VW\7\20\2\2WX\5\4\3\2X"+
		"Y\7\20\2\2YZ\5\2\2\2Z[\7\4\2\2[]\3\2\2\2\\\65\3\2\2\2\\\66\3\2\2\2\\<"+
		"\3\2\2\2\\@\3\2\2\2\\E\3\2\2\2\\F\3\2\2\2\\J\3\2\2\2\\K\3\2\2\2\\O\3\2"+
		"\2\2\\P\3\2\2\2\\T\3\2\2\2]\5\3\2\2\2^_\7\21\2\2_e\5\b\5\2`a\7\22\2\2"+
		"ae\5\b\5\2bc\7\23\2\2ce\5\b\5\2d^\3\2\2\2d`\3\2\2\2db\3\2\2\2e\7\3\2\2"+
		"\2fh\7!\2\2gf\3\2\2\2hi\3\2\2\2ig\3\2\2\2ij\3\2\2\2j\t\3\2\2\2kl\t\2\2"+
		"\2l\13\3\2\2\2\6\63\\di";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}