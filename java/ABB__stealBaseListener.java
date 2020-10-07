// Generated from steal.g4 by ANTLR 4.8

// actually renamed ABBstealBaseListener to avoid it is automatically overwritten from a call to antlr4
// IF the grammar changes then antlr4 has to be re-run and THIS file and stealBasedListener.java (with possibly
// new/different methods to be overridden!) must be merged.

import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.tree.ErrorNode;
import org.antlr.v4.runtime.tree.TerminalNode;


import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

/**
 * This class provides an empty implementation of {@link stealListener},
 * which can be extended to create a listener which only needs to handle a subset
 * of the available methods.
 */
public class ABB__stealBaseListener implements stealListener {
    public static File myObj = new File("/var/www/html/secteal-string-java.txt");

	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void enterExp_noc(stealParser.Exp_nocContext ctx) {
        File myObj = new File("/var/www/html/secteal-string-java.txt");
        
	    // INTEGERZ are read directly! no- production so far.

        try {
            if (myObj.createNewFile()) {
                if (ctx.getChild(0).getText().equals("(")){             // Nota questo deve essere l'unico caso che identifica (exp OP exp), 
                                                                    // unico che trasforma ( in [
                System.out.print("[");                             // NOTA anche qui mancano le virgole !!!
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[");
                myWriter.close();
                } else if (ctx.getChild(0).getText().equals("not (")){
                System.out.print("'not', [");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("'not', [");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("tx(")){
                System.out.print("[ 'tx', '"+ctx.getChild(1).getText()+"', '"+ctx.getChild(3).getText()+"']");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'tx', '"+ctx.getChild(1).getText()+"', '"+ctx.getChild(3).getText()+"']");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("txlen")){
                System.out.print("[ 'txlen' ] ");	
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'txlen' ] ");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("txid(")){
                System.out.print("[ 'txid', '"+ctx.getChild(1).getText()+"']");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'txid', '"+ctx.getChild(1).getText()+"']");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("txpos")){
                System.out.print("[ 'txpos' ]");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'txpos' ]");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("arg(")){
                System.out.print("[ 'arg', '"+ctx.getChild(1).getText()+"']");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'arg', '"+ctx.getChild(1).getText()+"']");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("arglen")){
                System.out.print("[ 'arglen' ]");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'arglen' ]");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("H(")){
                System.out.print("[ 'H', ");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'H', ");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("verisig(")){
                System.out.print("[ 'verisig', ");              
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'verisig', ");
                myWriter.close();
                }
            } else {
                if (ctx.getChild(0).getText().equals("(")){             // Nota questo deve essere l'unico caso che identifica (exp OP exp), 
                                                                    // unico che trasforma ( in [
                System.out.print("[");                             // NOTA anche qui mancano le virgole !!!
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "[".getBytes(), StandardOpenOption.APPEND);
                } else if (ctx.getChild(0).getText().equals("not (")){
                System.out.print("'not', [");
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "'not', [".getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("tx(")){
                System.out.print("[ 'tx', '"+ctx.getChild(1).getText()+"', '"+ctx.getChild(3).getText()+"']");
                String value = "[ 'tx', '"+ctx.getChild(1).getText()+"', '"+ctx.getChild(3).getText()+"']";
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), value.getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("txlen")){
                System.out.print("[ 'txlen' ] ");	
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "[ 'txlen' ] ".getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("txid(")){
                System.out.print("[ 'txid', '"+ctx.getChild(1).getText()+"']");
                String value = "[ 'txid', '"+ctx.getChild(1).getText()+"']";
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), value.getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("txpos")){
                System.out.print("[ 'txpos' ]");
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "[ 'txpos' ]".getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("arg(")){
                System.out.print("[ 'arg', '"+ctx.getChild(1).getText()+"']");
                String value = "[ 'arg', '"+ctx.getChild(1).getText()+"']";
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), value.getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("arglen")){
                System.out.print("[ 'arglen' ]");
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "[ 'arglen' ]".getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("H(")){
                System.out.print("[ 'H', ");
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "[ 'H', ".getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("verisig(")){
                System.out.print("[ 'verisig', ");              
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "[ 'verisig', ".getBytes(), StandardOpenOption.APPEND);
                }
			}
	    } catch (IOException e) {
			e.printStackTrace();
		}
	}
	


	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void exitExp_noc(stealParser.Exp_nocContext ctx) { 
        File myObj = new File("/var/www/html/secteal-string-java.txt");
        
	    if (ctx.getChild(0).getText().equals("(") ||
		ctx.getChild(0).getText().equals("not (") ||
		ctx.getChild(0).getText().equals("H(") ||
		ctx.getChild(0).getText().equals("verisig(")
		) {
            try {
                if (myObj.createNewFile()) {
                    System.out.print("]");
                    FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                    myWriter.write("]");
                    myWriter.close();
                } else {
                    System.out.print("]");
                    Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "]".getBytes(), StandardOpenOption.APPEND);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
		}

	}


	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void enterExp_c(stealParser.Exp_cContext ctx) {  
        File myObj = new File("/var/www/html/secteal-string-java.txt");
	    // Enter as enterExp_noc


	    try {
			if (myObj.createNewFile()) {
                if (ctx.getChild(0).getText().equals("(")){             // Nota questo deve essere l'unico caso che identifica (exp OP exp), 
		                                                    // unico che trasforma ( in [
                System.out.print("[");                              // NOTA anche qui mancano le virgole !!!
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[");
                myWriter.close();
                } else if (ctx.getChild(0).getText().equals("not (")){
                System.out.print("'not', [");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("'not', [");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("tx(")){
                System.out.print("[ 'tx', '"+ctx.getChild(1).getText()+"', '"+ctx.getChild(3).getText()+"'],");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'tx', '"+ctx.getChild(1).getText()+"', '"+ctx.getChild(3).getText()+"'],");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("txlen")){
                System.out.print("[ 'txlen' ],");	
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'txlen' ],");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("txid(")){
                System.out.print("[ 'txid', '"+ctx.getChild(1).getText()+"'],");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'txid', '"+ctx.getChild(1).getText()+"'],");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("txpos")){
                System.out.print("[ 'txpos' ]");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'txpos' ]");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("arg(")){
                System.out.print("[ 'arg', '"+ctx.getChild(1).getText()+"'],");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'arg', '"+ctx.getChild(1).getText()+"'],");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("arglen")){
                System.out.print("[ 'arglen' ]");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'arglen' ]");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("H(")){
                System.out.print("[ 'H', ");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'H', ");
                myWriter.close();
                } else if  (ctx.getChild(0).getText().equals("verisig(")){
                System.out.print("[ 'verisig', ");      
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                myWriter.write("[ 'verisig', ");
                myWriter.close();
                } 
			} else {
                if (ctx.getChild(0).getText().equals("(")){             // Nota questo deve essere l'unico caso che identifica (exp OP exp), 
		                                                    // unico che trasforma ( in [
                System.out.print("[");                              // NOTA anche qui mancano le virgole !!!
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "[".getBytes(), StandardOpenOption.APPEND);
                } else if (ctx.getChild(0).getText().equals("not (")){
                System.out.print("'not', [");
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "'not', [".getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("tx(")){
                System.out.print("[ 'tx', '"+ctx.getChild(1).getText()+"', '"+ctx.getChild(3).getText()+"'],");
                String value = "[ 'tx', '"+ctx.getChild(1).getText()+"', '"+ctx.getChild(3).getText()+"'],";
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), value.getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("txlen")){
                System.out.print("[ 'txlen' ],");	
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "[ 'txlen' ],".getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("txid(")){
                System.out.print("[ 'txid', '"+ctx.getChild(1).getText()+"'],");
                String value = "[ 'txid', '"+ctx.getChild(1).getText()+"'],";
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), value.getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("txpos")){
                System.out.print("[ 'txpos' ]");
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "[ 'txpos' ]".getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("arg(")){
                System.out.print("[ 'arg', '"+ctx.getChild(1).getText()+"'],");
                String value = "[ 'arg', '"+ctx.getChild(1).getText()+"'],";
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), value.getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("arglen")){
                System.out.print("[ 'arglen' ]");
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "[ 'arglen' ]".getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("H(")){
                System.out.print("[ 'H', ");
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "[ 'H', ".getBytes(), StandardOpenOption.APPEND);
                } else if  (ctx.getChild(0).getText().equals("verisig(")){
                System.out.print("[ 'verisig', ");      
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "[ 'verisig', ".getBytes(), StandardOpenOption.APPEND);
                } 
			}
        } catch (IOException e) {
			e.printStackTrace();
		}
    }


	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void exitExp_c(stealParser.Exp_cContext ctx) { 
        File myObj = new File("/var/www/html/secteal-string-java.txt");
        
	    if (ctx.getChild(0).getText().equals("(") ||
		ctx.getChild(0).getText().equals("not (") ||
		ctx.getChild(0).getText().equals("H(") ||
		ctx.getChild(0).getText().equals("verisig(")
		)

		try {
			if (myObj.createNewFile()) {
                System.out.print("], ");
                FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
			    myWriter.write("], ");
			    myWriter.close();
			} else {
                System.out.print("], ");
                Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), "], ".getBytes(), StandardOpenOption.APPEND);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}

	}







	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void enterVal(stealParser.ValContext ctx) {
        File myObj = new File("/var/www/html/secteal-string-java.txt");
        
        if (ctx.getChild(0).getText().equals("byte base64 "))  {
            try {
                if (myObj.createNewFile()) {
                    System.out.print("['byte base64', "+"'"+ctx.getChild(1).getText()+"']");
                    FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                    myWriter.write("['byte base64', "+"'"+ctx.getChild(1).getText()+"']");
                    myWriter.close();
                } else {
                    System.out.print("['byte base64', "+"'"+ctx.getChild(1).getText()+"']");
                    String value = "['byte base64', "+"'"+ctx.getChild(1).getText()+"']";
                    Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), value.getBytes(), StandardOpenOption.APPEND);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            try {
                if (myObj.createNewFile()) {
                    System.out.print("['"+ctx.getChild(0).getText().replaceAll("\\s", "")+"', "+"'"+ctx.getChild(1).getText()+"']");
                    FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
                    myWriter.write("['"+ctx.getChild(0).getText().replaceAll("\\s", "")+"', "+"'"+ctx.getChild(1).getText()+"']");
                    myWriter.close();
                } else {
                    System.out.print("['"+ctx.getChild(0).getText().replaceAll("\\s", "")+"', "+"'"+ctx.getChild(1).getText()+"']");
                    String value = "['"+ctx.getChild(0).getText().replaceAll("\\s", "")+"', "+"'"+ctx.getChild(1).getText()+"']";
                    Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), value.getBytes(), StandardOpenOption.APPEND);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

	}


	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void exitVal(stealParser.ValContext ctx) {
	    
	}


	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void enterIntegerz(stealParser.IntegerzContext ctx) { 
	    // System.out.print("'"+ctx.getText()+"'");

	}


	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void exitIntegerz(stealParser.IntegerzContext ctx) { }



	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void enterOp(stealParser.OpContext ctx) { 
		File myObj = new File("/var/www/html/secteal-string-java.txt");
		
		try {
			if (myObj.createNewFile()) {
                System.out.print("'"+ctx.getText().replaceAll("\\s", "")+"', ");
				FileWriter myWriter = new FileWriter("/var/www/html/secteal-string-java.txt");
			    myWriter.write("'"+ctx.getText().replaceAll("\\s", "")+"', ");
			    myWriter.close();
			} else {
                System.out.print("'"+ctx.getText().replaceAll("\\s", "")+"', ");
                String value = "'"+ctx.getText().replaceAll("\\s", "")+"', ";
				Files.write(Paths.get("/var/www/html/secteal-string-java.txt"), value.getBytes(), StandardOpenOption.APPEND);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}



	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void exitOp(stealParser.OpContext ctx) {
	    }









	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void enterEveryRule(ParserRuleContext ctx) { }


	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void exitEveryRule(ParserRuleContext ctx) { }


	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void visitTerminal(TerminalNode node) { }


	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override public void visitErrorNode(ErrorNode node) { }
}
