// Generated from steal.g4 by ANTLR 4.8
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link stealParser}.
 */
public interface stealListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link stealParser#exp_noc}.
	 * @param ctx the parse tree
	 */
	void enterExp_noc(stealParser.Exp_nocContext ctx);
	/**
	 * Exit a parse tree produced by {@link stealParser#exp_noc}.
	 * @param ctx the parse tree
	 */
	void exitExp_noc(stealParser.Exp_nocContext ctx);
	/**
	 * Enter a parse tree produced by {@link stealParser#exp_c}.
	 * @param ctx the parse tree
	 */
	void enterExp_c(stealParser.Exp_cContext ctx);
	/**
	 * Exit a parse tree produced by {@link stealParser#exp_c}.
	 * @param ctx the parse tree
	 */
	void exitExp_c(stealParser.Exp_cContext ctx);
	/**
	 * Enter a parse tree produced by {@link stealParser#val}.
	 * @param ctx the parse tree
	 */
	void enterVal(stealParser.ValContext ctx);
	/**
	 * Exit a parse tree produced by {@link stealParser#val}.
	 * @param ctx the parse tree
	 */
	void exitVal(stealParser.ValContext ctx);
	/**
	 * Enter a parse tree produced by {@link stealParser#integerz}.
	 * @param ctx the parse tree
	 */
	void enterIntegerz(stealParser.IntegerzContext ctx);
	/**
	 * Exit a parse tree produced by {@link stealParser#integerz}.
	 * @param ctx the parse tree
	 */
	void exitIntegerz(stealParser.IntegerzContext ctx);
	/**
	 * Enter a parse tree produced by {@link stealParser#op}.
	 * @param ctx the parse tree
	 */
	void enterOp(stealParser.OpContext ctx);
	/**
	 * Exit a parse tree produced by {@link stealParser#op}.
	 * @param ctx the parse tree
	 */
	void exitOp(stealParser.OpContext ctx);
}